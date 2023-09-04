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
    convertBase64ToFile(foto, targetDir, fileName);
    const dataPatroli = await getDataPatroli(kode);
    res.status(200).json({ message: "Berhasil", data: dataPatroli });
  } catch (error) {
    console.error("Kesalahan koneksi ke database:", error);
    res.status(500).json({ message: "Gagal input data", data: [] });
  } finally {
    if (db) {
      db.end();
    }
  }
};

const getDataPatroli = async (kode) => {
  try {
    const sql = "SELECT * FROM patroli WHERE kode = ?";
    const values = [kode];
    const result = await dbQuery(sql, values);
    return result;
  } catch (error) {
    console.error("Kesalahan koneksi ke database:", error);
  }
};

module.exports = { insertPatroli };
