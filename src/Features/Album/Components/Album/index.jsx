import React from "react";
import PropTypes from "prop-types";

function Album({ albumInfo }) {
  return (
    <div className="album">
      <img className="album__thumnail" src={albumInfo.img} alt="" />
      <p className="album__title">{albumInfo.title}</p>
    </div>
  );
}

Album.propTypes = {
  albumInfo: PropTypes.object.isRequired,
};

export default Album;
