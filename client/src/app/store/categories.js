import { createSlice } from "@reduxjs/toolkit";
import categoriesService from "../services/categories.service";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    entities: null,
    isLoading: true,
    error: null,
  },
  reducers: {
    categoriesRequested: (state) => {
      state.isLoading = true;
    },
    categoriesRecieved: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    categoriesRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer: categoriesReducer, actions } = categoriesSlice;
const { categoriesRequested, categoriesRecieved, categoriesRequestFailed } =
  actions;

export const loadCategoriesList = () => async (dispatch) => {
  dispatch(categoriesRequested());
  try {
    const content = await categoriesService.get();
    dispatch(categoriesRecieved(content));
  } catch (error) {
    dispatch(
      "Ошибка получения категорий: ",
      categoriesRequestFailed(error.message)
    );
  }
};

export const getCategories = () => (state) => state.categories.entities;

export const getCategoryById = (categoryId) => (state) => {
  if (state.categories.entities) {
    return state.categories.entities.find((c) => categoryId === c._id);
  }
  return "";
};

export const getCategoriesLoadingStatus = () => (state) =>
  state.categories.isLoading;

export default categoriesReducer;
