import React from 'react'
// import Cards from './Cards'
// import SparklesText from './ui/sparkles-text'
import ColorText from './ui/ProjectText'
import CardGrid from './ui/CardGrid/CardGrid'
// import {CardEffect} from './ui/CardEffect'
// import CardGrid from './ui/CardGrid/CardGrid'
// import sampleImage from "@/../public/image.png"

const Projects = () => {
  return (
    <div className='p-4 py-2 bg-stone-100 dark:bg-neutral-950' id='projects'>
      <ColorText/>
      <div className='my-8'>
        <CardGrid/>
      </div>
    </div>
  )
}

export default Projects

