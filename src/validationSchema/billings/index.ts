import * as yup from 'yup';

export const billingValidationSchema = yup.object().shape({
  billing_date: yup.date().required(),
  total_amount: yup.number().integer().required(),
  status: yup.string().required(),
  appointment_id: yup.string().nullable().required(),
  patient_id: yup.string().nullable().required(),
  insurance_provider_id: yup.string().nullable().required(),
});
