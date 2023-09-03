const db = require("../db/connection");
const path = require("path");
const { convertBase64ToFile } = require("../utils/convertImg");

const { promisify } = require("util");
const dbQuery = promisify(db.query).bind(db);

const insertPatroli = async (req, res) => {
  try {
    const { foto, nama, shift, waktu, lokasi, catatan } = req.body;
    // const targetDir = path.join(__dirname, "..", "static", "img", "patroli");
    // const fileName = `${new Date(waktu).getTime()}.jpeg`;
    // const sql = "INSERT INTO patroli (nama, waktu, shift, lokasi, foto, catatan) VALUES (?, ?, ?, ?, ?, ?)";
    // const values = [nama, waktu, shift, lokasi, fileName, catatan];
    // await dbQuery(sql, values);
    // convertBase64ToFile(foto, targetDir, fileName);
    res.status(200).json({ message: "Berhasil", data: { nama, shift, waktu, lokasi } });
  } catch (error) {
    console.error("Kesalahan koneksi ke database:", error);
    res.status(500).json({ message: "Gagal input data", data: [] });
  } finally {
    if (db) {
      db.end();
    }
  }
};

const getDataPatroli = async (req, res) => {
  try {
    const sql = "SELECT * FROM patroli WHERE ";
  } catch (error) {
    console.error("Kesalahan koneksi ke database:", error);
    res.status(500).json({ message: "Gagal input data", data: [] });
  } finally {
    if (db) {
      db.end();
    }
  }
};

module.exports = { insertPatroli };
