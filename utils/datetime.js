const getDatetime = () => {
  let sekarang = new Date();
  sekarang.setHours(sekarang.getHours());
  const year = sekarang.getFullYear();
  const month = String(sekarang.getMonth() + 1).padStart(2, "0");
  const day = String(sekarang.getDate()).padStart(2, "0");
  const hours = String(sekarang.getHours()).padStart(2, "0");
  const minutes = String(sekarang.getMinutes()).padStart(2, "0");
  const seconds = String(sekarang.getSeconds()).padStart(2, "0");
  const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  return formattedDateTime;
  // Contoh keluaran: "2023-09-03 10:21:39"
};

// const getDatetime = () => {
//   let sekarang = new Date();

//   // Tambahkan 8 jam ke waktu saat ini
//   sekarang.setHours(sekarang.getHours() + 8);

//   const year = sekarang.getFullYear();
//   const month = String(sekarang.getMonth() + 1).padStart(2, "0");
//   const day = String(sekarang.getDate()).padStart(2, "0");
//   const hours = String(sekarang.getHours()).padStart(2, "0");
//   const minutes = String(sekarang.getMinutes()).padStart(2, "0");
//   const seconds = String(sekarang.getSeconds()).padStart(2, "0");
//   const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
//   return formattedDateTime;
//   // Contoh keluaran: "2023-09-03 10:21:39"
// }

module.exports = { getDatetime };
