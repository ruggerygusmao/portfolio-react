import React from 'react';
import myImg from '../images/hero.jpg';
import SectionTitle from './SectionTitle';

function About() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
			<div className="w-full md:w-6/12">
				<SectionTitle id="about">About me</SectionTitle>
				<p className="text-md text-gray-600 dark:text-gray-300  text-justify	">
					Me chamo Ruggery Gusmão, tenho 25 anos, sou estudante de desenvolvimento fron end.
					Meu primeiro contato com o desenvolvimento web foi no ano de 2016, através do curso 
					Técnico em Informática para Internet pelo Instituto Federal de Pernambuco. Recentemente me graduei 
					em Análise e Desenvolvimento de Sistemas pela Uninassau e atualmente estou trabalhando 
					como Técnico em Informática, porém meu foco em ingressar na área de desenvolvimento.
				</p>
			</div>

			<img
				src={myImg}
				alt="Arfan"
				className="w-full md:w-6/12 rounded-lg object-cover"
			/>
		</div>
	);
}

export default About;