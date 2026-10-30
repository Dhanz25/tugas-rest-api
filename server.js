const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

// Middleware
app.use(cors()); // Mengizinkan akses dari frontend terpisah
app.use(express.json());

// Data statis sebagai simulasi database
const products = [
  { id: 1, name: "Kopi Hitam", price: 15000 },
  { id: 2, name: "Kopi Susu", price: 20000 },
  { id: 3, name: "Latte", price: 25000 },
];

// Endpoint REST API
app.get("/api/products", (req, res) => {
  // Mengembalikan response JSON
  res.status(200).json({
    status: "success",
    data: products,
  });
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
