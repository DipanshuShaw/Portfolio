import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
// import imageEx from "@/../../public/sampleImage.png"
import "./cardGrid.css"
import ReadingRadical from "@/../public/Projects/ReadingRadical.png"
import Twitter from "@/../public/Projects/Twitter.png"
import NieVed from "@/../public/Projects/nieved.png"
import Link from "next/link";

// const colorBg = "rgb(10, 10, 10)"


// Define a type for the card props
type CardProps = {
  index:number;
  image: StaticImageData;
  heading: string;
  // color: string;
  detail: string;
  link: string;
};

// Reusable Card component
const Card: React.FC<CardProps> = ({ image, heading, detail,link }) => {
  return (
    <div className="card">
      <div className="card-inner ">
        <div className="box ">
          <div className="imgBox ">
            <Image src={image} alt={heading} fill className="inline-block h-full w-full"/>
          </div>
          <div className="icon bg-stone-100 dark:bg-neutral-950 ">
            <Link href={link} className="iconBox hover:opacity-80 ">
              Explore
            </Link>
          </div>
        </div>
      </div>
      <div className="content text-black dark:text-white">
        <h3>{heading}</h3>
        <p>{detail}</p>
      </div>
    </div>
  );
};

// Main CardGrid component
const CardGrid: React.FC = () => {
  const cards = [
    {
      index:1,
      image: ReadingRadical,
      heading: "Reading Radical",
      // color: colorBg,
      detail: "A web application that helps users read and write Book Reviews.",
      link: "https://reading-radical.vercel.app/",
    },
    {
      index:2,
      image: Twitter,
      heading: "Twitter CLone",
      // color: colorBg,
      detail: "Twitter Webpage Clone using React and Tailwind CSS.",
      link: "https://twitter-clone-zeta-bay.vercel.app/",
    },
    {
      index:3,
      image: NieVed,
      heading: "NIE VED",
      // color: colorBg,
      detail: "A Notes sharing & accessing Portal for Students",
      link: "https://nieved.vercel.app/",
    },
  ];

  return (
    <section>
      <div className="container">
        {cards.map((card) => (
          <Card key={card.index} {...card}  />
        ))}
      </div>
    </section>
  );
};

export default CardGrid;
