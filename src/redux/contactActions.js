import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

// const createTask = (contactName, number) => ({
//   type: "contact/createTask",
//   payload: {
//     contact: {
//       id: uuidv4(),
//       name: contactName,
//       contact: number,
//     },
//   },
// });

const createTask = createAction("contact/createTask", (name, number) => ({
  payload: {
    contact: {
      id: uuidv4(),
      name: name,
      contact: number,
    },
  },
}));

// const removeTask = (id) => ({
//   type: "contact/removeTask",
//   payload: {
//     id,
//   },
// });

const removeTask = createAction("contact/removeTask");

// const changeFilter = (filter) => ({
//   type: "contact/filter",
//   payload: {
//     filter,
//   },
// });

const changeFilter = createAction("contact/filter");

// const isNotification = (isNotification) => ({
//   type: "contact/notification",
//   payload: {
//     isNotification,
//   },
// });

const isNotification = createAction("contact/notification");

export default {
  createTask,
  removeTask,
  changeFilter,
  isNotification,
};
