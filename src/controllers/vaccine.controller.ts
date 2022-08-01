import { Request, Response } from "express";
import { get } from "lodash";
import {
    findVaccineRecord
} from "../service/vaccine.service";



export async function getVaccineRecordHandler(req: Request, res: Response) {
  const c = get(req, "query.c");
  const range = get(req, "query.range");
  const dateFrom = get(req, "query.dateFrom");
  const dateTo = get(req, "query.dateTo");
  const data = await findVaccineRecord({ c, range, dateFrom, dateTo  });

  if (!data) {
    return res.sendStatus(404);
  }

  return res.send(data);
}

