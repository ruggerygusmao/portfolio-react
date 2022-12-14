import React, { useState, useEffect } from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Formation from './components/Formation';
import HeroSection from './components/HeroSection';
import Skills from './components/Skills';
import Works from './components/Works'; 
import ScrollToTop from "react-scroll-to-top";

const App = () => {
    const [theme, setTheme] = useState(null);

    useEffect(()=>{
        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
            setTheme('dark');
        }else{
            setTheme('ligth');
        }
    }, []);

    useEffect(()=>{
        if(theme === 'dark'){
            document.documentElement.classList.add('dark')
        }else{
            document.documentElement.classList.remove('dark')
        }
    }, [theme]);

    const handleThemeSwitch = ()=>{
        setTheme(theme === 'dark'? 'light': 'dark');
    }
  return (
        <>
        <ScrollToTop className='bg-sky-600 rounded-full pl-1 hover:bg-sky-700' smooth />
            <button
            type='button'
            onClick={handleThemeSwitch}
            className='fixed z-10 right-2 top-2 bg-slate-500 bg-opacity-25
            text-lg p-1 rounded-md'
            >
                {theme === 'dark'? '🌞' : '🌙'}
            </button>
        
            <div className='font-quicksand bg:white dark:bg-slate-900'>
                <div className='max-w-6xl mx-auto w-11/12 max-auto '>
                    <HeroSection />
					<Formation />
					<Works />
                    <Skills />
					<About />
					<Footer />
                </div>
            </div>
        </>
      )
}

export default App