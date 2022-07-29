import { object, string, number } from "yup";

  
const query = {
  query: object({
      c: string().required("Country Code is required"),
      dateFrom: string().optional(),
      dateTo: string().optional(),
      range:number().optional().positive().integer()
    }),
};
  
export const getVaccineRecord = object({
  ...query,
});