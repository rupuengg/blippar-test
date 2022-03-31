const fetchList = async () => {
  const url = 'https://gist.githubusercontent.com/abhijit-paul-blippar/0f97bb6626cfa9d8989c7199f7c66c5b/raw/dcff66021fba04ee8d3c6b23a3247fb5d56ae3e5/words';
  return fetch(url)
    .then((res) => {
      return res.text().then(data => {
        return data;
      });
    })
    .catch((err) => {
      console.log('E Error', err);
    })
};

const searchApi = {
  fetchList,
};

export default searchApi;