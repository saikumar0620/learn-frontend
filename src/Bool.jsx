import React, { useState } from 'react'

 export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* <h1> this is the Bool page</h1> */}
      <button onClick={() => setIsOpen(false)}>Open</button>
      <button onClick={() => setIsOpen(true)}>Close</button>
      {/* Or cleaner toggle: */}
      <button onClick={() => setIsOpen(prev => !prev)}>Toggle</button>
      {isOpen && <div className="modal">Modal content</div>}
    </>
  );
}