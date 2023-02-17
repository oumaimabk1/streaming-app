
import { FORM_DATA_RESET, FORM_DATA_UPDATE } from '../actions/formActions';
import { FormData } from '../types';

export interface FormState {
  formData: FormData;
}

const initialState: FormState = {
  formData: {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  },
};

export function formReducer(state = initialState, action: any) {
  switch (action.type) {
    case FORM_DATA_UPDATE:
      return {
        ...state,
        formData: {
          ...state.formData,
          ...action.payload,
        },
      };
    case FORM_DATA_RESET:
      return {
        ...state,
        formData: initialState.formData,
      };
    default:
      return state;
  }
}
