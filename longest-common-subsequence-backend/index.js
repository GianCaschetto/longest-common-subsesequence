//Longest common subsequence API
import express from "express";
import cors from "cors";
import { longestCommonSubsequence } from "./functions.js";


const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "Hello World!" });
});


//GET longest common subsequence 
app.get("/lcs", (req, res) => {
  const str1 = req.query.str1;
  const str2 = req.query.str2;
  const lcs = longestCommonSubsequence(str1, str2);
  res.send(lcs);
}); 


app.listen(3000, (error) => {
    if(error) return console.log(error);
    console.log("Listening on port 3000");
    }
);


