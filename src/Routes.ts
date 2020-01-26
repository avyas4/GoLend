export const routes = {
  dashboard: {
    viewGeneric: () => `/years`,
  },
  vehiclesInfo: {
    view: (year: string) => `/${year}/vehicles`,
  },
};
