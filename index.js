import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";
import userRouter from "./routes/user.routes.js";
import propertyRouter from "./routes/property.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
    res.send({ message: "Hello World!" });
});

app.use("/api/v1/users", userRouter);
app.use("/api/v1/properties", propertyRouter);

const PORT = process.env.PORT || 8000;

const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URI);

        app.listen(PORT, () =>
            console.log(`Server started on port http://localhost:${PORT}`),
        );
    } catch (error) {
        console.log(error);
    }
};

startServer();
