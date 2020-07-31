import React from 'react';
import Carousel from 'react-bootstrap/Carousel'


function TheCarousel(props) {

  let quotes = props.quotes.map((quote) => {
    return (
      <Carousel.Item key={quote.message}>
        <div className="height d-block"></div> {/* Needed with this carousel dependency */}
        <Carousel.Caption>
          <div className={props.color + " quote-msg"}>{quote.message}</div>
          <div className="divider my-5"></div>
          <div className="quote-atr">{quote.attribution}</div>
        </Carousel.Caption>
      </Carousel.Item>

    )
  })

  let nextIcon = <h1> &#8594; </h1>;
  let prevIcon = <h1> &#8592; </h1>;

  return(
    <Carousel nextIcon={nextIcon} prevIcon={prevIcon}>
      {quotes}
    </Carousel>
  )
}

export default TheCarousel;
