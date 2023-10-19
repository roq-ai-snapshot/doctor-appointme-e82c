import { AppointmentInterface } from 'interfaces/appointment';
import { UserInterface } from 'interfaces/user';
import { InsuranceProviderInterface } from 'interfaces/insurance-provider';
import { GetQueryInterface } from 'interfaces';

export interface BillingInterface {
  id?: string;
  billing_date: any;
  total_amount: number;
  status: string;
  appointment_id: string;
  patient_id: string;
  insurance_provider_id: string;
  created_at?: any;
  updated_at?: any;

  appointment?: AppointmentInterface;
  user?: UserInterface;
  insurance_provider?: InsuranceProviderInterface;
  _count?: {};
}

export interface BillingGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  appointment_id?: string;
  patient_id?: string;
  insurance_provider_id?: string;
}
