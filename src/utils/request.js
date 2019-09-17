import axios from 'axios';

axios.defaults.timeout = 30000;
axios.defaults.headers['Content-Type'] = 'application/json';

function formatUrl(optUrl) {
  // 格式化url
  let isStitch = optUrl.toString().indexOf('http');
  let newUrl = isStitch < 0 ? process.env.apiUrl + optUrl : optUrl;
  return newUrl;
}


export default function request(url, options) {
  url = formatUrl(url);
  let { method = 'GET', params, headers, data = {}, ...rest } = options;
  headers = headers || {};
  return axios({
    url: url,
    method: method,
    params: { ...params },
    headers: { ...headers },
    data: data,
    ...rest,
  }).then(({ data }) => ({ data })).catch(err => {
    err.errOptions  =  options;
    throw err;
  });
}
// 普通的请求, 带上了 token 与 tokenType 参数
axios.interceptors.request.use(config => {
  // let token = localStorageUtils.getItem('token');
  // if (token) {
  //   config.headers['token'] = token;
  //   config.headers['token_type'] = '0';
  // }
  return config;
});

axios.interceptors.response.use(function (res) {
  if (res.data.code === 0 || res.data.code === 1) {
    return res;
  }
  // token 验证失败
  else if (res.data.code === 104) {
    return Promise.reject(new Error(res.data.code));
  } else {
    const err = new Error(res.data.code);
    err.response = res;
    return Promise.reject(err);
  }
});
