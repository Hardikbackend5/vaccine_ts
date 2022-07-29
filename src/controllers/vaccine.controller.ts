import { Request, Response } from "express";
import { get } from "lodash";
import {
    findVaccineRecord
} from "../service/vaccine.service";



export async function getVaccineRecordHandler(req: Request, res: Response) {
  const c = get(req, "query.c");
  const data = await findVaccineRecord({ c });

  if (!data) {
    return res.sendStatus(404);
  }

  return res.send(data);
}

