import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('MongoDB Connected Successfully')
    }catch(err){
        console.log(`MongoDB Connection Error : ${err.message}`)
        process.exit(1)
    }
}

export {connectDB}