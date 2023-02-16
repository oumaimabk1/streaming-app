export interface FormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    cardName: string;
    cardNumber: string;
    expiry: string;
    cvv: string;
  }
  
  export interface RegistrationFormProps {
    onSubmit: (formData: FormData) => Promise<any>;
  }
  
  export interface FormStepProps {
    formData: FormData;
    onFormDataChange: (formData: FormData) => void;
  }
  