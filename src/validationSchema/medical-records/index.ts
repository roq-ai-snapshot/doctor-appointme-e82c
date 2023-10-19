import * as yup from 'yup';

export const medicalRecordValidationSchema = yup.object().shape({
  diagnosis: yup.string().required(),
  prescription: yup.string().required(),
  notes: yup.string().nullable(),
  appointment_id: yup.string().nullable().required(),
  patient_id: yup.string().nullable().required(),
});
