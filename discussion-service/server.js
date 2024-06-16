const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const discussionRoutes = require("./routes/discussionRoutes");
const cors = require("cors");
dotenv.config();

connectDB();

const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(express.json());

app.use("/api/discussions", discussionRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
