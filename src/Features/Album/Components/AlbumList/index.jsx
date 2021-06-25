import React from "react";
import PropTypes from "prop-types";
import Album from "../Album";
import "./style.css";

function AlbumList({ albumList }) {
  return (
    <div className="album-list">
      {albumList.map((album) => (
        <Album key={album.id} albumInfo={album} />
      ))}
    </div>
  );
}

AlbumList.propTypes = {
  albumList: PropTypes.array.isRequired,
};

export default AlbumList;
