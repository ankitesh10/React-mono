import React from 'react';

function Button({ children, onClick }: any) {
  return <button onClick={onClick}>{children}</button>;
}

export default Button;
