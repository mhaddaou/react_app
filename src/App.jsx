
import './App.css';

function App() {
  return (
    <>
    <header className="hide-when-mobile">
      <h1>Mhaddaou</h1>
      <ul className="flex">
        <li className="main-list">
          <a className="main-link" href="#">
            
            Home
          </a>
          <ul className="sub-ul">
            <li>
              <a href="">H1</a>
            </li>
            <li>
              <a href="">H2</a>
            </li>
            <li>
              <a href="">H3</a>
            </li>
          </ul>
        </li>
        <li className="main-list">
          <a className="main-link" href="#">
            
            Projects
          </a>
          <ul className="sub-ul">
            <li>
              <a href="">project1</a>
            </li>
            <li>
              <a href="">project2</a>
            </li>
            <li className="mini-projects">
              <a href="">mini projects&nbsp; + </a>
              <ul className="sub-sub-ul">
                <li>
                  <a href="">project 1</a>
                </li>
                <li>
                  <a href="">project 2</a>
                </li>
                <li>
                  <a href="">project 3</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="main-list">
          <a className="main-link" href="#">
            
            Feature
          </a>
          <ul className="sub-ul sub-of-js">
            <li>
              <a href="">coming soon🔥</a>
            </li>
          </ul>
        </li>
      </ul>
    </header>
    <header className="show-when-mobile">
      <h1>Mhaddaou</h1>
      <label className="absolute" htmlFor="burger">
        <i className="fas fa-bars" />
      </label>
      <input id="burger" type="checkbox" />
      <div className="show-on-click">
        <div className="main-div">
          <label htmlFor="html">
            HTML <i className="fas fa-plus" />
          </label>
          <input id="html" type="checkbox" />
          <ul className="sub-div">
            <li>
              <a href="">Full</a>
            </li>
            <li>
              <a href="">Crash</a>
            </li>
            <li>
              <a href="">learn</a>
            </li>
          </ul>
        </div>
        <div className="main-div">
          <label htmlFor="css">
            CSS <i className="fas fa-plus" />
          </label>
          <input id="css" type="checkbox" />
          <ul className="sub-div">
            <li>
              <a href="">Full</a>
            </li>
            <li>
              <a href="">Crash</a>
            </li>
            <li>
              <label className="mini-projects" htmlFor="mini">
                mini projects <i className="fas fa-plus" />
              </label>
              <input id="mini" type="checkbox" />
              <ul className="sub-sub-div">
                <li>
                  <a href="">project 1</a>
                </li>
                <li>
                  <a href="">project 2</a>
                </li>
                <li>
                  <a href="">project 3</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="main-div">
          <label htmlFor="js">
          feature <i className="fas fa-plus" />
          </label>
          <input id="js" type="checkbox" />
          <ul className="sub-div">
            <li>
              <a href="">coming soon🔥</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <main>
      Respossive Drop-down <br />
      Menu Bar <br />
      HTML &amp; CSS and
    </main>
    <footer>
      developed by Mhaddaou
      <span>🧡</span>
    </footer>
  </>
  
  );
}

export default App;
