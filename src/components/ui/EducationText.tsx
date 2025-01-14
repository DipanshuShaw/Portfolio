import React from 'react'
// import image from "https://i.ibb.co/RDTnNrT/animated-text-fill.png"

const EducationText = () => {

  // const image = "https://i.ibb.co/RDTnNrT/animated-text-fill.png"


  return (
    <div className="">
      <p className="text-center border-b-[3px] border-emerald-900 lg:mx-8 py-4">
        <span className='font-bold text-5xl sm:text-6xl md:text-7xl'>Education</span>
      </p>

      <style jsx>{`
        p {
          text-transform: uppercase;
          letter-spacing: 0.5em;
          display: block;
          justify-content:center;
          position:relative
          
        }

        p span {
          font: "rowdies", sans-serif;
          letter-spacing: 0;
          padding: 0.25em 0 0.325em;
          display: block;
          justify-content:center;
          text-shadow: 0 0 80px rgba(255, 255, 255, 0.5);

          /* Clip Background Image */
      background: url(https://t4.ftcdn.net/jpg/09/61/20/51/360_F_961205199_iPSDNrFOCUB77HHuq3aLfp9HSEwZE66w.jpg)
            repeat;
            background-position: end;
          -webkit-background-clip: text;
          background-clip: text;

          /* Animate Background Image */
          -webkit-text-fill-color: transparent;
          -webkit-animation: aitf 50s linear infinite;

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
  )
}

export default EducationText



// https://i.ibb.co/RDTnNrT/animated-text-fill.png