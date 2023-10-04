// Paris.js
import React,{ useEffect, useState } from 'react';
import articles from './articles'; 
import CardItem from './CardItem';
import {useParams} from 'react-router-dom'

function Paris() {
 
  const parisArticles = articles.filter((article) => article.category === 'paris');

  const [displayedArticles, setDisplayedArticles] = useState(parisArticles.slice(0, 6));
  const [visible, setVisible] = useState(6);

  const loadMoreArticles = () => {
    const newVisible = visible + 3;
    setDisplayedArticles(parisArticles.slice(0, newVisible));
    setVisible(newVisible);
  };

  return (
    <>
    <div className="container my-5">
        <div className="row">
        <h2 className="text-center font-semibold text-4xl" style={{ margin: '20px 0px', marginTop: '30px' }}> Paris </h2>
      {displayedArticles.map((article,index) => (
         <div className="col-md-4" key={article.index} >
        <CardItem
          key={article.id}
          title={article.title}
          description={article.description}
          imageUrl={article.urlToImage}
          id={article.id}
          auth={article.auth}
          category={article.category}
          brand={article.brand}
        />
        </div>
      ))}
    </div>
    <div className="text-center">

{visible < articles.length && (
  <div className="text-center">
    <button
      className="btn btn-primary rounded-full mb-4"
      onClick={loadMoreArticles}
    >
      Show More
    </button>

  </div>
)}
</div>

</div>
</>
  );
}

export default Paris;
