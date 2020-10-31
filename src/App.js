import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Phonebook from "./components-phonebook/Phonebook";
export default function App() {
  return (
    <>
      <Provider store={store}>
        <Phonebook />
      </Provider>
    </>
  );
}
