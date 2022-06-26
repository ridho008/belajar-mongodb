

db.createCollection("merchants", {
   validationAction: "error",
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: ["name", "balance", "type", "address"],
         properties: {
            name: {
               bsonType: "string",
               description: "Must be a string"
            },
            balance: {
               bsonType: "long",
               description: "Must be a long"
            },
            type: {
               enum: ["PREMIUM", "REGULER"],
               description: "Can only be one of enum values"
            },
            address: {
               bsonType: "object",
               required: ["city", "street"],
               properties: {
                  street: {
                     bsonType: "string",
                     description: "Must be a string"
                  },
                  city: {
                     bsonType: "string",
                     description: "Must be a string"
                  },
                  country: {
                     bsonType: "string",
                     description: "Must be a string"
                  }
               }
            }
         }
      }
   }
});

// menambahkan document yang benar
db.merchants.insertOne({
   _id: "toko1",
   name: "Toko Surya",
   balance: new NumberLong(1000000),
   type: "PREMIUM",
   address: {
      street: "Jl.Pepaya",
      city: "Pekanbaru",
      country: "Indonesia"
   }
});

// menambahkan data yang tanpa field name
db.merchants.insertOne({
   _id: "toko2",
   balance: new NumberLong(1000000),
   type: "PREMIUM",
   address: {
      street: "Jl.Pepaya",
      city: "Pekanbaru",
      country: "Indonesia"
   }
});

// menambahkan constraint ke collection customers
db.runCommand({
   collMod: "customers",
   validationAction: "error",
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: ["full_name"],
         properties: {
            full_name: {
               bsonType: "string",
               description: "Must be a string"
            }
         }
      }
   }
});

db.customers.insertOne({
   _id: "salah",
   full_name: "salah"
});