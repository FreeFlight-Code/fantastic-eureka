import "./login.css";

function Form(props) {
  function handleSubmit(event) {
    event.preventDefault();
    const {
      target: {
        email: { value: email } = {},
        password: { value: password } = {},
      } = {},
    } = event;
    console.log({ email, password });
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
