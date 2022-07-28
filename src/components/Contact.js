import React from 'react';
import Card from './Card';
import {Link,useParams} from 'react-router-dom';
import {connect} from 'react-redux';

const Contact = ({cards}) => {

  return(
    <div>
      {
        cards.map(card=>{
          return(
            <div className='ui raised very padded text container segment' key={card.id}>
              <Link to={`/card/${card.title}`}><h3 className='ui header'>{card.title}</h3></Link>
              <p>{card.body}</p>
            </div>
          )
        })
      }

    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    cards: state.cards
  }
}

export default connect(mapStateToProps)(Contact);
