import React, { useState, useEffect, useRef } from 'react';
import { FaArrowCircleDown } from 'react-icons/fa';

import './index.css';

const ScrollToBottom: React.FC = () => {
	const [showBottomBtn, setShowBottomBtn] = useState<boolean>(false);

	const aboutSection = useRef<HTMLDivElement>(null);
	
	// changing the showTopBtn state whenever a scroll event happens
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY < 400) {
				setShowBottomBtn(true);
			} else {
				setShowBottomBtn(false);
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	// function to help scroll to top smoothly
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

