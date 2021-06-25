import React from "react";
import AlbumList from "./Components/AlbumList";

function AlbumFeature() {
  const albumList = [
    {
      id: 1,
      title: "Indie Pop",
      img: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/c/d/4/5cd447fb9f945ea181ed5e1e81da1b98.jpg",
    },
    {
      id: 2,
      title: "Sad Indie",
      img: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/8/3/f/7/83f7b6327157ea84d6943a2747a82700.jpg",
    },
    {
      id: 3,
      title: "Xuân hạ thu đông",
      img: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/2/0/8/7/2087a9ffe7a35c22f1efa212d57b0d72.jpg",
    },
  ];
  return (
    <div>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
