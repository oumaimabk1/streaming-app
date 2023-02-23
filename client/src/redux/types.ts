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
  //movietypes
  export interface movieTypes {
  adult: Boolean;
  backdrop_path: string;
  genre_ids: [number];
  id: number;
  original_language: string;
  original_title: string ;
  overview: string ;
  poster_path: string;
  release_date: string;
  title: string;
  video: Boolean;
  vote_average: number;
  vote_count: number;
  name?:string
  }