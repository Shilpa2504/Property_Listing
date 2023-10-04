import React, { useEffect, useState } from 'react'
import CardItem from './CardItem'
import articles from './articles';
import { useParams } from 'react-router-dom';


const Card = (props) => {



  const [displayedArticles, setDisplayedArticles] = useState(articles.slice(0, 6));
  const [visible, setVisible] = useState(6);

  const loadMoreArticles = () => {
    const newVisible = visible + 3;
    setDisplayedArticles(articles.slice(0, newVisible));
    setVisible(newVisible);
  };

  return (
    <>


      <div className="container my-5">
        <div className="row">
          {displayedArticles.map((article, index) => (
            <div className="col-md-4" key={article.index} >
              
              <CardItem title={article.title} id={article.id} brand={article.brand} category={article.category} description={article.description} auth={article.auth} imageUrl={article.urlToImage} />
              
             
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
  )
}
export default Card;