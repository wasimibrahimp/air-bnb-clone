import React from 'react';
import Star from '../images/star.png';

export default function Card(props) {
  let badgeText;
  if (props.items.openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (props.items.location === 'Online') {
    badgeText = 'ONLINE';
  }
  return (
    <div>
      <section className='card'>
        {badgeText && <div className='card--badge'>{badgeText}</div>}
        <img
          src={props.items.coverImg}
          alt='katie zaferes'
          className='card--image'
        ></img>
        <div className='card--stats'>
          <img src={Star} alt='star' className='card--star'></img>
          <span>{props.items.stats.rating}</span>
          <span className='light'>({props.items.stats.reviewCount}) </span>
          <span className='light'> • {props.items.location}</span>
        </div>
        <h2>{props.items.title}</h2>
        <p>
          <span className='bold'>From ${props.items.price}</span> / person
        </p>
      </section>
    </div>
  );
}
