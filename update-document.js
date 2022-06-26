
db.products.find({
   _id: 1
})
// update products set category = "food" where _id = 1
db.products.updateOne({
   _id: 2
}, {
   $set: {
      category: "food"
   }
})

// update products set tags = ["food"] where category = "food" and tags is null
db.products.updateMany({
   $and: [
      {
         category: {
            $eq: "food"
         }
      },
      {
         tags: {
            $exists: false
         }
      }
   ]
}, {
   $set: {
      tags: ["food"]
   }
})

// update products set wrong = "wrong"
db.products.updateMany({}, [
   {
      $set: {
         wrong: "wrong"
      }
   }
])

// update products set wrong = null
db.products.updateMany({}, [
   {
      $set: {
         wrong: null
      }
   }
])

// menghapus field
db.products.updateMany({}, [
   {
      $unset: ["wrong"]
   }
])

// insert wrong document
db.products.insertMany([
   {
      _id: 9,
      name: "Ups Salah",
      wrong: "Ups Salah"
   }
])

// replace document with id 9
// mengubah bulat documentnya, sehingga name, wrong akan terhapus
db.products.replaceOne({
   _id: 9
}, {
   name: "AQUA Gelas",
   price: new NumberLong(100000),
   category: "Drink",
   tags: ["Aqua", "Le Mineral"]
})