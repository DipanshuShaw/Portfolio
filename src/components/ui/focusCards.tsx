import { FocusCards } from "@/components/ui/focus-cards";
import nieved from "./../../../public/Projects/nieved.png"
import readingRadical from "./../../../public/Projects/ReadingRadical.png"
import twitter from "./../../../public/Projects/Twitter.png"

export function ProjectCard() {


  const cards = [
    {
      title: "Nie Ved",
      description: "A one stop platform for notes sharing and studying",
      src: nieved,
      link: "https://nieved.vercel.app/",
    },
    {
      title: "Reading Radical",
      description: "A platform for book lovers to review and discover new books",
      src: readingRadical,
      link: "https://reading-radical.vercel.app/",
    },
    {
      title: "Twitter Clone",
      description: "A clone of the popular social media platform Twitter",
      src: twitter,
      link: "https://twitter-clone-zeta-bay.vercel.app/",
    },
  ];

  return <FocusCards cards={cards} />;
}
