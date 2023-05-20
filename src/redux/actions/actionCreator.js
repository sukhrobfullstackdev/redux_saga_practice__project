import {
  GET_LATEST_NEWS,
  GET_POPULAR_NEWS,
  SET_LATEST_NEWS,
  SET_POPULAR_NEWS,
} from "../constants";

export const setLatestNews = (payload) => ({
  type: SET_LATEST_NEWS,
  payload,
});

export const setPopularNews = (payload) => ({
  type: SET_POPULAR_NEWS,
  payload,
});
export const getPopularNews = () => ({
  type: GET_POPULAR_NEWS
});
export const getLatestNews = () => ({
  type: GET_LATEST_NEWS
});

