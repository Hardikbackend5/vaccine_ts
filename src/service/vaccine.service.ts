import {
    FilterQuery,
    QueryOptions,
  } from "mongoose";
  import VaccineRecord, { VaccineRecordDocument } from "../model/vaccine.model";

export function findVaccineRecord(
    query: FilterQuery<VaccineRecordDocument>,
    options: QueryOptions = { lean: true }
  ) {
    return VaccineRecord.find(query, {}, options);
  }