import mongoose from 'mongoose';


const URI = 'mongodb+srv://admin:admin@cluster0.j6hqihe.mongodb.net/OYO'

const connectDB = async () => {
    await mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log("DB Connected...")
}

export default connectDB;