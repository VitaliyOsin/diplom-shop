import httpService from "./http.service";

const catalogEndpoint = "/catalog";

const catalogService = {
  get: async () => {
    const res = await httpService.get(catalogEndpoint);
    return res.data;
  },
};

export default catalogService;
