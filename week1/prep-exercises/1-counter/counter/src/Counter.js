import { useState } from 'react';
import Button from './Button';
import Count from './Count';

const Counter = () => {
  const [count, setCount] = useState(0);

  const feedback = count > 10 ? "It's higher than 10!" : 'Keep counting...';

  let increaseCount = () => {
    setCount(Count(count));
  };

  return (
    <>
      <p>{feedback}</p>
      <p>{count}</p>
      <Button action={increaseCount} title={'Add 1!'} />
    </>
  );
};
export default Counter;
