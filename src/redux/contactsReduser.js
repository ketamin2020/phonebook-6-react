import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactActions from "../redux/contactActions";

function parseLS() {
  const savedContacts = JSON.parse(localStorage.getItem("contacts"));
  return savedContacts || [];
}
const getDataFromLS = parseLS();
const contact = createReducer(getDataFromLS, {
  [contactActions.createTask]: (state, action) => [
    ...state,
    action.payload.contact,
  ],
  [contactActions.removeTask]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});

const filter = createReducer("", {
  [contactActions.changeFilter]: (state, action) => action.payload,
});

const isNotification = createReducer(false, {
  [contactActions.isNotification]: (state, action) => action.payload,
});

export default combineReducers({
  contact,
  filter,
  isNotification,
});
