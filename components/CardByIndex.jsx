import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";

export const images = [Card1, Card2, Card3];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
