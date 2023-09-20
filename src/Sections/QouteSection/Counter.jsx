import { useEffect, useState } from 'react';
import "./Counter.css";

function Counter({ count, title }) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter < count) {
      setInterval(() => {
        setCounter((num) => num + Math.ceil((count / 100)));
      }, 300);
    } else {
      setCounter(count);
    }
  }, [counter]);

  return (
    <div className="col-lg-3 col-md-6 text-center counter">
      <h3 className="num text-light mb-4 fw-bold">{counter}+</h3>
      <h4 className="numtitle text-light fs-4 fw-bold">{title}</h4>
    </div>
  );
}
export default Counter;