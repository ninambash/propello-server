import mongoose from "mongoose";

const connectDB = (MONGODB_URI) => {
    mongoose.set("strictQuery", true);

    mongoose
        .connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log("MongoDB connected"))
        .catch((error) => console.log(error));
};

export default connectDB;
