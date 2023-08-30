const fs = require("fs");
const path = require("path");
require("dotenv").config();

const convertBase64ToFile = (base64Data, targetDir, fileName) => {
  const base64Image = base64Data.split(";base64,").pop();

  const targetPath = path.join(targetDir, fileName);

  fs.writeFile(targetPath, base64Image, { encoding: "base64" }, (err) => {
    if (err) {
      console.error("Gagal menyimpan file:", err);
    } else {
      console.log("File berhasil disimpan:", targetPath);
    }
  });
};

module.exports = { convertBase64ToFile };
