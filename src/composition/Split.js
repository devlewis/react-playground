import React from 'react'
import './Split.css';

function Split(props) {
  const {className, flexBasis, children} = props;
  const combinedClassName = `split ${className}`;
  const newStyles = { flex: flexBasis };
  return (
    <div
      className={combinedClassName}
      style={newStyles}
    >
      {children}
    </div>
  );
}


export default Split;