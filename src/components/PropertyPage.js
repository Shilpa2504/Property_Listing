
import React, { useState, useEffect } from 'react';
import articles from './articles';
import { useParams } from 'react-router-dom';

const PropertyPage = () => {
    const { slug } = useParams();

    const singleitem = articles.find((item) => item.id === slug)
        
    return (
        <>
            <div className="my-2">
                <div className="mt-5">
                    <img src={singleitem.urlToImage} className="card-img-top h-50 w-50" />
                </div>
                <div className="card-body">
                    <div className='flex flex-row px-2 gap-1 mb-2 text-xl'> {singleitem.description}</div>
                    <h5 className="card-title font-semibold text-4xl">{singleitem.title}</h5>
                    <div className="py-2">
                        <p className="card-price text-2xl">
                            <strong>$4,500</strong> /month
                        </p>
                    </div>
                </div>

            </div>

        </>
    );
}
export default PropertyPage