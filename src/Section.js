import React from 'react';
import TheCarousel from './TheCarousel';


function Section(props) {

  return(
    <div className="section text-center py-5">

      <img src="logo.png" className={props.image} alt="logo" />

      <div className="section-title my-4">{props.data.section_title}</div>

      <TheCarousel quotes={props.data.quotes} color={props.color} />

      { props.button && <button className="btn btn-lg my-4">View All</button> }

    </div>
  )

}

export default Section;
