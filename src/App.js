import { useState } from "react";
import "./app.css";
import { LoginPage } from "./components/pages/login";
import PassProps from './hof/PassPropsToChildren.js'

function App(props) {
  const [user, set_user] = useState();
  if (!user) return <LoginPage setUser={set_user}  />;
  return <Dash {...{ user }} />;
}

export default App;

function Dash(props) {
  const {
    user: { isAdmin },
  } = props;
  if (isAdmin) return <AdminDash {...props} />;
  return <ClientDash {...props} />;
}
function AdminDash(props) {
  return <div>Admin Dashboard</div>;
}

function ClientDash (props){
  return (
    <PassProps {...props}>
      <Header/>
      <Content>
        <div>content</div>
      </Content>
      <Footer/>
      <div>hi</div>
    </PassProps>
  );
}

function Header(props) {
  const {children, user: { name, sections = [], logo }={}} = props;
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
  const { children, user: {sections = []} = {} } = props;
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
  const { children, user: {sections = []} = {} } = props;
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
    "navItem",
    "navItem",
    "navItem",
    "navItem",
    "navItem",
  ]; 
  return (
    <nav>
      {navList.map((item, index) => {
        return (
          <span
            key={`nav-item-${index}`}
            tabIndex="0"
            onClick={(e) => console.log(item)}
          >
            {`${item} ${index+1}`}
          </span>
        );
      })}
    </nav>
  );
}
