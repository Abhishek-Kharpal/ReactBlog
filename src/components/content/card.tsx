import React from 'react';
import '../../index.css'
import clapIcon from '../../assets/Icons/clapping.svg';
import heartBlack from '../../assets/Icons/heart-black.svg';
import heartRed from '../../assets/Icons/heart-red.svg';
import PropTypes from 'prop-types';

type CardProps = {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  readingTime: string;
  tags?: string[];
}

export default function Card({id, title, description, image, date, readingTime,tags}: CardProps): JSX.Element {
  const [claps, setClaps] = React.useState<number>(0);
  const [heart, setHeart] = React.useState<boolean>(false);
  const handleClaps = () => {
    setClaps(claps^1);
  };
  const handleHeart = () => {
    setHeart(!heart);
  };
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg" style={{paddingTop: '10px', marginRight: '10px'}}>
        <img className="w-full" src={image} alt="Sunset in the mountains" />
        <div className='flex flex-row'>
          <div className='basis-1/2' style={{paddingLeft:'1.5rem', paddingTop:'1rem', color: 'gray'}}>{date}</div>
          <div className='basis-1/2' style={{textAlign: 'center',paddingTop:'1rem', color: 'gray'}}>{readingTime}</div>
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">
            {description}
          </p>
        </div>
        <hr></hr>
        <div className='like-heart flex flex-row'>
          <div className='basis-1/8' style={{paddingLeft:'1.5rem', paddingTop:'1rem', color: 'gray'}}><button className='w-8' onClick={handleClaps} data-testid='clap-button'><img src={clapIcon}/></button></div>
          <div className='basis-1/8' data-testid='clap-count' style={{textAlign: 'center',paddingTop:'1rem', color: 'gray'}}>{claps}</div>
          {(heart)?<div className='basis-1/2' style={{  marginLeft: '20vh', paddingLeft:'1.5rem', paddingTop:'1rem', color: 'gray'}}><button className='w-8' data-testid='red-heart' onClick={handleHeart}><img src={heartRed}/></button></div>:<div className='basis-1/2' style={{marginLeft: '20vh',paddingLeft:'1.5rem', paddingTop:'1rem', color: 'gray'}}><button className='w-8' data-testid='black-heart' onClick={handleHeart}><img src={heartBlack}/></button></div>}
        </div>
        <hr></hr>
        <div className="px-6 pt-4 pb-2">
          {
            tags?.map((tag,index) => (
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2" key={index}>
                #{tag}
              </span>
            ))
          }
        </div>
      </div>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  readingTime: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string)
};