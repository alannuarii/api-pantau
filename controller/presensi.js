const db = require("../db/connection");

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
    const { data } = req.params;
    const param = data.split("_");
    const sql = "SELECT nama FROM presensi WHERE shift = ? AND DATE(waktu) = ?";
    const values = [param[0], param[1]];
    const result = await dbQuery(sql, values);
    res.status(200).json({ message: "Berhasil", data: result });
  } catch (error) {
    console.error("Kesalahan koneksi ke database:", error);
    res.status(500).json({ message: "Terjadi masalah", data: [] });
  }
};

module.exports = { insertPresensi, getPiket };
