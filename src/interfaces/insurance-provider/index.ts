import { BillingInterface } from 'interfaces/billing';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface InsuranceProviderInterface {
  id?: string;
  name: string;
  contact_number: string;
  address: string;
  email: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  billing?: BillingInterface[];
  user?: UserInterface;
  _count?: {
    billing?: number;
  };
}

export interface InsuranceProviderGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  contact_number?: string;
  address?: string;
  email?: string;
  user_id?: string;
}
