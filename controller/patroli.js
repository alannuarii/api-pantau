const db = require("../db/connection");

const { promisify } = require("util");
const dbQuery = promisify(db.query).bind(db);

const insertPatroli = async (req, res) => {
  try {
    const { foto, nama, shift, waktu, lokasi, catatan } = req.body;
    console.log(foto);
    console.log(nama);
    console.log(shift);
    console.log(waktu);
    console.log(lokasi);
    console.log(catatan);
    res.status(200).json({ message: "Berhasil mengambil data", data: [] });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Gagal input data", data: [] });
  }
};

module.exports = { insertPatroli };
