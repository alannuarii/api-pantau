const getTanggal = (timestamp) => {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Bulan dimulai dari 0
  const day = String(date.getDate()).padStart(2, "0");

  const formattedDateTime = `${year}-${month}-${day}`;
  return formattedDateTime;
  // Contoh keluaran: "2023-09-03 10:21:39"
};

module.exports = { getTanggal };
