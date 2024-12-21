import { FocusCards } from "@/components/ui/focus-cards";
import imageEx from "../../public/image.png"

export default function Cards() {
  const cards = [
    {
      title: "Forest Adventure",
      src: imageEx
    },
    {
      title: "Valley of life",
      src: imageEx
    },
    {
      title: "Sala behta hi jayega",
      src: imageEx
    },
    {
      title: "Camping is for pros",
      src: imageEx
    },
    {
      title: "The road not taken",
      src: imageEx
    },
    {
      title: "The First Rule",
      src: imageEx
    },
  ];

  return <FocusCards cards={cards} />;
}
