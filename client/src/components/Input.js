import React from 'react';

const Input = ({
  onChange,
  placeholder
}
) => (
<input
  type="text"
  onChange={onChange}
  placeholder={placeholder}
  style={{ width: "200px" }}
/>
);

export default Input;

