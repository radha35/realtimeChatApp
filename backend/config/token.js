import jwt from "jsonwebtoken";
const genToken = async (id)=>{
    try {
        const token = await jwt.sign({userId:id},process.env.JWT_SECRET,{expiresIn:"2d"})
        return token
    } catch (error) {
        console.log("gen token error")
    }
}

export default genToken