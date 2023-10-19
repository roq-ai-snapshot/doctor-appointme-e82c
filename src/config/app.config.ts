interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['System Administrator'],
  customerRoles: ['Guest'],
  tenantRoles: ['System Administrator', 'Healthcare Provider', 'Medical Staff', 'Patient', 'Insurance Provider'],
  tenantName: 'Clinic',
  applicationName: 'Doctor Appointment System v1',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read information about invoices',
    'View user profiles',
    'Access clinic information',
    'Check appointment status',
  ],
  ownerAbilities: ['Manage user accounts', 'Manage clinic details', 'Manage appointments', 'Manage medical records'],
  getQuoteUrl: 'https://app.roq.ai/proposal/d61ebc70-3bdf-4289-bc93-151c6c0b1a9d',
};
