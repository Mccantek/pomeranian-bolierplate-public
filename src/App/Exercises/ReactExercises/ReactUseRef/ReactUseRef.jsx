import { useEffect, useRef, useState } from 'react';
import './styles.css';

export function ReactUseRef() {
  const inputRef = useRef(null);
  const targetRef = useRef(null);


  const scrolltoTarget = () => {
    return targetRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    inputRef.current.focus();
    scrolltoTarget();
  }, []);

  return (
    <>
      <div className="container-react-use-ref">
        <label htmlFor="">Input without useref</label>
        <input type="text" />
        <br />
        <label htmlFor="">Input with useref</label>
        <input ref={inputRef} type="text" />


        {/* ///////////////////scroll to specific element after render */}
        <div className="container--react-use-ref-scroll-to">
          <div ref={targetRef}></div>
        </div>
      </div>
    </>
  );
}
