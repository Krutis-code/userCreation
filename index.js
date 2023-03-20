const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(function (req, res, next) {
    
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    
    // Pass to next layer of middleware
    next();
});

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to role based authentication system." });
});

const routes = require('./routes/index');
// app.use('/app',routes);

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

const db = require("./models/index");
const Role = db.role;
const Category = db.category;
const dbConfig = require('./config/db.config');
const { MongoClient, ServerApiVersion } = require('mongodb');
db.mongoose
  .connect(`mongodb+srv://kruti1262:Admin%40123@cluster0.7afxutg.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1
  // .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });


// set port, listen for requests
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
  console.log("testing in console.........");
});


function initial() {
  Category.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Category({
        name: "normal"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'normal' to signup Type collection");
      });

      new Category({
        name: "gooogle"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added google to signup");
      });

      new Category({
        name: "facebook"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added facebook to signup");
      });

      new Category({
        name: "instagram"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added instagram to signup");
      });

      new Category({
        name: "twitter"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added twitter to signup");
      });

      new Category({
        name: "reddit"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added reddit to signup");
      });

    }
  });
}