import "./app.css";
import LoginPage from "./components/pages/login";

function App() {
  return (
    <>
      <Header />
      <Content>
        <div>content</div>
        <LoginPage />
      </Content>
      <Footer />
    </>
  );
}

export default App;

function Header(props) {
  const { children } = props;
  return (
    <header>
      <div>header</div>
      {children}
    </header>
  );
}
function Aside(props) {
  const { children } = props;
  return (
    <aside>
      <div>aside</div>
      {children}
    </aside>
  );
}
function Content(props) {
  const { children } = props;
  const showAside = true;
  return (
    <div className="content region">
      {showAside && <Aside />}
      <div className="section content">{children}</div>
    </div>
  );
}
function Footer(props) {
  const { children } = props;
  return (
    <footer>
      <div>footer</div>
      {children}
    </footer>
  );
}
