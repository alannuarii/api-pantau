const db = require("../db/connection");

const { promisify } = require("util");
const dbQuery = promisify(db.query).bind(db);

const insertTamu = async (req, res) => {
  try {
    const { foto, nama, instansi, nohp, tujuan } = req.body;
    const targetDir = path.join(__dirname, "..", "static", "img", "tamu");
    const fileName = `${nama.replace(/ /g, "")}-${new Date(waktu).getTime()}.jpeg`;
    const sql = "INSERT INTO tamu (nama, instansi, nohp, tujuan, foto) VALUES (?, ?, ?, ?, ?)";
    const values = [nama, instansi, nohp, tujuan, fileName];
    await dbQuery(sql, values);
    await convertBase64ToFile(foto, targetDir, fileName);
    res.status(200).json({ message: "Berhasil", data: { nama } });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Gagal input data", data: [] });
  }
};

module.exports = { insertTamu };
