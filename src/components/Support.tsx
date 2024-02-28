import { useState, useRef, useEffect } from "react";

const Support = () => {
  const [visible, setVisible] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target)) {
        setVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [widgetRef]);

  return (
    <>
      {visible ? (
        <div className="container" ref={widgetRef}>
          <p>Hello, how we can help you?</p>
        </div>
      ) : (
        <div className="container">
          <button onClick={() => setVisible(!visible)}>Start chat</button>
        </div>
      )}
    </>
  );
};

export default Support;
