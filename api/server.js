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
