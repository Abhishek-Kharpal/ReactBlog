const cardData: Array<{
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  readingTime: string;
  tags?: string[];
  liked: boolean;
  claps: number;
}>  = [
  {
    id: 1,
    title: 'The Coldest Sunset',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://picsum.photos/300/203',
    date: '2019-10-10',
    readingTime: '2 mins',
    tags: ['photography','travel','winter'],
    claps: 0,
    liked: false
  },
  {
    id: 2,
    title: 'The Desert Hacks',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://picsum.photos/300/202',
    date: '2019-10-10',
    readingTime: '2 mins',
    tags: ['photography','travel','winter'],
    claps: 4,
    liked: true
  },
  {
    id: 3,
    title: 'The Night Hacks',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://picsum.photos/300/200',
    date: '2019-10-10',
    readingTime: '2 mins',
    tags: ['photography','travel','winter'],
    claps: 0,
    liked: false
  },
  {
    id: 4,
    title: 'Morning Club',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://picsum.photos/300/206',
    date: '2019-10-10',
    readingTime: '2 mins',
    tags: ['photography','travel','winter'],
    claps: 0,
    liked: false
  },
  {
    id: 5,
    title: 'The Coldest Winter',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://picsum.photos/300/214',
    date: '2019-10-10',
    readingTime: '2 mins',
    tags: ['photography','travel','winter'],
    claps: 2,
    liked: true
  },
  {
    id: 6,
    title: 'The Cold Breeze',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://picsum.photos/300/210', 
    date: '2019-10-10',
    readingTime: '2 mins',
    tags: ['photography','travel','winter'],
    claps: 10,
    liked: true
  },
];
export default cardData;
