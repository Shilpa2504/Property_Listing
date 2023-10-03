import React, { useState } from 'react'
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { LiaBedSolid } from "react-icons/lia";
import { LiaBathSolid } from "react-icons/lia";
import { LiaArrowsAltSolid } from "react-icons/lia";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { GoLocation } from "react-icons/go";
import { Link, useNavigate } from 'react-router-dom';
import articles from './articles';

export default function CardItem(props) {
  const { title, description, imageUrl, id, auth,category } = props;
 


  // Navigate to the property details page and pass property details as state

  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  }
  return (
    <>
      <div className="my-2" style={{ width: '18rem' }}>
        <div className="card">
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            marginTop: "10px",
            marginLeft: "10px",


          }
          }>
            <span className="badge rounded-pill px-2 py-2 text-primary bg-slate-200 ">{auth}</span> </div>
          <button className="rounded-full p-2 mt-1 bg-gray-200 absolute right-1" onClick={handleLikeClick}>
            <FontAwesomeIcon
              icon={faHeart}
              className={liked ? 'text-red-500' : 'text-gray-500'}
            />
          </button>
          <div className=" max-w-[300px] max-h-[500px]">
          <img src={imageUrl} className="card-img-top " alt="..." />
          </div>
          <div className="card-body">
            <div className='flex flex-row px-2 gap-1 mb-2 text-sm'> <GoLocation />{description}</div>
            <h5 className="card-title font-semibold text-1xl">{title}</h5>

            <div className='flex flex-row justify-between py-2 mb-2 '>
              <div className='flex flex-col px-2 font-semibold text-xs'> <HiOutlineBuildingOffice2 /> 3 Room</div>
              <div className='flex flex-col  px-2 font-semibold text-xs'><LiaBedSolid />4 Bed</div>
              <div className='flex flex-col  px-2 font-semibold text-xs'> <LiaBathSolid />1 Bath</div>
              <div className='flex flex-col  px-2 font-semibold text-xs'><LiaArrowsAltSolid />732 sft</div>
            </div>

            <hr />
            <div className="py-2">
              <p className="card-price d-inline">
                <strong>$4,500</strong> /month
              </p>


              <button

                className="py-1 px-3 text-sm bg-violet-100 font-semibold rounded-full absolute right-2"
              >
                <Link to={`/property/${id}`}>
                  Read More</Link>
              </button>

            </div> </div>
        </div>
      </div>
    </>
  )
}

