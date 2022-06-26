// insert data dulu
db.customers.insertOne({
   _id: "spammer",
   full_name: "spammer"
});

// hapus 1 berdasarkan id
db.customers.deleteOne({
   _id: "spammer"
})

db.customers.insertMany([
   {
      _id: "spammer1",
      full_name: "spammer1"
   },
   {
      _id: "spammer2",
      full_name: "spammer2"
   },
   {
      _id: "spammer3",
      full_name: "spammer3"
   },
]);

// delete many document
db.customers.deleteMany({
   _id: {
      $regex: "spammer"
   }
});