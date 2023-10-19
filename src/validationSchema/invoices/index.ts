import * as yup from 'yup';

export const invoiceValidationSchema = yup.object().shape({
  payment_method: yup.string().nullable(),
  invoice_status: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
