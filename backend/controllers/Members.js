import Anggota from "../models/MemberModel.js";
import argon2 from "argon2";

export const getAnggotas = async (req, res) => {
  try {
    const response = await Anggota.findAll({
      attributes: ['uuid', 'kodeAnggota', 'nomorIndukSiswa', 'namaLengkap', 'namaPengguna', 'kelas', 'alamat']
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getAnggotaById = async (req, res) => {
  try {
    console.log("UUID received: ", req.params.id); // Tambahkan log ini
    const response = await Anggota.findOne({
      attributes: ['uuid', 'kodeAnggota', 'nomorIndukSiswa', 'namaLengkap', 'namaPengguna', 'kelas', 'alamat'],
      where: {
        uuid: req.params.id
      }
    });
    if (!response) return res.status(404).json({ msg: "Anggota tidak ditemukan" });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createAnggota = async (req, res) => {
  const { kodeAnggota, nomorIndukSiswa, namaLengkap, namaPengguna, kataSandi, kelas, alamat } = req.body;
  const hashPassword = await argon2.hash(kataSandi);
  try {
    await Anggota.create({
      kodeAnggota: kodeAnggota,
      nomorIndukSiswa: nomorIndukSiswa,
      namaLengkap: namaLengkap,
      namaPengguna: namaPengguna,
      kataSandi: hashPassword,
      kelas: kelas,
      alamat: alamat
    });
    res.status(201).json({ msg: "Register Berhasil" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const updateAnggota = async (req, res) => {
  const anggota = await Anggota.findOne({
    where: {
      uuid: req.params.id
    }
  });
  if (!anggota) return res.status(404).json({ msg: "Anggota tidak ditemukan" });
  const { kodeAnggota, nomorIndukSiswa, namaLengkap, namaPengguna, kataSandi, kelas, alamat } = req.body;
  let hashPassword;
  if (kataSandi === "" || kataSandi === null) {
    hashPassword = anggota.kataSandi;
  } else {
    hashPassword = await argon2.hash(kataSandi);
  }
  try {
    await Anggota.update({
      kodeAnggota: kodeAnggota,
      nomorIndukSiswa: nomorIndukSiswa,
      namaLengkap: namaLengkap,
      namaPengguna: namaPengguna,
      kataSandi: hashPassword,
      kelas: kelas,
      alamat: alamat
    }, {
      where: {
        uuid: req.params.id
      }
    });
    res.status(200).json({ msg: "Anggota Updated" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteAnggota = async (req, res) => {
  const anggota = await Anggota.findOne({
    where: {
      uuid: req.params.id
    }
  });
  if (!anggota) return res.status(404).json({ msg: "Anggota tidak ditemukan" });
  try {
    await Anggota.destroy({
      where: {
        uuid: req.params.id
      }
    });
    res.status(200).json({ msg: "Anggota Deleted" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
