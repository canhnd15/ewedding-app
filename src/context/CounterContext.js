import { createContext, useContext, useState } from "react";
import { useMoneyCounter } from "../features/money/useMoneyCounter";
import { useUser } from "../features/authentication/useUser";

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const { user } = useUser();
  const { results } = useMoneyCounter(user.id);

  const [data, setData] = useState(results);

  return (
    <CounterContext.Provider value={{ data, setData }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => useContext(CounterContext);
