import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

export const API = publicRuntimeConfig.PRODUCTION ? 'https://blogerblogapp.com' : 'http://localhost:8080/api';
export const APP_NAME = publicRuntimeConfig.APP_NAME;