import React from 'react'
import EducationText from './ui/EducationText'
import TimelineDemo from './EducationTimeline'

const Education = () => {
  return (
    <div className='p-8 bg-stone-100 dark:bg-neutral-950' id='education'>
        <EducationText/>
        <div>
            <TimelineDemo/>
        </div>
    </div>
  )
}

export default Education
