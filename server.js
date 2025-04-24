const express=require("express");
const app=express();
app.use(express.json());
const PORT=3010;

app.post("/register", (req, res)=>{
    const {username, email, password, dob}=req.body;

    if (!username){
        return res.status(400).json({message: "Username cannot be empty"})
    };

    if (!email){
        return res.status(400).json({message: "Email cannot be empty."})
    };

    if (password.length<8 || password.length>16){
        return res.status(400).json({message: "Password length should be greater than 8 or less than or equal to 16."})
    };
    if (!dob || isNaN(Date.parse(dob))){
        return res.status(400).json({message: "DOB cannot be empty."})
    };
    return res.status(200).json({message: "User registered successfully."})
});

app.get("/", (req,res)=>{
    res.send("<h1>Server is running. Welcome to the home page</h1>")
});

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
});
