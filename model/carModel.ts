import mongoose from "mongoose";

type car = {
  manufacturer: string;
  model: number;
  color: string;
  chassisNo: number;
  selfdrive: boolean;
  transmission: string;
};

interface iCar extends car, mongoose.Document {}


const carShema = new mongoose.Schema(
  {
    manufacturer: String,
    model: Number,
    color: String,
    chassisNo: Number,
    selfdrive: Boolean,
    transmission: String,
  },
  { timestamps: true }
);

export default mongoose.model<iCar>("myCars", carShema);
