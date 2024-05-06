import { useEffect, useRef, useState } from 'react'
import 'aos/dist/aos.css'
import Aos from 'aos'
import FeatherIcon from 'feather-icons-react';

function App() {
  const [navbar, setNavbar] = useState(false)
  const [displayLoginForm, setDisplayLoginForm] = useState('none')
  const refMenu = useRef(null)
  const refLoginForm = useRef(null)
  const refHamburger = useRef(null)
  const refNavbar = useRef(null)


  // Start AOS
  useEffect(() => {
    Aos.init({
      duration: 100,
      once: true,
    })
  }, [])

  // toggle navbar ketika diklik hamburger menunya
  function toggleNavbar(e) {
    e.preventDefault()
    setNavbar(!navbar)
  }

  function scrollToMenu() {
    refMenu.current?.scrollIntoView({behavior: 'smooth'});
  }

  function toggleForm() {
    refLoginForm.current.style.display = displayLoginForm;
  }

  // toggle display login form
  useEffect(() => {
    toggleForm()
  }, [displayLoginForm])

  useEffect(() => {
    document.addEventListener('click', (e) => {
      // menghilangkan nav ketika mengklik luar sidebar
      const hamburger = refHamburger.current;
      const navbarNav = refNavbar.current;
      if (!navbarNav || !hamburger) return;
      if (!navbarNav.contains(e.target) && !hamburger.contains(e.target)) {
        setNavbar(false);
      }
    })

    window.onclick = (e) => {
      // klik di area manapun
      const modal = refLoginForm.current;
      if (!modal) return;
      if (e.target === modal) {
        setDisplayLoginForm('none');
      }
    }
  }, [])

    
  return (
  <>
    {/* Navbar */}
    <nav className="navbar">
      <a href="" className="navbar-logo">Coffee <span>House</span></a>
      <div ref={refNavbar} className={`navbar-nav ${navbar ? "active" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#menu">Menu</a>
        <a href="#contact">Contact Us</a>
      </div>

      <div className="navbar-extra">
        <a href="#" id="user-button"
          onClick={(e) => {
            e.preventDefault();
            setDisplayLoginForm('flex');
          }}>
          <FeatherIcon icon="user" />
        </a>
        <a href="#" id="shopping-cart-button">
          <FeatherIcon icon="shopping-cart" />
        </a>
        <a href="#" ref={refHamburger} id="hamburger-menu" onClick={toggleNavbar}>
          <FeatherIcon icon="menu" />
        </a>
      </div>
    </nav>
    {/* End Navbar */}

    {/* Login Form Start */}
    <div className="modal" id="show-login-form" ref={refLoginForm}>
      <div className="login-container">
        <a href="" className="close-icon"
          onClick={(e) => {
            e.preventDefault();
            setDisplayLoginForm('none');
          }}
        >
          <FeatherIcon icon="x" />
        </a>
        <div className="login-content">
          <h3>Login Here</h3>
          <label htmlFor="Username">Email</label>
          <input type="text" name="" placeholder="Enter Your Email" id="name" />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name=""
            placeholder="Enter Your password"
            id="password"
          />
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </div>
    </div>
    {/* Login Form End */}

    {/* Hero Section */}
    <section className="hero" id="home">
      <main className="content">

        <h1>Start Day with<span> Cup of Coffee</span></h1>
        <p>
          We provide high quality coffee.
        </p>

        <button
          type="button" className="cta"
          onClick={scrollToMenu}
        >
          Shop Now
        </button>
      </main>
    </section>
    {/* End Hero Section */}

    {/* About Section */}
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title"><span>About </span>Us</h2>

        <div className="row">
          <div className="about-img">
            <img src="/img/about-us.jpg" alt="About" />
          </div>

          <div className="content">
            <h3>What makes our coffee <span>special</span> ?</h3>
            <p>
              We provide high quality coffee, freshly made. complicated
              proscesses are involved in the production of coffee. until we can
              serve it to others.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* End About Section */}

    {/* Menu Section */}
    <section ref={refMenu} id="menu" className="menu">

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#382b0e"
            fillOpacity="1"
          d="M0,224L80,192C160,160,320,96,480,96C640,96,800,160,960,170.7C1120,181,1280,139,1360,117.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z">
        </path>
      </svg>

      <div className="menu-container">
        <h2><span>Our</span> Menu</h2>
        <p>We provide high quality coffee, freshly made.</p>

        <div className="row">
          <div className="menu-card" data-aos="fade-up">
            <img src="/img/black-coffee.jpg" 
            alt="Black-Coffee" 
            className="menu-card-img" />
            <h3 className="menu-card-title">- Black Coffee -</h3>
            <p className="menu-card-price">IDR 15K</p>
            <div className="add">
              <a href="">
                <button>Buy Now</button>
              </a>
            </div>
          </div>

          <div className="menu-card" data-aos="fade-up">
            <img
              src="/img/espresso.jpg"
              alt="Espresso"
              className="menu-card-img" />
            <h3 className="menu-card-title">- Espresso -</h3>
            <p className="menu-card-price">IDR 18K</p>
            <div className="add">
              <a href="">
               <button>Buy Now</button>
              </a>
            </div>
          </div>

          <div className="menu-card" data-aos="fade-up">
            <img
              src="/img/cappuccino.jpg"
              alt="Traditional Cappuccino"
              className="menu-card-img" />
            <h3 className="menu-card-title">- Traditional Cappucino -</h3>
            <p className="menu-card-price">IDR 25K</p>
            <div className="add">
              <a href="">
                <button>Buy Now</button>
              </a>
            </div>
          </div>

          <div className="menu-card" data-aos="fade-up">
            <img
              src="/img/vanilla-latte.jpg"
              alt="Vanilla Latte"
              className="menu-card-img" />
            <h3 className="menu-card-title">- Vanilla Latte -</h3>
            <p className="menu-card-price">IDR 22K</p>
            <div className="add">
              <a href="">
                <button>Buy Now</button>
              </a>
            </div>
          </div>

          <div className="menu-card" data-aos="fade-up">
            <img
              src="/img/Sweet-Mocha.jpg"
              alt="Sweet Mocha"
              className="menu-card-img" />
            <h3 className="menu-card-title">- Sweet Mocha -</h3>
            <p className="menu-card-price">IDR 20K</p>
            <div className="add">
              <a href="">
                <button>Buy Now</button>
              </a>
            </div>
          </div>

          <div className="menu-card" data-aos="fade-up">
            <img
              src="/img/caramel.jpg"
              alt="Caramel Macchiato"
              className="menu-card-img" />
            <h3 className="menu-card-title">- Caramel Macchiato -</h3>
            <p className="menu-card-price">IDR 21K</p>
            <div className="add">
              <a href="">
                <button>Buy Now</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Menu Section */}

    {/* svg for parallax effect */}
    <svg id="contact" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#010101"
        fillOpacity="1"
        d="M0,224L80,192C160,160,320,96,480,96C640,96,800,160,960,170.7C1120,181,1280,139,1360,117.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
      ></path>
    </svg>

    {/* contact section */}
    <section className="contact">
      <h2><span>Contact </span>Us</h2>
      <p>
        Feel free to contact us if you have any questions or would like to make
        a reservation!
      </p>
      <div className="row" data-aos="zoom-in" data-aos-duration="1500">

      <iframe
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.65638901212!2d106.66470211896373!3d-6.229379589458796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta!5e0!3m2!1sen!2sid!4v1714914601481!5m2!1sen!2sid" 
         allowFullScreen={true}
         referrerPolicy=""
         className=""
         width="500" 
         height="450" 
         allowfullscreen="" 
         loading="lazy" 
         referrerpolicy="no-referrer-when-downgrade">
        </iframe>

        <form action="">
          <div className="input-grup">
            <FeatherIcon icon="user" />
            <input type="text" placeholder="Name" />
          </div>
          <div className="input-grup">
            <FeatherIcon icon="mail" />
            <input type="text" placeholder="Email" />
          </div>
          <div className="input-grup">
            <FeatherIcon icon="phone" />
            <input type="text" placeholder="Handphone" />
          </div>
          <button type="submit" className="btn">Send</button>
        </form>
      </div>
    </section>
    {/* contact section end */}
    
    {/* footer  */}
    <footer>
      <div className="socials">
        <a href="#"> <FeatherIcon icon="instagram" /></a>
        <a href="#"><FeatherIcon icon="twitter" /></a>
        <a href="#"><FeatherIcon icon="facebook" /></a>
      </div>

      <div className="links">
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#menu">Menu</a>
        <a href="#contact">Contact Us</a>
      </div>

      <div className="credit">
        <p>Created by | <a href="https://www.harisenin.com/">Kelompok 4 HariSenin Bootcamp </a>| &copy; 2024.</p>
      </div>
    </footer>
    {/* footer end */}

  </>
  )
}

export default App
