# node-auth-bcrypt

```
yarn add express bcrypt mongoose jsonwebtoken zod dotenv
yarn add -D nodemon
```

# Authentication and authorization with Node, bcrypt, JWT and Zod

## Learning

Here are the takeaways for me from this project.

### Basics of MongoDB

Before we talk about MongoDB, we should probably talk about the difference between Relational and Non relational database. Both shares the fact that they are database but they differ in the way their information is stored.

**Relational database**

> A relational database typically stores information in tables containing specific pieces and types of data. The database usually contains tables consisting of columns and rows. When new data is added, new records are inserted into existing tables or new tables are added. Relationships can then be made between two or more tables.

**Non relational database**

> Non-relational databases (often called [NoSQL databases](https://www.mongodb.com/nosql-explained)
> ) are different from traditional relational databases in that they store their data in a non-tabular form. Instead, non-relational databases might be based on data structures like documents

As the above description says, non relational database stores information in a quite different manner from that of relational database.

Here are some of concepts you might want to familiarise yourself with.

> 💡 **Collections**\
> ‘Collections’ in Mongo are equivalent to tables in relational databases. They can hold multiple JSON documents.\
>
> 💡 **Documents**\
> ‘Documents’ are equivalent to records or rows of data in SQL. In MongoDB they are stored in the format of BSON format. (BSON is type-rich version of JSON)\
>
> 💡 **Schema**\
> While Mongo is schema-less, SQL defines a schema via the table definition. A Mongoose ‘schema’ is a document data structure (or shape of the document) that is enforced via the application layer. (**Always remember, it’s just a blueprint of a document which describes how the data is structured in that document**)\
>
> 💡 **Models**\
> ‘Models’ are higher-order constructors that take a schema and create an instance of a document equivalent to records in a relational database.

**Actual implementation**

Database URL is `mongodb://localhost:27017/your-database-name`. Connecting to this URL and creating data in it will automatically create a database itself so it is not necessary to create a database beforehand (Of course you can always create a database beforehand though)

1. First we gotta kick start a db by connecting it at the initiation of the server

```jsx
// connect.js
const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log(`🚀 DB connected`);
  } catch (e) {
    console.log(e.message);
  }
};
```

```jsx
// server.js
const connect = require("connect");

app.listen(port, async () => {
  console.log(`🚀 Server is running on ${port}`);
  await connect();
});
```

1. Let’s create a schema!

```jsx
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: Number,
  createdAt: {
    type: Date,
    default: () => Date.now(),
  },
});
```

1. Next up is a model!

```jsx
const mongoose = require("mongoose");
const userSchema = require("../schema/user.schema");

const User = mongoose.model("User", userSchema);
```

1. Finally creating an instance of user document

```jsx
const User = require("../db/model/user.model");

const createUser = async (name, email, age) => {
  // An instance of user document is created and added to the collection
  await User.create({ name, email, age });
};
```

**Other notes on MongoDB**

- Database 👉  Collection(table) 👉 Document(row)
- Once it is combined with TypeScript, the difference between Document and Schema seemed pretty blurry to me.
  But always remember a schema is just a blueprint of a document. It is essentially the same thing as setting columns of a table in a relational database. It is pretty much describing what each column is like.
  If schema is a blueprint of a document, document is probably a blueprint of a model. Document should be describing what properties an object (an instance of document, in other word; an actual data) which will later gets created by model should have. That is why document is used as interface in TypeScript. It makes sure an instance of document will have certain properties and methods.
-

### bcrypt

### Authentication and Authorization

### Basics of JWT
