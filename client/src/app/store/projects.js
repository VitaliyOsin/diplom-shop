import { createSlice } from "@reduxjs/toolkit";
import projectsService from "../services/projects.service";

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    entities: null,
    isLoading: true,
    error: null,
  },
  reducers: {
    projectsRequested: (state) => {
      state.isLoading = true;
    },
    projectsRecieved: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    projectsRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer: projectsReducer, actions } = projectsSlice;
const { projectsRequested, projectsRecieved, projectsRequestFailed } = actions;

export const loadProjectsList = () => async (dispatch) => {
  dispatch(projectsRequested());
  try {
    const content = await projectsService.get();
    dispatch(projectsRecieved(content));
  } catch (error) {
    dispatch(
      "Ошибка получения качеств: ",
      projectsRequestFailed(error.message)
    );
  }
};

export const getProjects = () => (state) => state.projects.entities;

export const getProjectById = (projectId) => (state) => {
  if (state.projects.entities) {
    return state.projects.entities.find((p) => projectId === p._id);
  }
  return "";
};

export const getProjectsLoadingStatus = () => (state) =>
  state.projects.isLoading;

export default projectsReducer;
