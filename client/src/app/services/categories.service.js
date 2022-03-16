import httpService from "./http.service";

const categoriesEndpoint = "/categories";

const categoriesService = {
  get: async () => {
    const res = await httpService.get(categoriesEndpoint);
    return res.data;
  },
};

export default categoriesService;
