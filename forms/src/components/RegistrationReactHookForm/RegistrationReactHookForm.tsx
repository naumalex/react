import { FieldValues, /* SubmitHandler,*/ useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveFormData } from '../../store/savedFormsDataSlice';
import Country from '../Country/Country';
import styles from './RegistrationReactHookForm.module.css'
import { convertToBase64 } from '../RegistrationForm/RegistrationForm.helper';
export interface FormData {
  name: string;
}

export function RegistrationReactHookForm() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = async (data: FieldValues) => {
    console.log(data.image);
    data.image = data.image.files ? await convertToBase64(data.image.files[0]) : '';
    console.log(data.image);
    dispatch(saveFormData(data));
    navigate('/');
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('name')}
        placeholder='Name'
      />
      <input
        {...register('age')}
        placeholder='Age'
      />
      <input
        {...register('email')}
        placeholder='Email'
        type='email'
      />
      <input
        {...register('password')}
        placeholder='Password'
        type='password'
      />
      <input
        {...register('confirmPassword')}
        placeholder='Confirm Password'
        type='password'/>
      <label>
        Gender
        <select
          {...register('gender')}
        >
          <option>Male</option>
          <option>Female</option>
        </select>
      </label>
      <label>
        Terms and Conditions
        <input
          {...register('isTCAccepted')}
          type='checkbox'/>
      </label>
      <input
       {...register('image')}
      placeholder='Upload Image'
      type='file'
    />
      <Country/>
      <button type='submit'>Submit</button>
    </form>
  );
}
