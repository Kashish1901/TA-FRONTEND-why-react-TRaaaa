import data from "../data.json";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Articles />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <>
      <div className="header">
        <div className="logo">GIZMO</div>
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </>
  );
}

function Hero() {
  return <h1>CURRENT NEWS OF THE DAY!</h1>;
}

function Articles() {
  return (
    <>
      <h2>Articles</h2>
      <div className="article-container">
        {data.map((article) => (
          <Article {...article} />
        ))}
      </div>
    </>
  );
}

function Article(props) {
  return (
    <div className="wrapper">
      <img src={props.urlToImage} alt={props.title} width="200" />
      <h3>{props.author}</h3>
      <p>{props.title}</p>
    </div>
  );
}
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="">2020 All Rights Reserved</div>
        <ul className="footer-li">
          <li>F</li>
          <li>T</li>
          <li>I</li>
        </ul>
      </div>
    </>
  );
}

export default App;
