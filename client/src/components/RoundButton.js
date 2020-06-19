import React from 'react';

const RoundButton = ({
  value,
  onClick,
}
) => (
<button style={{'border-radius': "50%",}} onClick={onClick}>
  {value}
</button> 

);

export default RoundButton;

