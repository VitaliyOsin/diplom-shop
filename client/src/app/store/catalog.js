import { createSlice } from "@reduxjs/toolkit";
import catalogService from "../services/catalog.service";

const categoriesSlice = createSlice({
  name: "catalog",
  initialState: {
    entities: null,
    isLoading: true,
    error: null,
  },
  reducers: {
    catalogRequested: (state) => {
      state.isLoading = true;
    },
    catalogRecieved: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    catalogRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer: catalogReducer, actions } = categoriesSlice;
const { catalogRequested, catalogRecieved, catalogRequestFailed } = actions;

export const loadCatalog = () => async (dispatch) => {
  dispatch(catalogRequested());
  try {
    const content = await catalogService.get();
    dispatch(catalogRecieved(content));
  } catch (error) {
    dispatch("Ошибка получения качеств: ", catalogRequestFailed(error.message));
  }
};

export const getCatalog = () => (state) => state.catalog.entities;

export const getCatalogPointById = (catalogId) => (state) => {
  if (state.catalog.entities) {
    return state.catalog.entities.find((c) => catalogId === c._id);
  }
  return "";
};

export const getCatalogLoadingStatus = () => (state) => state.catalog.isLoading;

export default catalogReducer;
