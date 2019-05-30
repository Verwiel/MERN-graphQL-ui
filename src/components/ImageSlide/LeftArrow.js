
import React from 'react';

const LeftArrow = (props) => {
  return (
    <div>
      <button className="backArrow" onClick={props.goToPrevSlide}>
        back
      </button>
    </div>
  );
}

export default LeftArrow;