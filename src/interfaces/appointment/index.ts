import { BillingInterface } from 'interfaces/billing';
import { MedicalRecordInterface } from 'interfaces/medical-record';
import { UserInterface } from 'interfaces/user';
import { ClinicInterface } from 'interfaces/clinic';
import { GetQueryInterface } from 'interfaces';

export interface AppointmentInterface {
  id?: string;
  appointment_date: any;
  appointment_time: string;
  status: string;
  patient_id: string;
  clinic_id: string;
  healthcare_provider_id: string;
  created_at?: any;
  updated_at?: any;
  billing?: BillingInterface[];
  medical_record?: MedicalRecordInterface[];
  user_appointment_patient_idTouser?: UserInterface;
  clinic?: ClinicInterface;
  user_appointment_healthcare_provider_idTouser?: UserInterface;
  _count?: {
    billing?: number;
    medical_record?: number;
  };
}

export interface AppointmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  appointment_time?: string;
  status?: string;
  patient_id?: string;
  clinic_id?: string;
  healthcare_provider_id?: string;
}
