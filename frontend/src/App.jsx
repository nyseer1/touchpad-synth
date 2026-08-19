import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';
import BackToTopButton from './components/BackToTopButton';
// import Hamburger from './components/Hamburger';
function App() {
  const [isDesktop, setDesktop] = useState(false);
  const updateMedia = () => {
		setDesktop(window.innerWidth > 600);
	};

	useEffect(() => {
		window.addEventListener("resize", updateMedia);
		return () => window.removeEventListener("resize", updateMedia);
	});
  

  return (
    <>
      <Navbar />
      <div className="adaptive">
			<div id="home" className="adaptive">
				{/* test */}
				{isDesktop ? (
					<br style={{ lineHeight: 3 }} />
				) : (
					<br style={{ lineHeight: 6 }} />
				)}
			</div>
			{/* todo shop image here */}
			<h2>Bike Shop</h2>

			<Link className="linkButton" href={"/api/listings/"}
			><h4 className="button">Goto Shop</h4></Link>


			<div id="contact">
				{/* test */}
				<h2>Contact</h2>
				<p className="contact-p">
					<b>Phone:</b> <a href="tel:+1-347-579-9610">(347)-579-9610</a>
					<br />
					<b>Email:</b>{" "}
					<a
						href="mailto:nyseer.couse@gmail.com"
						aria-label="nyseer.couse@gmail.com"
					>
						nyseer.couse@gmail.com
					</a>
					<br />
				</p>
				{/* todo add back to top button here */}
				<br style={{ lineHeight: 10 }} />
			</div>
			<BackToTopButton />
			{/* poo */}
		</div >
    </>
  )
}

export default App
