import "bootstrap/dist/css/bootstrap.min.css"; // تحميل Bootstrap أولًا
import "./Slider.css"; // تحميل ملف CSS المخصص الخاص بك بعده
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand bg-dark navbar-dark navbar-bg">
        <div className="container">
          <Link style={{ color: "white" }} className="navbar-brand white" to="#">
            E-commerce
          </Link>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto ">
              <Link className="nav-link custom-button" aria-current="page" to="/">Home</Link>
              <Link className="nav-link custom-button" to="/about">About</Link>
              <Link className="nav-link custom-button" to="/contact">Contact Us</Link>
              <a className="nav-link btn-product" href="#Product">Products</a>
            </div>
          </div>
        </div>

        {/*Button in Samall Screens*/}
        {/*<div class="collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
          <div class="bg-dark ">
            <Link className="nav-link custom-button" aria-current="page" to="/">Home</Link>
            <Link className="nav-link custom-button" to="/about">About</Link>
            <Link className="nav-link custom-button" to="/contact">Contact Us</Link>
            <a className="nav-link btn-product" href="#Product">Products</a>
          </div>
        </div>
        <nav class="navbar navbar-dark">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>*/}
      </nav>
    </>
  );
}

