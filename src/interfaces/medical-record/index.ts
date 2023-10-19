import { AppointmentInterface } from 'interfaces/appointment';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface MedicalRecordInterface {
  id?: string;
  diagnosis: string;
  prescription: string;
  notes?: string;
  appointment_id: string;
  patient_id: string;
  created_at?: any;
  updated_at?: any;

  appointment?: AppointmentInterface;
  user?: UserInterface;
  _count?: {};
}

export interface MedicalRecordGetQueryInterface extends GetQueryInterface {
  id?: string;
  diagnosis?: string;
  prescription?: string;
  notes?: string;
  appointment_id?: string;
  patient_id?: string;
}
