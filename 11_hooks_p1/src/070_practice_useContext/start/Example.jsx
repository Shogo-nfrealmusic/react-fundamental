import { useReducer } from "react";
import Input from "./components/Input";
import Select from "./components/Select";
import Result from "./components/Result";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "change": {
      const { name, value } = payload;
      return { ...state, [name]: value };
    }
    case "add": {
      return { ...state, result: state.a + state.b };
    }
    case "minus": {
      return { ...state, result: state.a - state.b };
    }
    case "divide": {
      return { ...state, result: state.a / state.b };
    }
    case "multiply": {
      return { ...state, result: state.a * state.b };
    }
    default:
      throw new Error("operator is invalid");
  }
};

const Example = () => {
  const initState = {
    a: 1,
    b: 2,
    result: 3,
  };

  const [state, dispatch] = useReducer(reducer, initState);

  return (
    /* 完成系のJSX */
    // <CalcProvider>
    //   <Input name="a"/>
    //   <Input name="b" />
    //   <Select />
    //   <Result />
    // </CalcProvider>
    <>
      <Input name="a" />
      <Input name="b" />
      <Select />
      <Result />
    </>
  );
};

export default Example;
