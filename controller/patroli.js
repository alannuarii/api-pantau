const db = require("../db/connection");
const path = require("path");
const { convertBase64ToFile } = require("../utils/convertImg");

const { promisify } = require("util");
const dbQuery = promisify(db.query).bind(db);

const insertPatroli = async (req, res) => {
  try {
    const { foto, nama, shift, waktu, lokasi, catatan } = req.body;
    const targetDir = path.join(__dirname, "..", "static", "img", "patroli");
    const fileName = `${new Date(waktu).getTime()}.jpeg`;
    convertBase64ToFile(foto, targetDir, fileName)
    res.status(200).json({ message: "Berhasil mengambil data", data: [] });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Gagal input data", data: [] });
  }
};

module.exports = { insertPatroli };
