import Child from "./components/Child";
import { createContext } from "react";
export const Mycontext = createContext("hello");
const Example = () => {
  return <Child />;
};

export default Example;
