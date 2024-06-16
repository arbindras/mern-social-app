const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const commentRoutes = require("./routes/commentRoutes");
const cors = require("cors");

dotenv.config();

connectDB();

const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(express.json());

app.use("/api/comments", commentRoutes);

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
