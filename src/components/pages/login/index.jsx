import "./login.css";
import { login } from "../../../api";

export function Form(props) {
  const { setUser } = props;
  function handleSubmit(event) {
    event.preventDefault();
    const {
      target: {
        email: { value: email } = {},
        password: { value: password } = {},
      } = {},
    } = event;
    setUser(login({ email, password }));
  }
  return (
    <form name="login" className="form login" onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input required type="email" placeholder="email" id="email" />
      <label htmlFor="password">Password</label>
      <input required type="password" placeholder="password" id="password" />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;

export function LoginPage(props) {
  const { setUser } = props;

  return (
    <div className="page">
      <Form setUser={setUser} />
    </div>
  );
}
