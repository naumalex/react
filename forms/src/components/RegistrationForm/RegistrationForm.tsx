import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { saveUncontrolledFormData } from "../../store/uncontrolledFormDataSlice";
import { useNavigate } from "react-router-dom";
import Country from "../Country/Country";
import styles from "./RegistrationForm.module.css";

export type ButtonEventHandler<T> = (event: React.MouseEvent<T>) => void;
export type ChangeEventHandler<T> = (event: React.ChangeEvent<T>) => void;

export function RegistrationForm() {
  const initialValues = useSelector(
    (state: RootState) => state.uncontrolledFormData,
  );
  console.log(initialValues);
  const navigate = useNavigate();
  const [values, setValues] = useState(initialValues);
  const dispatch = useDispatch();
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
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
    dispatch(saveUncontrolledFormData(values));
    navigate("/");
  };

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <input
        placeholder="Name"
        onChange={handleInputChange}
        name="name"
        value={values.name}
      />
      <input
        placeholder="Age"
        onChange={handleInputChange}
        name="age"
        value={values.age}
      />
      <input
        placeholder="Email"
        onChange={handleInputChange}
        name="email"
        type="email"
        value={values.email}
      />
      <input
        placeholder="Password"
        onChange={handleInputChange}
        name="password"
        type="password"
        value={values.password}
      />
      <input
        placeholder="Confirm Password"
        onChange={handleInputChange}
        name="confirmPassword"
        type="password"
        value={values.confirmPassword}
      />
      <label>
        Gender
        <select
          onChange={handleInputChange}
          name="gender"
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
          name="isTCAccepted"
          type="checkbox"
          checked={values.isTCAccepted}
        />
      </label>
      <input
        placeholder="Upload Image"
        onChange={handleInputChange}
        name="image"
        type="file"
      />
      <Country onChange={handleInputChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
