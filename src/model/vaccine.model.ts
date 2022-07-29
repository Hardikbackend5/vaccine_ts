import mongoose from "mongoose";
import { nanoid } from "nanoid";

export interface VaccineRecordDocument extends mongoose.Document {
  ReportingCountry: string;
  YearWeekISO: string;
  Denominator: Number;
  NumberDosesReceived: number;
  NumberDosesExported:number;
  FirstDose:number;
  FirstDoseRefused:number;
  SecondDose:number;
  DoseAdditional1:number;
  DoseAdditional2:number;
  UnknownDose:number;
  Region:string;
  TargetGroup:string;
  Vaccine:string;
  Population:number;
}

const VaccineRecordSchema = new mongoose.Schema(
  {
    Id: {
      type: String,
      required: true,
      unique: true,
      default: () => nanoid(10),
    },
    ReportingCountry: { type: String, required: true },
    YearWeekISO: { type: String, required: true },
    Denominator:{ type: Number, default: 0 },
    NumberDosesReceived: { type: Number, default: 0  },
    NumberDosesExported:{ type: Number, default: 0  },
    FirstDose:{ type: Number, default: 0  },
    FirstDoseRefused:{ type: Number, default: 0  },
    SecondDose:{ type: Number, default: 0  },
    DoseAdditional1:{ type: Number, default: 0 },
    DoseAdditional2:{ type: Number, default: 0  },
    UnknownDose:{ type: Number, default: 0  },
    Region:{ type: String, required: true },
    TargetGroup:{ type: String, required: true },
    Vaccine:{ type: String, required: true },
    Population:{ type: Number, default: 0  },
  },
  { timestamps: true }
);

const VaccineRecord = mongoose.model<VaccineRecordDocument>("VaccineRecord", VaccineRecordSchema);

export default VaccineRecord;