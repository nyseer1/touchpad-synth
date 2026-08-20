import { useState, useEffect } from 'react'
import Navbar from './components/Navbar';
import { Link, Outlet } from 'react-router-dom';
import BackToTopButton from './components/BackToTopButton';

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

			{/* entity/entitylist here, outlet=childcomponent for this page in main.jsx */}
			<Outlet/>
			<BackToTopButton />
			{/* poo */}
		</div >
    </>
  )
}

export default App
