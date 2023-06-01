import {db} from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const register = (req,res) => {
    
    
    
    //CHECK EXISTING USER
    const q ="SELECT * FROM users WHERE email=? OR username =?"

    db.query(q,[req.body.email, req.body.username], (err,data)=>{
        if(err) return res.json(err)
        if(data.length) return res.status(409).json("user already exists!");

        //HASH THE PASSWORD AND CREATE A USER
        const salt =  bcrypt.genSaltSync(10);
        const hash =  bcrypt.hashSync(req.body.password, salt);
            // Store hash in your password DB.
            const q ="INSERT INTO users(`username`,`email`,`password`) VALUES (?)"
            const VALUES = [
                req.body.username,
                req.body.email,
                hash,
            ]
            
            db.query(q,[VALUES],(err,data)=>{
                if(err) return res.json(err)
                return res.status(200).json("user has been created.");
            })

    })

}
export const login = (req,res) => { 
        //CHECK USER

        const q="SELECT * FROM users WHERE username= ?"

        db.query(q, [req.body.username], (err,data) =>{
            if(err) return res.json(err);
            if (data.length === 0) 
            return res.status(404).json("User not found!");

            //CHECK PASSWORD
            const isPAsswordCorrect = bcrypt.compareSync(req.body.password, data[0].password); // true
            
            if(!isPAsswordCorrect) return res.status(400).json("Wrong Username or Password");
            if(isPAsswordCorrect){
                const token = jwt.sign({id:data[0].user}, "jwtkey");
                const {password, ...other} = data[0]
                console.log();
                try{
                    res
                        .cookie("access_token", token)
                        .status(200)
                        .json(other);
    
                }catch (err){
                    console.log(err);
                }
            
            }

            
        
        });
};
export const logout = (req,res) => {

    res.clearCookie("access_token",{
        sameSite:"none",
        secure:true 

    })
    .status(200).json("User has been logged out")
    
}