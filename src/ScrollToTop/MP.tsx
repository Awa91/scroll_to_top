import React, { useState, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa';

import './index.css';

const ScrollToTop = () => {
	const [showTopBtn, setShowTopBtn] = useState<boolean>(false);

	// changing the showTopBtn state whenever a scroll event happens
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 400) {
				setShowTopBtn(true);
			} else {
				setShowTopBtn(false);
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	// function to help scroll to top smoothly
	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<div className="top-to-btm">
			{showTopBtn && (
				<FaAngleUp className="icon-position icon-style" onClick={goToTop} />
			)}
		</div>
	);
};

export default ScrollToTop;