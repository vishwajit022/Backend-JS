import express from "express";
import "dotenv/config";
const app = express();
const port = process.env.PORT;
// app.get("/", (req, res) => {
//   console.log("Hello from Server");
//   res.send("Hello from server");
// });

app.use(express.static("dist"));
//ye ek middleware hai
//jisse ki hum dist wali jo react fe se milegi usse hum yaha BD mein hi run kar paayenge

//get a list of 3 jokes

app.get("/api/jokes", (req, res) => {
  const jokes = [
    { id: 1, title: "A joke", content: "This is a joke" },
    { id: 2, title: "Second Joke", content: "This is a Second Joke" },
    { id: 3, title: "Second Joke", content: "This is a Third Joke" },
  ];
  res.send(jokes);
  //This will create an API
});

app.listen(port, () => {
  console.log("listening at http://localhost:3000/");
});
