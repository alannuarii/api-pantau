const db = require("../db/connection");
const path = require("path");
const { convertBase64ToFile } = require("../utils/convertImg");

const { promisify } = require("util");
const dbQuery = promisify(db.query).bind(db);

const insertPatroli = async (req, res) => {
  try {
    const { kode, foto, nama, shift, waktu, lokasi, catatan } = req.body;
    const targetDir = path.join(__dirname, "..", "static", "img", "patroli");
    const fileName = `${new Date(waktu).getTime()}.jpeg`;
    const sql = "INSERT INTO patroli (kode, nama, waktu, shift, lokasi, foto, catatan) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const values = [kode, nama, waktu, shift, lokasi, fileName, catatan];
    await dbQuery(sql, values);
    await convertBase64ToFile(foto, targetDir, fileName);
    const dataPatroli = await getDataPatroli(kode);
    res.status(200).json({ message: "Berhasil", data: dataPatroli });
  } catch (error) {
    console.error("Kesalahan koneksi ke database:", error);
    res.status(500).json({ message: "Gagal input data", data: [] });
  }
};

const getDataPatroli = async (kode) => {
  try {
    const sql = "SELECT lokasi, nama, kode FROM patroli WHERE kode = ?";
    const values = [kode];
    const result = await dbQuery(sql, values);
    return result;
  } catch (error) {
    console.error("Kesalahan koneksi ke database:", error);
  }
};

const insertNotePatroli = async (req, res) => {
  try {
    const { kode, waktu, kondisi } = req.body;
    const sql = "INSERT INTO note_patroli (kode, waktu, kondisi) VALUES (?, ?, ?)";
    const values = [kode, waktu, kondisi];
    await dbQuery(sql, values);
    res.status(200).json({ message: "Berhasil" });
  } catch (error) {
    console.error("Kesalahan koneksi ke database:", error);
    res.status(500).json({ message: "Gagal input data", data: [] });
  }
};

const getNotePatroli = async (req, res) => {
  try {
    const sql = "SELECT patroli.nama, patroli.waktu FROM note_patroli JOIN patroli ON note_patroli.kode = patroli.kode ORDER BY note_patroli.id_npatroli DESC LIMIT ?";
    const values = [1];
    const result = await dbQuery(sql, values);
    res.status(200).json({ message: "Berhasil", data: result });
  } catch (error) {
    console.error("Kesalahan koneksi ke database:", error);
    res.status(500).json({ message: "Terjadi masalah", data: [] });
  }
};

module.exports = { insertPatroli, insertNotePatroli, getNotePatroli };
