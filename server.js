import express from "express"
import userRoutes from "./routes/users.js"
import cors from "cors"


const app = express()
app.use(cors())
const PORT = 5000
app.use(express.json())
app.use("/users",userRoutes)

app.get("/",(req,res)=>{
    res.send("welecome")
})
app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT} `)
})