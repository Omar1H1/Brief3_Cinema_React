import disney from '../assets/images/disney.png';
import marvel from '../assets/images/marvel.png';
import nationalG from '../assets/images/nationalG.png';
import starwar from '../assets/images/starwar.png';
import pixar from '../assets/images/pixar.png';

import disneyV from '../assets/videos/disney.mp4';
import marvelV from '../assets/videos/marvel.mp4';
import nationalGV from '../assets/videos/national-geographic.mp4';
import pixarV from '../assets/videos/pixar.mp4';
import starwarV from '../assets/videos/star-wars.mp4';

interface ListItem {
  id: number;
  image: string;
  video: string;
}

const List: ListItem[] = [
  {
    id: 1,
    image: disney,
    video: disneyV,
  },
  {
    id: 2,
    image: marvel,
    video: marvelV,
  },
  {
    id: 3,
    image: nationalG,
    video: nationalGV,
  },
  {
    id: 4,
    image: starwar,
    video: starwarV,
  },
  {
    id: 5,
    image: pixar,
    video: pixarV,
  },
];

export default List;
