import { combineReducers, configureStore } from "@reduxjs/toolkit";
import catalogReducer from "./catalog";
import categoriesReducer from "./categories";
import projectsReducer from "./projects";
import usersReducer from "./users";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  catalog: catalogReducer,
  projects: projectsReducer,
  users: usersReducer,
});

export function createStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
