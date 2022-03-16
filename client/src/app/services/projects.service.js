import httpService from "./http.service";

const projectsEndpoint = "/projects";

const projectsService = {
  get: async () => {
    const res = await httpService.get(projectsEndpoint);
    return res.data;
  },
};

export default projectsService;
