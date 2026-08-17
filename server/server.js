import express from "express";
import cors from "cors";
import listing from "@/routes/listing";

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());//cross origin resource sharing
app.use(express.json());
app.use("/listing", listings); //http requests at this endpoint

//start express server
app.listen(PORT, () => {
    console.log(`Express server listening at port ${PORT}`)

});