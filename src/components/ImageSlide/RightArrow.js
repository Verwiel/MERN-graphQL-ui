
import React from 'react';

const RightArrow = (props) => {
  return (
    <div>
      <button className="nextArrow" onClick={props.goToNextSlide}>
        Next
      </button>
    </div>
  );
}

export default RightArrow;
