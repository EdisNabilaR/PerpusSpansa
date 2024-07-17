const express = require("express");
const cors = require("cors");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const db = require("./config/database");
const app = express();
const port = 3000;

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

app.get("/test", (req, res) => {
  res.send("Hello World!");
});


// BUKU 
app.get("/book", async (req, res) => {
  try {
    const DataBook = await db.query("SELECT * FROM book");
    // Hitung total buku
    const totalBuku = DataBook.length; 

    return res.status(200).json({
      msg: "Data buku berhasil di GET",
      total: totalBuku, 
      data: DataBook,
    });
  } catch (error) {
    return res.status(400).json({
      msg: "Data buku gagal di GET",
      err: error,
    });
  }
});


app.post('/bookform', (req, res) => {
  const sql = "INSERT INTO book (`judul`, `penerbit`, `kategori`) VALUES (?, ?, ?)";
  const values = [
    req.body.judul,
    req.body.penerbit,
    req.body.kategori
  ];

  db.query(sql, values, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error inserting data', error: err });
    }
    return res.status(200).json({ message: 'Data inserted successfully', data: data });
  });
});


app.put('/updatebook/:id', (req, res) => {
  const { id } = req.params; // Mengambil ID dari parameter URL
  const sql = "UPDATE book SET judul = ?, penerbit = ?, kategori = ? WHERE id = ?";
  const values = [
    req.body.judul,
    req.body.penerbit,
    req.body.kategori,
    id 
  ];

  db.query(sql, values, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error updating data', error: err });
    }
    return res.status(200).json({ message: 'Data updated successfully', data: data });
  });
});

app.delete('/book/:id', (req, res) => {
  const { id } = req.params; // Mengambil ID dari parameter URL
  const sql = "DELETE FROM book WHERE id = ?";

  db.query(sql, [id], (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error deleting data', error: err });
    }
    return res.status(200).json({ message: 'Data deleted successfully', data: data });
  });
});


// MEMBER
app.get("/member", async (req, res) => {
  try {
    const Datamember = await db.query("SELECT * FROM member");
   
    const totalMember = Datamember.length; 

    return res.status(200).json({
      msg: "Data member berhasil di GET",
      total: totalMember, 
      data: Datamember,
    });
  } catch (error) {
    return res.status(400).json({
      msg: "Data member gagal di GET",
      err: error,
    });
  }
});

app.post("/formmember", async (req, res) => {
  const sql = "INSERT INTO member (`nis`, `nama`, `nomortelepon`, `alamat`) VALUES (?, ?, ?, ?)";
  const { nis, nama, nomortelepon, alamat } = req.body;
  const values = [
    nis,
    nama,
    nomortelepon,
    alamat
  ];

  db.query(sql, values, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error inserting data', error: err });
    }
    return res.status(200).json({ message: 'Data inserted successfully', data: data });
  });
});

app.put("/updatemember/:id", async (req, res) => {
  const { id } = req.params; 
  const sql = "UPDATE member SET nis = ?, nama = ?, nomortelepon = ?, alamat = ? WHERE id = ?";
  const values = [
    req.body.nis,
    req.body.nama,
    req.body.nomortelepon,
    req.body.alamat,
    id 
  ];
  db.query(sql, values, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error update data', error: err });
    }
    return res.status(200).json({ message: 'Data update successfully', data: data });
  });
});

app.delete('/member/:id', (req, res) => {
  const { id } = req.params; 
  const sql = "DELETE FROM member WHERE id = ?";

  db.query(sql, [id], (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error deleting data', error: err });
    }
    return res.status(200).json({ message: 'Data deleted successfully', data: data });
  });
});





app.get("/users", async (req, res) => {
  try {
    const DataUser = await db.query("SELECT * FROM user");
    return res.status(200).json({
      msg: "Data user berhasil di GET",
      data: DataUser,
    });
  } catch (error) {
    return res.status(400).json({
      msg: "Data user gagal di GET",
      err: error,
    });
  }
});

app.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const DataUser = await db.query(`SELECT * FROM user WHERE id = ${id}`);
    return res.status(200).json({
      msg: "Data user berhasil di GET",
      data: DataUser[0],
    });
  } catch (error) {
    return res.status(400).json({
      msg: "Data user gagal di GET",
      err: error,
    });
  }
});

app.post("/daftar", async (req, res) => {
  const { email, password } = req.body;
  try {
    const post_data =
      await db.query(`INSERT INTO user(email, password) 
                                    VALUES ("${email}", "${password}")`);

    if (post_data) {
      const logInsert = await db.query(
        `INSERT INTO logs(pesan, waktu) VALUES ("User baru terdaftar dengan ID ${
          post_data.insertId
        }", "${new Date().toISOString().slice(0, 19).replace("T", " ")}")`,
      );
    }

    res.status(200).json({
      msg: "Berhasil membuat user",
      user: post_data,
    });
  } catch (error) {
    res.status(400).json({
      msg: "Gagal membuat user",
      err: error,
    });
  }
});


function generateToken(user) {
  return jwt.sign({ 
    id: user.id,
    email: user.email
  }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' }); // Menggunakan secret_key dari variabel lingkungan
}

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await db.query(`SELECT * FROM user WHERE email = "${email}" AND password = "${password}"`);
    
    if (user.length > 0) {
      const token = generateToken(user[0]); // Membuat token JWT

      const logInsert = await db.query(
        `INSERT INTO logs(pesan, waktu) VALUES ("User dengan email ${email} berhasil login", "${new Date().toISOString().slice(0, 19).replace("T", " ")}")`
      );

      res.status(200).json({
        msg: "Login berhasil",
        user: user[0], // Mengirimkan data user yang berhasil login
        token: token // Mengirimkan token JWT ke klien
      });
    } else {
      res.status(401).json({
        msg: "Login gagal, email atau password salah",
      });
    }
  } catch (error) {
    res.status(400).json({
      msg: "Gagal melakukan login",
      err: error,
    });
  }
});


app.post("/verifytoken", (req, res) => {
  const { token } = req.body;

  if (token) {
    const data = jwt.verify(token, process.env.JWT_SECRET_KEY);

    return res.json({
      data: data,
    });
  }

  return res.json({
    msg: "Token invalid",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
