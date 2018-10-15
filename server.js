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
 
  // Use the mv() method to place the file somewhere on your server
  // sampleFile.mv('\public\images' + req.firstName + ".jpg", function(err) 
  sampleFile.mv('./public/images/' + req.body.firstName + ".jpg" , function(err){
    if (err)
      return res.status(500).send(err);

      //console.log("something")
       req.body.src =  req.body.firstName + ".jpg"
        req.body.alt =  req.body.firstName
        //mongoose.students.push(req.body)
        //console.log(mongoose.students)
        
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






 //To add data in database
 /* const newStudents = [] 
    students.collection.insertMany(newStudents, (err, myStudent) => {
    if (!myStudent)
      res.send({ error: "Error in requesting ID", myStudent: null });
    else res.send({ error: "", myStudent });
  }); */


  // app.get('/students', (req, res) => {
//   const Api = [
//     {id: 1, firstName: 'John', lastName: 'Doe'},
//     {id: 2, firstName: 'Brad', lastName: 'Traversy'},
//     {id: 3, firstName: 'Mary', lastName: 'Swanson'},
     
//   ];

//   res.json(Api);
// });



/* app.post("/contact" , (req, res) =>{

  const adr = req.url;
  const q = url.parse(adr, true);
  const qdata = q.query;
   console.log(qdata);
  
  const msg =
    "<p>First name:" +
    req.body.firstName + '\r\n </p>' +
    "<p>last name:" +
    req.body.lastName + '\r\n </p>'
    +"<p>Email:" +
    req.body.Email + '\r\n </p>'
    + "<p>Message:" +
    req.body.Message; '\r\n </p>'
    console.log(msg);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "yasir269050@gmail.com",
        pass: "Pakistan0186"
      }
    });
 
    var mailOptions = {
      from: "yasir269050@gmail.com",
      to: "yasir269050@yahoo.com",
      subject: "Sending Email using Express with user information submitted via form",
      html: msg
    };
 
    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
      //  res.write(error);
        res.end();
      } else {
        res.write("Email sent. Thanks for your information. We will be back soon! :) " + info.response);
        res.end();
      }
    });

}); */


//Find by Id and delete from API

// app.get("/:id", (req,res) =>{
 
//    if (Object.keys(req.params).length) {
   
//     students.findByIdAndRemove(req.params.id, (err, deletedStudent) => {
      
//       if (!deletedStudent)
//         res.send({ error: "Error in deleting!!!", deletedStudent: null });
    
//       else
//         res.send({ error: "", deletedStudent });
//     });
//   }
//   else{
      
//       res.send({ error: "Empty Request", deletedStudent: null });
 
//   }
// })
 

/*  app.get ("/details/:index" , (req, res) =>{
  res.render("details", {student: students.data[req.params.index]})
});
  */
