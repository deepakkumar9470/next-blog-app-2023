import mongoose from "mongoose";
mongoose.set('strictQuery', false);
const connect = async () =>{
 try {
      await mongoose.connect(process.env.MONGO_URL)
      console.log('Connection Successful')
 } catch (error) {
    console.log(error)
 }
}

export default connect