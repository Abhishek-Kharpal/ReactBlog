import React from 'react';
import '../../index.css'
import Card from './card';
import makeRequest from '../../utils/makeRequests/index';
import { GET_BLOG_DATA } from '../../constants/apiEndpoint';

type BlogData = {
  id: number;
  image: string;
  date: string;
  reading_time: string;
  title: string;
  description: string;
  claps: number;
  liked: boolean;
};

export default function Content(): JSX.Element {

  const [blogData, setBlogData] = React.useState<BlogData[]>([]);
  const [error,setError] = React.useState<string>('');
  React.useEffect(() => {
    makeRequest(GET_BLOG_DATA)
    .then((response) => {
      setBlogData(response);      
      })
    .catch((error: Error) => {
      setError(error.message);
    });
  },[]);

  if(error) {
    return (<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
    <strong className="font-bold">Error: </strong>
    <span className="block sm:inline">{error}</span>
  </div>);
  }
  return blogData?(
    <div className="grid md:grid-cols-3 content card-container">
      {blogData.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          description={card.description}
          image={card.image}
          date={card.date}
          reading_time={card.reading_time}
          claps={card.claps}
          liked={card.liked}
        />
      ))}
    </div>
  ):<div>Loading...</div>;
};