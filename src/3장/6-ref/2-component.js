import React, { useEffect, useRef } from 'react';

export default function App() {
  const buttonRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);


  return (
    <div>
      <Button ref={buttonRef} />
    </div>
  )
};
// forwardRef
const Button = React.forwardRef(function({ onClick }, ref) {
  return (
    <button onClick={onClick} ref={ref}>버튼</button>
  )
})
