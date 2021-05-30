import api from './api-config';

export const getOneLandingPage = async (id) => {
  const resp = await api.get(`/landing_pages/${id}`);
  return resp.data;
}