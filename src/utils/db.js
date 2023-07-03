import mongoose from "mongoose";
mongoose.set('strictQuery', false);
const MONGO =process.env.MONGO_URL
const connect = async () =>{
 try {
      await mongoose.connect(MONGO)
      console.log('Connection Successful')
 } catch (error) {
    console.log(error)
 }
}

export default connect