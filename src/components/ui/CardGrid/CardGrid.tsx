import React from "react";
import Image from "next/image";
import imageEx from "@/../../public/sampleImage.png"
import "./cardGrid.css"

const colorBg = "rgb(10, 10, 10)"


// Define a type for the card props
type CardProps = {
  image: string;
  heading: string;
  color: string;
};

// Reusable Card component
const Card: React.FC<CardProps> = ({ image, heading, color }) => {
  return (
    <div className="card">
      <div className="card-inner" style={{ "--clr": color } as React.CSSProperties}>
        <div className="box">
          <div className="imgBox">
            <Image src={image} alt={heading} fill className="inline-block h-full w-full"/>
          </div>
          <div className="icon">
            <a href="#" className="iconBox">
              Explore
            </a>
          </div>
        </div>
      </div>
      <div className="content text-white">
        <h3>{heading}</h3>
      </div>
    </div>
  );
};

// Main CardGrid component
const CardGrid: React.FC = () => {
  const cards = [
    {
      image: imageEx,
      heading: "Heading 1",
      color: colorBg,
    },
    {
      image: imageEx,
      heading: "Heading 2",
      color: colorBg,
    },
    {
      image: imageEx,
      heading: "Heading 3",
      color: colorBg,
    },
  ];

  return (
    <section>
      <div className="container">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default CardGrid;
