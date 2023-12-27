import express from "express";
//this module method brings the code asynchronously

//express is a variable that represents the Express.js framework, and by importing it, you gain access
// to the tools and capabilities it offers for building web applications in Node.js.

//here this is function
//Which will return an instance of express framework
const app = express();

//Here app is a constant which holds an object instance of express framework
import "dotenv/config";
//Setting up PORT privatively inorder to secure our sensitive information
const port = process.env.PORT || 3000; // Use process.env.PORT or default to 3000 if PORT is not defined

app.get("/", (res, req) => {
  res.send("Hello World");
});
//Get is a part of http request
//"/" at this part it will define a path for the content
// (req,res) IN this is place where the parameters are passed
//res.send will send the data to the specific part where it assign to

app.listen(process.env.PORT, () => {
  console.log("Listening at Port :" + port);
});
app.get("/twitter", (req, res) => {
  res.send("Twitter");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login</h1>");
});
