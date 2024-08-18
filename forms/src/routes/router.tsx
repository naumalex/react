import { Main } from "../components/Main/Main";
import { RegistrationForm } from "../components/RegistrationForm/RegistrationForm";

export const routes = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "uncontrolled",
    element: <RegistrationForm />,
  },
  {
    path: "reacthook",
    element: <RegistrationForm />,
  },
];
