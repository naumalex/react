import { ChangeEventHandler } from '../RegistrationForm/RegistrationForm';

interface UploadImageProps {
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export function UploadImage({ onChange }: UploadImageProps) {
  return (
    <input
      placeholder='Upload Image'
      onChange={onChange}
      name='image'
      type='file'
    />
  );
}
