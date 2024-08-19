import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';

import { useNavigate } from 'react-router-dom';
import Country from '../Country/Country';
import styles from './RegistrationForm.module.css';
import { saveFormData } from '../../store/savedFormsDataSlice';
import { UploadImage } from '../UploadImage/UploadImage';
import { convertToBase64 } from './RegistrationForm.helper';

export type ButtonEventHandler<T> = (event: React.MouseEvent<T>) => void;
export type ChangeEventHandler<T> = (event: React.ChangeEvent<T>) => void;

export function RegistrationForm() {
  const initialValues = useSelector((state: RootState) => state.newFormData);
  console.log(initialValues);
  const navigate = useNavigate();
  const [values, setValues] = useState(initialValues);
  const dispatch = useDispatch();
  const handleInputChange = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    let value: string | boolean;
    console.log('Input change');
    if (e.target.type === 'file' && e.target.files) {
      value = await convertToBase64(e.target.files[0]);
    } else {
      value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    }
    const { name } = e.target;
    setValues(() => ({
      ...values,
      [name]: value,
    }));
  };

  const handleFormSubmit: ButtonEventHandler<HTMLFormElement> = (
    e: React.MouseEvent,
  ) => {
    e.preventDefault();
    console.log(values);
    dispatch(saveFormData(values));
    navigate('/');
  };

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <input
        placeholder='Name'
        onChange={handleInputChange}
        name='name'
        value={values.name}
      />
      <input
        placeholder='Age'
        onChange={handleInputChange}
        name='age'
        value={values.age}
      />
      <input
        placeholder='Email'
        onChange={handleInputChange}
        name='email'
        type='email'
        value={values.email}
      />
      <input
        placeholder='Password'
        onChange={handleInputChange}
        name='password'
        type='password'
        value={values.password}
      />
      <input
        placeholder='Confirm Password'
        onChange={handleInputChange}
        name='confirmPassword'
        type='password'
        value={values.confirmPassword}
      />
      <label>
        Gender
        <select
          onChange={handleInputChange}
          name='gender'
          value={values.gender}
        >
          <option>Male</option>
          <option>Female</option>
        </select>
      </label>
      <label>
        Terms and Conditions
        <input
          onChange={handleInputChange}
          name='isTCAccepted'
          type='checkbox'
          checked={values.isTCAccepted}
        />
      </label>
      <UploadImage onChange={handleInputChange} />
      <Country onChange={handleInputChange} />
      <button type='submit'>Submit</button>
    </form>
  );
}
