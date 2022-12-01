import { Request, Response } from "express";
import carModel from "../model/carModel";

const postCar = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { manufacturer, model, color, selfdrive, transmission } = req.body;
    const newCar = await carModel.create({
      manufacturer,
      model,
      color,
      chassisNo: Math.floor(Math.random() * 100000000),
      selfdrive,
      transmission,
    });
    return res.status(201).json({
      message: "Data Created Succussfully",
      data: newCar,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occurred",
      error: error,
    });
  }
};

const getCar = async (req: Request, res: Response): Promise<Response> => {
  try {
    const getData = await carModel.find();
    return res.status(200).json({
      message: "Data Gotten Successfully",
      data: getData,
    });
  } catch (error) {
    return res.status(400).json({ 
      message: "An error occurred",
      error: error,
    });
  }
};

const getOne = async (req: Request, res: Response): Promise<Response> => {
  try {
    const oneCar = await carModel.findById(req.params.id);
    return res.status(200).json({
      message: "One Data Gotten Successfully",
      data: oneCar,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occurred",
      error: error,
    });
  }
};

export { postCar, getCar, getOne };
