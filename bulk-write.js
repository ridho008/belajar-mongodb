

db.customers.bulkWrite([
   {
      insertOne: {
         document: {
            _id: "bisa",
            full_name: "ridho"
         }
      }  
   },
   {
      insertOne: {
         document: {
            _id: "surya",
            full_name: "surya"
         }
      }
   },
   {
      updateMany: {
         filter: {
            _id: {
               $in: ["ridho", "surya", "mantap"]
            }
         },
         update: {
            $set: {
               full_name: "ridho surya mantap"
            }
         }
      }
   }
]);