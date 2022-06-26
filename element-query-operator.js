

// select * from products where category is null
// cari products yang tidak ada field categorynya
db.products.find({
   category: {
      $exists: false
   }
});

// select * from products where type(category) = "string/varchar"
// cari tipe data categori yang berupa string di mongoDB
db.products.find({
   category: {
      $type: "string"
   }
});

// select * from products where type(price) in ("int", "long")
// cek field price, apakah tipe datanya int dan long
db.products.find({
   price: {
      $type: ["int", "long"]
   }
});