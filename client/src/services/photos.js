import api from './api-config';

export const getAllPhotos = async () => {
  const resp = await api.get('/photos');
  return resp.data;
}

export const getOnePhoto = async (id) => {
  const resp = await api.get(`/photos/${id}`);
  return resp.data;
}

export const postPhoto = async (photoData) => {
  const resp = await api.post('/photos', { photo: photoData });
  return resp.data;
}

export const putPhoto = async (id, photoData) => {
  const resp = await api.put(`/photos/${id}`, { photo: photoData });
  return resp.data;
}

export const destroyPhoto = async (id) => {
  const resp = await api.delete(`/photos/${id}`);
  return resp;
}