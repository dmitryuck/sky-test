import fetch from 'isomorphic-unfetch';


export function buildRouteUrl(route, ...params) {
  return `/${route}${params.reduce((result, param) => result += '/:'+param, '')}`;
}

export function isDefined(...values) {
  return values &&
    Array.from(values)
      .every(v => v !== null && v !== undefined && v !== false && v !== 'null' && v !== 'undefined' && v !== 'false' && v !== '');
}

export async function getExtRequest(url, params) {
  let path = url;

  if (params) {
    path += Object
      .keys(params)
      .filter(key => isDefined(params[key]))
      .map((key, index) => {
        const startWith = index === 0 ? '?' : '&';
        return startWith + key + '=' + params[key];
      })
      .join('');
  }

  const options = {
    method: 'GET'
  };

  const res = await fetch(path, options);

  return await res.json();
}