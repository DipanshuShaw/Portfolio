import React from 'react'
import image from "https://pngmagic.com/product_images/3d-blue-banner-background-psd-free-download.jpg"

const AboutText = () => {

  // const image = "https://i.ibb.co/RDTnNrT/animated-text-fill.png"


  return (
    <div className="container">
      <p className="text-center border-b-[3px] border-purple-600 mx-8 py-4">
        <span>About Me</span>
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
          font: 700 4em/1 "rowdies", sans-serif;
          letter-spacing: 0;
          padding: 0.25em 0 0.325em;
          display: block;
          justify-content:center;
          text-shadow: 0 0 80px rgba(255, 255, 255, 0.5);

          /* Clip Background Image */
          background: url(https://www.stockvault.net//data/2021/01/08/282271/thumb16.jpg)
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

export default AboutText



// https://i.ibb.co/RDTnNrT/animated-text-fill.png