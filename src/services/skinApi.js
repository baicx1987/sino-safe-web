/* eslint-disable linebreak-style */
import { stringify } from 'qs';
import request from '../utils/request';
import { convertUrl } from '../utils/utils';

// Template 增删改查
export async function viewTemplate(params) {
  const url = convertUrl('/skin/templateView');
  return request(`${url}?${stringify(params)}`);
}
export async function queryTemplate(params) {
  const url = convertUrl('/skin/templatePage');
  return request(`${url}?${stringify(params)}`);
}
export async function removeTemplate(params) {
  const url = convertUrl('/skin/template', 'Remove');
  return request(url, {
    method: 'POST',
    body: {
      ...params,
      method: 'remove',
    },
  });
}
export async function addTemplate(params) {
  const url = convertUrl('/skin/template', 'Save');
  return request(url, {
    method: 'POST',
    body: {
      ...params,
      method: 'add',
    },
  });
}
export async function updateTemplate(params) {
  const url = convertUrl('/skin/template', 'Update');
  return request(url, {
    method: 'POST',
    body: {
      ...params,
      method: 'update',
    },
  });
}
// SkinUse 增删改查
export async function viewSkinUse(params) {
  const url = convertUrl('/skin/skinUseView');
  return request(`${url}?${stringify(params)}`);
}
export async function querySkinUse(params) {
  const url = convertUrl('/skin/skinUsePage');
  return request(`${url}?${stringify(params)}`);
}
export async function removeSkinUse(params) {
  const url = convertUrl('/skin/skinUse', 'Remove');
  return request(url, {
    method: 'POST',
    body: {
      ...params,
      method: 'remove',
    },
  });
}
export async function addSkinUse(params) {
  const url = convertUrl('/skin/skinUse', 'Save');
  return request(url, {
    method: 'POST',
    body: {
      ...params,
      method: 'add',
    },
  });
}
export async function updateSkinUse(params) {
  const url = convertUrl('/skin/skinUse', 'Update');
  return request(url, {
    method: 'POST',
    body: {
      ...params,
      method: 'update',
    },
  });
}
