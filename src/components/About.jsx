import React from 'react';
import myImg from '../images/hero.jpg';
import SectionTitle from './SectionTitle';

function About() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
			<div className="w-full md:w-6/12">
				<SectionTitle id="about">About me</SectionTitle>
				<p className="text-md text-gray-600 dark:text-gray-300  text-justify	">
					Sou um entusiasta na área de tecnologia, Técnico em Informática para 
					Internet pelo Instituto Federal de Pernambuco. Onde tive meu primeiro 
					contato com desenvolvimento web e criei minhas primeiras aplicações junto 
					com meus colegas. Atualmente estou trabalhando como Técnico em Informática, 
					me formando em Análise e Desenvolvimento de Sistemas pela Uninassau-PE e 
					estudando Front end através de um projeto da Rede Cidadã chamado Start.
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