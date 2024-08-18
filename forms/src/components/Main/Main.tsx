import { Link } from "react-router-dom";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

export function Main() {
  const initialValues = useSelector(
    (state: RootState) => state.uncontrolledFormData,
  );
  return (
    <div>
      <div>
        <Link to="uncontrolled">Uncontrolled Form</Link>
      </div>
      <div>
        <Link to="reacthook">React Hook Form</Link>
      </div>
      <div>{initialValues.name}</div>
    </div>
  );
}
