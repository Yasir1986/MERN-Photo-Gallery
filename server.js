const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 5000;
const app = express();

app.use(fileUpload());
app.use(bodyParser.json())
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://Yasir86:Pakistan0186%40@ds263640.mlab.com:63640/students", { useNewUrlParser: true }
);

// Define schema
const schema = mongoose.Schema;

const schemaModal = schema({
 firstName: String,
 lastName: String,
 title: String,
 nationality: String,
 src: String,
 alt: String,
 skills: [String],
 whySofterDeveloper: String,
 longTermVision: String,
 motivatesMe: String,
 favoriteQuote: String,
 joinedOn: String,
 //versionKey: false
});

const students = mongoose.model("students", schemaModal);
app.use(express.static('component'));  
app.use(express.static('public'));  


//CORS handling
app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});


// To find a student and show Api
app.get("/api", (req,res) => {
     students.find()
    .then(students => res.json(students))
});


// To insert a new student
app.post("/addStudent", (req, res) => {

  const newStudent = new students(req.body);
  console.log(req.files.firstName);

  if (!req.files)
    return res.status(400).send('No files were uploaded.');

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.sampleFile;
 
  sampleFile.mv('./public/images/' + req.body.firstName + ".jpg" , function(err){
    if (err)
      return res.status(500).send(err);
       req.body.src =  req.body.firstName + ".jpg"
        req.body.alt =  req.body.firstName
       
        
        newStudent.save().then(
          student => {
            console.log("Saved");
            console.log(JSON.stringify(student, undefined, 4));
            res.send(student);
          },
          e => {
            console.log("Unable to save", e);
          }
      
      
          
        );

    res.send('File Uploaded and thanks for your information, We will be in contact!!');
  });
  
});


app.listen(port, () => `Server is running on port ${port}`);

