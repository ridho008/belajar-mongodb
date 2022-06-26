

// membuat index di field category table products
db.products.createIndex({
   category: 1
});

db.products.find({
   category: "food"
});

// debugging = cek apakah field menggunakan indexes atau tidak
db.products.find({
   category: "food"
}).explain();

// sorting berdasarkan category
db.products.find({}).sort({
   category: 1
}).explain();

// membuat index 2 field
db.products.createIndex({
   stock: 1,
   tags: 1
});

// mencari field stock dan tags yang telah di indexes
db.products.find({
   stock: 3,
   tags: "mouse"
});

// debugging
// jika membuat index ada 2, tapi di query hanya index yang pertama. secara otomatis index 2, akan kena index.
// jika quernya di panggil urutan kedua, tidak akan index. dia hanya COLLSCAN
// COLLSCAN
db.products.find({
   tags: "mouse"
}).explain();

// IXSCAN
db.products.find({
   stock: 3
}).explain();

// CATATAN
/*
1. semakin banyak index, semakin cepat query, tapi semakin lambat write (insert/update)
*/