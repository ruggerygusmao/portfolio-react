import React from 'react';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";


function Footer() {
	return (
		<div className="py-3 bg-slate-800 text-center text-gray-300 rounded-t-lg">
			<div className='flex justify-center items-center h-13'>
			<a 	href="https://github.com/ruggerygusmao" 
				className="block text-xl md:text-2xl font-semibold"
				target='_blank'
				>
				<FaGithub className='w-6 h-6 hover:text-gray-100' />
			</a>
			<a 	href="https://linkedin.com/in/ruggerygusmao"
				className="py-5 bg-slate-800 text-center text-gray-300 rounded-t-lg ml-4"
				target='_blank'>
				<FaLinkedinIn className='w-6 h-6 hover:text-gray-100' />
			</a>
			</div>
			<a
				href="mailto:webcifar@gmail.com"
				className="text-sm md:text-md hover:text-gray-100"
			>
				ruggery402@gmail.com
			</a>
			<p className="text-xs mt-2 text-gray-500">
				© developer Ruggery Gusmão {new Date().getFullYear()}. All rights reserved
			</p>
		</div>
	);
}

export default Footer;