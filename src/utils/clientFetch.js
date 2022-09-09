const parseData = async (res) => {
  if (res.headers.get('content-type').match(/application\/json/)) {
    return res.json();
  }

  return res.text();
};

export default async function clientFetch(url, options) {
  const res = await fetch(url, options);

  if (res.status >= 200 && res.status < 300) {
    return parseData(res);
  }

  const error = await parseData(res);

  throw error;
}
