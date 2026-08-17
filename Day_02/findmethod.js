Day 2 – MongoDB find() Method

The find() method is used to retrieve documents from a collection.
It works like a query tool to filter and display data.

Syntax:
db.collectionName.find(query, projection)

- query → filter conditions (like WHERE in SQL)
- projection → specify which fields to show (like SELECT columns in SQL)

-------------------------------------------------
Examples:

1. Find all documents
db.students.find()

2. Find with condition
db.students.find({ age: 20 })

3. Find with multiple conditions
db.students.find({ age: 20, city: "Pune" })

4. Find with comparison operators
db.students.find({ marks: { $gt: 80 } })

5. Find with projection (show only name & age)
db.students.find({}, { name: 1, age: 1, _id: 0 })

6. Find with $or operator
db.students.find({ $or: [ { age: 20 }, { city: "Mumbai" } ] })

7. Find with $in operator
db.students.find({ city: { $in: ["Pune", "Mumbai"] } })

8. Pretty output
db.students.find().pretty()

-----------------------------------------------