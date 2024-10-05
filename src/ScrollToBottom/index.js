import React, { useState, useEffect, useRef } from 'react';
import { FaArrowCircleDown } from 'react-icons/fa';

import './index.css';

const ScrollToBottom = () => {
	const [showBottomBtn, setShowBottomBtn] = useState(false);

	const aboutSection = useRef(null);
	
	// changing the showTopBtn state whenever a scroll event happens
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY < 400) {
				setShowBottomBtn(true);
			} else {
				setShowBottomBtn(false);
			}
		});
	}, []);

	// fucntion to help scroll to top smoothly
	const goToBottom = () => {
		window.scrollTo({
			top: document.documentElement.scrollHeight,
			behavior: 'smooth',
		});
	};

	return (
		<div className="link btn">
			{showBottomBtn && (
				<FaArrowCircleDown className="icon-position icon-style" onClick={goToBottom} />
			)}
		</div>
	);
};

export default ScrollToBottom;
