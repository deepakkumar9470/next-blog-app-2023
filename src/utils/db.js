import mongoose from "mongoose";
mongoose.set('strictQuery', false);
const MONGO= 'mongodb+srv://mongoproject:mongodb2022@cluster0.x5k4j.mongodb.net/nextjs-blog?retryWrites=true&w=majority'
const connect = async () =>{
 try {
      await mongoose.connect(MONGO)
      console.log('Connection Successful')
 } catch (error) {
    console.log(error)
 }
}

export default connect