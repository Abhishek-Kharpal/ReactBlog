import React from 'react';
import '../../index.css'
import clapIcon from '../../assets/Icons/clapping.svg';
import heartBlack from '../../assets/Icons/heart-black.svg';
import heartRed from '../../assets/Icons/heart-red.svg';
import PropTypes from 'prop-types';
import makeRequest from '../../utils/makeRequests';
import { UPDATE_BLOG_DATA } from '../../constants/apiEndpoint';

type CardProps = {
  id: number;
  image: string;
  date: string;
  reading_time: string;
  title: string;
  description: string;
  claps: number;
  liked: boolean;
};

export default function Card({id, title, description, image, date, reading_time,liked,claps}: CardProps): JSX.Element {
  const [clap, setClap] = React.useState<number>(0);
  const [heart, setHeart] = React.useState<boolean>(liked);
  const handleClaps = async () => {
    try{
      setClap(clap^1);
      await makeRequest(UPDATE_BLOG_DATA(id),{
        data: {claps: (clap^1)+claps}
      });
    }
    catch(error) {
      console.log(error);
    }
  };
  const handleHeart = async () => {
    try{
      await makeRequest(UPDATE_BLOG_DATA(id),{
        data: {liked: !heart}
      });
      setHeart(!heart);
    }
    catch(error) {
      console.log(error);
    }
  };

  const handleDate=(date: string) =>{
    const dateArray = date.split('T');
    const dateArray1 = dateArray[0].split('-');
    const dateArray2 = dateArray[1].split(':');
    return dateArray1[2]+'/'+dateArray1[1]+'/'+dateArray1[0]+' '+dateArray2[0]+':'+dateArray2[1];
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg" style={{paddingTop: '10px', marginRight: '10px', height: '650px'}}>
        <img className="w-full" src={image} alt="Sunset in the mountains" style={{height: '300px'}}/>
        <div className='flex flex-row'>
          <div className='basis-1/2' style={{paddingLeft:'1.5rem', paddingTop:'1rem', color: 'gray'}}>{handleDate(date)}</div>
          <div className='basis-1/2' style={{textAlign: 'center',paddingTop:'1rem', color: 'gray'}}>{reading_time}</div>
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2" style={{maxHeight: '50px',textOverflow: 'ellipsis',overflow: 'hidden', whiteSpace: 'nowrap' }}>{title}</div>
          <p className="text-gray-700 text-base" style={{maxHeight: '100px',overflow: 'scroll'}}>
            {description}
          </p>
        </div>
        <hr></hr>
        <div className='like-heart flex flex-row'>
          <div className='basis-1/8' style={{paddingLeft:'1.5rem', paddingTop:'1rem', color: 'gray'}}><button className='w-8' onClick={handleClaps} data-testid='clap-button'><img src={clapIcon}/></button></div>
          <div className='basis-1/8' data-testid='clap-count' style={{textAlign: 'center',paddingTop:'1rem', color: 'gray'}}>{claps+clap}</div>
          {(heart)?<div className='basis-1/2' style={{  marginLeft: '20vh', paddingLeft:'1.5rem', paddingTop:'1rem', color: 'gray'}}><button className='w-8' data-testid='red-heart' onClick={handleHeart}><img src={heartRed}/></button></div>:<div className='basis-1/2' style={{marginLeft: '20vh',paddingLeft:'1.5rem', paddingTop:'1rem', color: 'gray'}}><button className='w-8' data-testid='black-heart' onClick={handleHeart}><img src={heartBlack}/></button></div>}
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
  reading_time: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  liked: PropTypes.bool.isRequired,
  claps: PropTypes.number.isRequired,
};