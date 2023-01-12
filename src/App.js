import "./app.css";
// import LoginPage from "./components/pages/login";
import firstPro from "./configs/firstpro.json";

function App() {
  return (
    <>
      <Header />
      <Content>
        <div>content</div>
        {/* <LoginPage /> */}
      </Content>
      <Footer />
    </>
  );
}

export default App;

function Header(props) {
  const { name, sections, logo } = firstPro;
  const { children } = props;
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
  const { children } = props;
  const { sections } = firstPro;
  if (!sections.includes("aside")) return null;
  return (
    <aside>
      <div>aside</div>
      <Nav />
      {children}
    </aside>
  );
}
function Content(props) {
  const { children } = props;
  return (
    <div className="content region">
      <Aside />
      <div className="section content">{children}</div>
    </div>
  );
}
function Footer(props) {
  const { children } = props;
  const { sections } = firstPro;
  if (!sections.includes("header")) return null;
  return (
    <footer>
      <div>footer</div>
      {children}
    </footer>
  );
}
function Menu(props) {
  return <span tabIndex="0">MENU</span>;
}
function Nav(props) {
  const navList = [
    "navItem 1",
    "navItem 2",
    "navItem 3",
    "navItem 4",
    "navItem 5",
  ];
  return navList.map((item) => {
    return <span>{item}</span>;
  });
}
