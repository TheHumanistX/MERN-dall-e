import mongoose from 'mongoose'

const connectDB = async (url) => {
    mongoose.set('strictQuery', true)
    try {
        await mongoose.connect(url)
        console.log('Connected to MongoDB')
    } catch (err) {
        console.error('Mongoose could not connect to MongoDB: ', err)
    }
}