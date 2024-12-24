// import React from 'react'
// import Cards from './Cards'
// import SparklesText from './ui/sparkles-text'

// const Projects = () => {
//   return (
//     <div className='m-4'>
//       <SparklesText text="Projects" className='text-6xl text-center border-b-2 py-4 mx-4 border-gray-500'/>
      
//     </div>
//   )
// }

// export default Projects



// pages/index.tsx
import React from "react";

const Projects: React.FC = () => {
  return (
    <div className="container">
      <p>
        <span>Animated text fill</span>
      </p>

      <style jsx>{`
        p {
          text-transform: uppercase;
          letter-spacing: 0.5em;
          display: inline-block;
          justify-content:center;
          padding: 1.5em 0em;
          position: relative;
        }

        p span {
          font: 700 4em/1 "Oswald", sans-serif;
          letter-spacing: 0;
          padding: 0.25em 0 0.325em;
          display: block;
          justify-content:center;
          text-shadow: 0 0 80px rgba(255, 255, 255, 0.5);

          /* Clip Background Image */
          background: url(https://i.ibb.co/RDTnNrT/animated-text-fill.png)
            repeat-y;
          -webkit-background-clip: text;
          background-clip: text;

          /* Animate Background Image */
          -webkit-text-fill-color: transparent;
          -webkit-animation: aitf 80s linear infinite;

          /* Activate hardware acceleration for smoother animations */
          -webkit-transform: translate3d(0, 0, 0);
          -webkit-backface-visibility: hidden;
        }

        /* Animate Background Image */
        @-webkit-keyframes aitf {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;
