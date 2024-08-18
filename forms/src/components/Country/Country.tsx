import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { ChangeEventHandler } from '../RegistrationForm/RegistrationForm';

interface CountryProps {
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export default function Country({ onChange }: CountryProps) {
  const formData = useSelector((state: RootState) => state.newFormData);
  const countries = formData.countries;
  const selectedCountry = formData.selectedCountry;
  return (
    <div>
      <datalist id='countries'>
        {countries.map((country) => (
          <option key={country}>{country}</option>
        ))}
      </datalist>
      <label>
        Country
        <input
          list='countries'
          autoComplete='off'
          onChange={onChange}
          defaultValue={selectedCountry}
          name='selectedCountry'
        />
      </label>
    </div>
  );
}
