


// insert some products with tags
db.products.insertMany([
   {
      _id: 6,
      name: "Logitech WIrellecs",
      price: new NumberLong(175000),
      category: "laptop",
      tags: [
         "logitech", "mouse", "accesories"
      ]
   },
   {
      _id: 7,
      name: "Keyboard RGBA",
      price: new NumberLong(300000),
      category: "laptop",
      tags: [
         "cooler", "mouse", "accesories", "fan"
      ]
   },
   {
      _id: 8,
      name: "Samsung Monitor",
      price: new NumberLong(1750000),
      category: "laptop",
      tags: [
         "samsung", "monitor", "computer"
      ]
   },
]);

// select * from products where (tags = "samsung" and tags = "monitor")
// mencari tags yang tagsnya ada kata monitor dan samsung
db.products.find({
   tags: {
      $all: ["monitor", "samsung"]
   }
});

// select * from products where tags in ("samsung", "logitech")
// dimana tagsnya, ada kata samsung atau logitech
db.products.find({
   tags: {
      $elemMatch: {
         $in: ["samsung", "logitech"]
      }
   }
});

// select * from products where size(tags) = 3
// cari tagsnya ada 3
db.products.find({
   tags: {
      $size: 3
   }
});