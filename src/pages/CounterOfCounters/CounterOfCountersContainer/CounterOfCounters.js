import CounterOfCountersPresentation from "../CounterOfCountersComponents/CounterOfCountersPresentation";
import { useCallback, useState } from "react";
import { v4 as uuid } from "uuid";

const CounterOfCounters = () => {
  const [startCounter, setCounter] = useState([]);

  const handleCounterAdd = () => {
    setCounter((state) => {
      const newCounter = {
        id: uuid(),
        countValue: 0,
      };
      const updatedCounter = state.map((item) => {
        return {
          ...item,
          countValue:
            item.countValue % 2 === 0 ? item.countValue + 1 : item.countValue,
        };
      });
      return [...updatedCounter, newCounter];
    });
  };

  const handleCounterReset = () => {
    if (startCounter.length > 0) {
      setCounter([]);
    }
  };

  const handleCounterRemove = useCallback((id) => {
    setCounter((state) => {
      const startCounterCopy = [...state];
      const counterIndex = startCounterCopy.findIndex((item) => {
        return item.id === id;
      });
      startCounterCopy.splice(counterIndex, 1);

      return startCounterCopy.map((item) => {
        return {
          ...item,
          countValue:
            item.countValue % 2 !== 0 ? item.countValue - 1 : item.countValue,
        };
      });
    });
  }, []);

  const handleCounterPlus = useCallback((id) => {
    setCounter((state) => {
      const startCounterCopy = [...state];
      const targetStartCounterCopy = startCounterCopy.find((item) => {
        return item.id === id;
      });
      targetStartCounterCopy.countValue += 1;

      return startCounterCopy;
    });
  }, []);

  const handleCounterMinus = useCallback((id) => {
    setCounter((state) => {
      const startCounterCopy = [...state];
      const targetStartCounterCopy = startCounterCopy.find((item) => {
        return item.id === id;
      });

      if (targetStartCounterCopy.countValue > 0) {
        targetStartCounterCopy.countValue -= 1;
      }

      return startCounterCopy;
    });
  }, []);

  const handleCounterResetCounter = useCallback((id) => {
    setCounter((state) => {
      const startCounterCopy = [...state];
      const targetStartCounterCopy = startCounterCopy.find((item) => {
        return item.id === id;
      });
      targetStartCounterCopy.countValue = 0;
      return startCounterCopy;
    });
  }, []);

  return (
    <CounterOfCountersPresentation
      startCounter={startCounter}
      handleCounterAdd={handleCounterAdd}
      handleCounterPlus={handleCounterPlus}
      handleCounterMinus={handleCounterMinus}
      handleCounterReset={handleCounterReset}
      handleCounterRemove={handleCounterRemove}
      handleCounterResetCounter={handleCounterResetCounter}
    />
  );
};

export default CounterOfCounters;
