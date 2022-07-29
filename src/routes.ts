import { Express, Request, Response } from "express";
import {
    getVaccineRecordHandler,
  } from "./controllers/vaccine.controller";

import validateRequest  from "./middleware/validateRequest";

import {
    getVaccineRecord
  } from "./schema/vaccine.schema";

export default function (app: Express){
    app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));


    app.get("/api/vaccine", validateRequest(getVaccineRecord) ,getVaccineRecordHandler);

}