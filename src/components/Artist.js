import React from "react";

const Artist = ({ artist }) => {
  if (!artist) return null;

  const { name, followers, genres, images, popularity } = artist;

  //   &chco=8bc34a,FFFFFF
  const popularityChart = `https://image-charts.com/chart
  ?chs=700x190
  &chd=t:${popularity},${100 - popularity}
  &cht=p3
  &chl=Popularity
  &chf=ps0-0,lg,30,8bc34a,0.55,009688,1|ps0-1,lg,45,ffffff,0.2,ffffff,1
  `.replaceAll(" ", "");

  return (
    <div id="artist">
      <h3>{name}</h3>
      <p>{followers.total} followers</p>
      <p>{genres.map((genre) => genre).join(", ")}</p>
      <img
        className="artist-profile"
        src={images[2] && images[2].url}
        alt="artist-profile"
      />
      <img
        className="popularity-chart"
        src={popularityChart}
        alt="popularity-chart"
      />
    </div>
  );
};

export default Artist;
