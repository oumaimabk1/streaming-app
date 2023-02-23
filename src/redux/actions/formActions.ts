import { AnyAction, Dispatch } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { FormData } from '../types';
import { url } from './apiUrl';

export const FORM_DATA_UPDATE = 'FORM_DATA_UPDATE';
export const FORM_DATA_RESET = 'FORM_DATA_RESET';

export function setFormData(formData: FormData) {
  return {
    type: FORM_DATA_UPDATE,
    payload: formData,
  };
}

export function resetFormData() {
  return {
    type: FORM_DATA_RESET,
  };
}

export function submitForm(formData: FormData):any {

 return async (dispatch:  any) => {
    try {
      const response = await fetch(`${url}api/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      // Dispatch an action to reset the form data
      dispatch(resetFormData());

      return response.json();
    } catch (error) {
      // Handle error
      console.error(error);
      throw error;
    }
  };

}

