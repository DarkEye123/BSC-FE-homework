import React from 'react';
import PropTypes from 'prop-types';
import { TrashSVG } from './styles';

const TrashIcon = ({ width, height, name }) => (
  <TrashSVG
    width={width}
    height={height}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 753.23 753.23"
    xmlSpace="preserve"
    key="trashIcon"
    name={name}
  >
    <path
      name={name}
      d="M494.308,659.077c12.993,0,23.538-10.546,23.538-23.539V353.077c0-12.993-10.545-23.539-23.538-23.539
				s-23.538,10.545-23.538,23.539v282.461C470.77,648.531,481.314,659.077,494.308,659.077z M635.538,94.154h-141.23V47.077
				C494.308,21.067,473.24,0,447.23,0H306c-26.01,0-47.077,21.067-47.077,47.077v47.077h-141.23
				c-26.01,0-47.077,21.067-47.077,47.077v47.077c0,25.986,21.067,47.077,47.077,47.077v423.692
				c0,51.996,42.157,94.153,94.154,94.153h329.539c51.996,0,94.153-42.157,94.153-94.153V235.385
				c26.01,0,47.077-21.091,47.077-47.077V141.23C682.615,115.221,661.548,94.154,635.538,94.154z M306,70.615
				c0-12.993,10.545-23.539,23.538-23.539h94.154c12.993,0,23.538,10.545,23.538,23.539v23.539c-22.809,0-141.23,0-141.23,0V70.615z
				 M588.461,659.077c0,25.986-21.066,47.076-47.076,47.076H211.846c-26.01,0-47.077-21.09-47.077-47.076V235.385h423.692V659.077z
				 M612,188.308H141.23c-12.993,0-23.538-10.545-23.538-23.539s10.545-23.539,23.538-23.539H612
				c12.993,0,23.538,10.545,23.538,23.539S624.993,188.308,612,188.308z M258.923,659.077c12.993,0,23.539-10.546,23.539-23.539
				V353.077c0-12.993-10.545-23.539-23.539-23.539s-23.539,10.545-23.539,23.539v282.461
				C235.384,648.531,245.93,659.077,258.923,659.077z M376.615,659.077c12.993,0,23.538-10.546,23.538-23.539V353.077
				c0-12.993-10.545-23.539-23.538-23.539s-23.539,10.545-23.539,23.539v282.461C353.077,648.531,363.622,659.077,376.615,659.077z"
    />
  </TrashSVG>
);

TrashIcon.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

TrashIcon.defaultProps = {
  width: '64px',
  height: '64px',
};

export default TrashIcon;