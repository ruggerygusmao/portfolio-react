import React from 'react'
import Image from './Image'
import SectionTitle from './SectionTitle'

const Skills = () => {
  return (
    <div>
        <SectionTitle id="skills">Skills</SectionTitle>
        <div className='grid grid-cols-5 sm:grid-cols-12 gap-5'>
            <Image link="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
            <Image link="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
            <Image link="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" />
            <Image link="https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg" />
            <Image link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
            <Image link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
            <Image link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
            <Image link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
            <Image link="https://cdn.worldvectorlogo.com/logos/trello.svg" />
            <Image link="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" />
        </div>
    </div>
  )
}

export default Skills