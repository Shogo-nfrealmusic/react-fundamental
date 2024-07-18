import { produce } from "immer";

const state = {
  name: "tom",
  age: 12,
};
produce(state, (draft) => {
  console.log(state);
});
