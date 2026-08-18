import express from "express";
import cors from "cors";
import listingRoutes from "./routes/listingRoutes.js";

// Tolerate a missing optional file (no --env-file-if-exists equivalent in code)
try {
    process.loadEnvFile('.env');
    console.log('.env successfully loaded');
} catch (err) {
    console.error("Error: .env not found, port set to default");
}

const PORT = Number(process.env.PORT) || 3001;
const app = express();

app.use(cors());//cross origin resource sharing
app.use(express.json());
app.use("/api/listing", listingRoutes); //http requests at this endpoint

//start express server
app.listen(PORT, () => {
    console.log(`Express server listening at port ${PORT}`)

});