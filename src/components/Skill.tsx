import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import Image from "next/image"; // Ensure next/image is imported
// import { IoGitMerge } from "react-icons/io5";


const skill = [
  {
    key:1,
    name: "Mongodb",
    src: "https://pixelsoft.tech/images/technology/mongo_db-image.svg",
    width: 100,
    height: 100
  },
  {
    key:2,
    name: "CSS",
    src: "https://cdn.worldvectorlogo.com/logos/css-3.svg",
    width: 80,
    height: 80
  },
  {
    key:3,
    name: "HTML",
    src: "https://static.cdnlogo.com/logos/h/84/html.svg",
    width: 80,
    height: 80
  },
  {
    key:4,
    name: "JavaScript",
    src: "https://static.cdnlogo.com/logos/j/33/javascript.svg",
    width: 100,
    height: 100
  },
  {
    key:5,
    name: "React",
    src: "https://static.cdnlogo.com/logos/r/63/react.svg",
    width: 100,
    height: 100
  },
  {
    key:9,
    name: "nextjs",
    src: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    width: 80,
    height: 80
  },
  {
    key:6,
    name: "Taiwind",
    src: "https://static.cdnlogo.com/logos/t/58/tailwindcss.svg",
    width: 100,
    height: 100
  },
  {
    key:7,
    name: "Bootstrap",
    src: "https://static.cdnlogo.com/logos/b/74/bootstrap-5.svg",
    width: 100,
    height: 100
  },
  {
    key:8,
    name: "nodejs",
    src: "https://static.cdnlogo.com/logos/n/94/nodejs-icon.svg",
    width: 80,
    height: 80
  },

];



function forEvery(item){
  return <Image src={item.src} alt={item.name} key={item.key} width={item.width} height={item.height} className="text-xl mx-10 inline-block" />
}

const Images = <>
  {skill.map((x)=>{
    return forEvery(x)
  })}
</>


export function Skill() {
  return (
    <VelocityScroll
      text={Images} // Pass the raw image URL
      default_velocity={2}
      className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
    />
  );
}
