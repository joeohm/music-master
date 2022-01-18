export const fetchArtist = (query) => {
  const fetchUri = `${process.env.REACT_APP_API}/artist/${query}`;
  //   console.log(fetchUri);
  return fetch(fetchUri).then((response) =>
    response.json().then((data) => data)
  );
};
export const fetchTopTrack = (id) => {
  const fetchUri = `${process.env.REACT_APP_API}/artist/${id}/top-tracks`;
  //   console.log(fetchUri);
  return fetch(fetchUri).then((response) =>
    response.json().then((data) => data)
  );
};
