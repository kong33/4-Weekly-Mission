const BASE_URL = 'https://bootcamp-api.codeit.kr/api/';
const ID = 11;

const SHARED_LINKS = `${BASE_URL}sample/folder`;
const FOLDERS = `${BASE_URL}users/${ID}/folders`;
const LINKS = `${BASE_URL}users/${ID}/links`;
const USER = `${BASE_URL}users/$1`;
const AVATAR = `${BASE_URL}sample/user`;

export enum HTTPMethod {
  GET = 'GET',
  PUT = 'PUT',
  POST = 'POST',
  DELETE = 'DELETE',
}

export const END_POINT = {
  BASE_URL,
  SHARED_LINKS,
  FOLDERS,
  LINKS,
  USER,
  AVATAR,
};
