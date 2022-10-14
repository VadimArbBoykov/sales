import { useEffect, useState } from 'react';
import getTime from '../utils/getTime';

const useTimer = (deadline, currentTime) => {
  const [countDown, setCountDown] = useState(
    deadline - currentTime
  );

  const [end, setEnd] = useState(false)

  useEffect(() => {
    if(countDown > 0) {
      var interval = setInterval(() => {
        setCountDown(countDown - 1000);
      }, 1000);
    } else {
      setEnd(true)
    }

    return () => clearInterval(interval);
  }, [countDown]);

  return [{
    'minutes': getTime(countDown).minutes,
    'seconds': getTime(countDown).seconds
  }, end]
}

export {useTimer}
