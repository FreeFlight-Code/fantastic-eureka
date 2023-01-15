import "./app.css";
import { LoginPage } from "./components/pages/login";
import useLogin from "./hooks/useLogin";

function App(props) {
  const [user, set_user] = useLogin();
  if (!user) return <LoginPage setUser={set_user} />;
  return <Dash {...{ user }} />;
}

export default App;

function Dash(props) {
  const isAdmin = false;
  if (isAdmin) return <AdminDash {...props} />;
  return <ClientDash {...props} />;
}
function AdminDash(props) {
  return <div>Admin Dashboard</div>;
}

function ClientDash(props) {
  const {
    user: { name: companyName },
  } = props;
  const company = require(`./company_configs/${companyName}.json`);
  return (
    <>
      <Header user={company} />
      <Content user={company}>
        <div>content</div>
      </Content>
      <Footer user={company} />
    </>
  );
}

function Header(props) {
  const { children, user } = props;
  const { name, sections, logo } = user;
  if (!sections.includes("header")) return null;
  return (
    <header>
      <img src={logo} alt="logo" />
      <span>{name}</span>
      <Menu />
      {children}
    </header>
  );
}
function Aside(props) {
  const { children, user } = props;
  const { sections } = user;
  if (!sections.includes("aside")) return null;
  return (
    <aside>
      <div>aside</div>
      {children}
    </aside>
  );
}
function Content(props) {
  const { children, user } = props;
  return (
    <div className="content region">
      <Aside user={user} />
      <div className="section content">
        <Nav user={user} />
        {children}
      </div>
    </div>
  );
}
function Footer(props) {
  const { children, user } = props;
  const { sections } = user;
  if (!sections.includes("header")) return null;
  return (
    <footer>
      <div>footer</div>
      {children}
    </footer>
  );
}
function Menu(props) {
  return (
    <span className="menu" tabIndex="0">
      MENU
    </span>
  );
}
function Nav(props) {
  const navList = [
    "navItem 1",
    "navItem 2",
    "navItem 3",
    "navItem 4",
    "navItem 5",
  ];
  return (
    <nav>
      {navList.map((item) => {
        return (
          <span tabIndex="0" onClick={(e) => console.log(item)}>
            {item}
          </span>
        );
      })}
    </nav>
  );
}
