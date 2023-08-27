const db = require("../db/connection");

const { promisify } = require("util");
const dbQuery = promisify(db.query).bind(db);

const insertTamu = async (req, res) => {
  try {
    const { foto, nama, instansi, nohp, tujuan } = req.body;
    console.log(foto);
    console.log(nama);
    console.log(instansi);
    console.log(nohp);
    console.log(tujuan);
    res.status(200).json({ message: "Berhasil mengambil data", data: [] });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Gagal input data", data: [] });
  }
};

module.exports = { insertTamu };
