import React, { useRef } from 'react';
import ScrollToTopLocal from './ScrollToTop';
//import ScrollToTop from "react-scroll-to-top";
import ScrollToBottom from './ScrollToBottom';
import ScrollToServicePage from './SrollToService/ServicePage';

// I installed the scroll-to-top library incase you wanna try it out also. Feel free to uncomment the code below
// import ScrollToTop from 'react-scroll-to-top';

function App() {
	
	const aboutSection = useRef<HTMLDivElement>(null);
	const servcesSection = useRef<HTMLDivElement>(null);
	const contactSection = useRef<HTMLDivElement>(null);

	// const scrollDown = () => {
	// 	window.scrollTo({
	// 	  top: aboutSection.current!.offsetTop,
	// 	  behavior: 'smooth',
	// 	});
	//   };
	const scrollDown = (ref: React.RefObject<HTMLDivElement>) => {
		window.scrollTo({
		  top: ref.current!.offsetTop,
		  behavior: 'smooth',
		});
	  };



	return (
		<div className="App">
			{/* Ensure to import the scroll-to-top component to the App.js file */}
			<ScrollToTopLocal />
			{/* <ScrollToTop/> */}
			<ScrollToBottom/>
			<div className="section section1">
		
    <ul className="nav-links">
        <li className="link" onClick={() => scrollDown(aboutSection)}>
        About Us
        </li>
    <li className="link" onClick={() => scrollDown(servcesSection)}>
        Services
    </li>
    <li className="link" onClick={() => scrollDown(contactSection)}>
        Contact
      </li>
    </ul>
			</div>
            <ScrollToServicePage/>
			<div className="section section2" ref={aboutSection}>
    <h2>About Us</h2>
</div>
            <div className="section section3"  ref={servcesSection}>
			<h2>Services</h2>
			</div>
            <div className="section section4" ref={contactSection}>
			<h2>Contact</h2>
			</div>
            <div className="section section5">
				<li className="link"  onClick={() => scrollDown(aboutSection)}>
  About Us
</li></div>


		</div>
	);
}

export default App;

