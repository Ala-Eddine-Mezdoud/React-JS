import React from 'react';
import {motion} from 'framer-motion';

const Header = ({ title }) => {
	return (
		<motion.div
		initial={{opacity: 0}}
		animate={{opacity: 100}}
		transition={{duration: 0.5,ease: 'easeInOut'}}
		>
		<header className='fixed top-0 w-full bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700 z-50'>
			<div className='max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8'>
				<h1 className='text-2xl font-semibold text-gray-100'>{title}</h1>
			</div>
		</header>
		</motion.div>
	);
};
export default Header;
