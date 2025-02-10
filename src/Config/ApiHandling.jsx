import axios from "axios";

let apiHandle = axios.create({
  baseURL: "https://backend.iptv.com/api",
  //   baseURL: "http://192.168.18.200:4000/api",
});

const imageurl = (endpoint) => {
  return {
    imageURL: `https://backend.iptv.com/uploads/${endpoint}`,
  };
};

let Get = (endPoint) => {
  return apiHandle.get(endPoint);
};

let SearchByNameByType = (endPoint, name, type, token) => {
  return apiHandle.get(`${endPoint}/${name}?type=${type}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

let SearchByName = (endPoint, name, token) => {
  return apiHandle.get(`${endPoint}/${name}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

let SearchByNameByParams = (endPoint, name, token) => {
  return apiHandle.get(`${endPoint}/${name}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

let GetList = (endPoint, token) => {
  return apiHandle.get(`${endPoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

let GetThePage = (endPoint, type, page, limit, token) => {
  return apiHandle.get(`${endPoint}/${type}?page=${page}&limit=${limit}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
let GetTheList = (endPoint, page, limit, token) => {
  return apiHandle.get(`${endPoint}?page=${page}&limit=${limit}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

let GetById = (endPoint, id, token) => {
  return apiHandle.get(`${endPoint}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

let GetName = (endPoint, usertype, token) => {
  return apiHandle.get(`${endPoint}/${usertype}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

let Post = (endPoint, body, token) => {
  return apiHandle.post(`${endPoint}`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

let Put = (endPoint, id, body, token) => {
  return apiHandle.put(`${endPoint}/${id}`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

let Delete = (endPoint, id, token) => {
  return apiHandle.delete(`${endPoint}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export {
  Get,
  Post,
  Put,
  Delete,
  GetName,
  GetById,
  GetList,
  imageurl,
  GetThePage,
  GetTheList,
  SearchByName,
  SearchByNameByType,
  SearchByNameByParams,
};
