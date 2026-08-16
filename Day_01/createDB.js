> use("dyp")
< switched to db dyp
> db["dypl"].find()
> db.dypl.insertOne(name:"Suraj Mane",age:21);
                     ^
> db.dypl.insertOne({name:"Suraj Mane",age:21});
< {
    acknowledged: true,
    insertedId: ObjectId('6a81df33b1b231f72abe71a1')
  }
> db.dypl.find()
< {
    _id: ObjectId('6a81df33b1b231f72abe71a1'),
    name: 'Suraj Mane',
    age: 21
  }
> db.dypl.insertOne({name:"Shantanu Patil",age:21})
< {
    acknowledged: true,
    insertedId: ObjectId('6a81df7ab1b231f72abe71a2')
  }
> db.dypl.find()
< {
    _id: ObjectId('6a81df33b1b231f72abe71a1'),
    name: 'Suraj Mane',
    age: 21
  }
  {
    _id: ObjectId('6a81df7ab1b231f72abe71a2'),
    name: 'Shantanu Patil',
    age: 21
  }
> dyp>
