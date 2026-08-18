import express from "express";
import cors from "cors";
import listingRoutes from "./routes/listingRoutes.js";
import dbConnect from "./db/dbConnect.js";
// Tolerate a missing optional file (no --env-file-if-exists equivalent in code)
try {
    process.loadEnvFile('.env');
    console.log('.env successfully loaded');
} catch (err) {
    console.error("Error: .env not found, port set to default: 3001");
}

//start db connection early, it is pooled (cached) for reusability and performance
try {
    await dbConnect();
    console.log('Connected to DB (MongoDB)');
} catch (err) { console.log(`error reaching server: ${err}`) };

const PORT = Number(process.env.PORT) || 3001;
const app = express();

app.use(cors());//cross origin resource sharing
app.use(express.json());
app.use("/api/listing", listingRoutes); //http requests at this endpoint

//start express server
app.listen(PORT, () => {
    console.log(`Express server listening at port ${PORT}`)

});