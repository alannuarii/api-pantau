const db = require("../db/connection");
const { getDatetime } = require("../utils/datetime");

const { promisify } = require("util");
const dbQuery = promisify(db.query).bind(db);

const insertPresensi = async (req, res) => {
  try {
    const { nama, shift, waktu } = req.body;
    const sql = "INSERT INTO presensi (nama, waktu, shift) VALUES (?, ?, ?)";
    const values = [nama, waktu, shift];
    await dbQuery(sql, values);
    res.status(200).json({ message: "Berhasil", data: values });
  } catch (error) {
    console.error("Kesalahan koneksi ke database:", error);
    res.status(500).json({ message: "Gagal input data", data: [] });
  }
};

const getPiket = async (req, res) => {
  try {
    const { shift } = req.params;
    const tanggal = getDatetime().slice(0, 10);
    const sql = "SELECT nama FROM presensi WHERE shift = ? LIMIT 1";
    const values = [shift];
    const result = await dbQuery(sql, values);
    res.status(200).json({ message: "Berhasil", data: result });
  } catch (error) {
    console.error("Kesalahan koneksi ke database:", error);
    res.status(500).json({ message: "Terjadi masalah", data: [] });
  }
};

module.exports = { insertPresensi, getPiket };
