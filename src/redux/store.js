import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contactsReduser";

const store = configureStore({
  reducer: {
    items: contactReducer,
  },
});

export default store;
