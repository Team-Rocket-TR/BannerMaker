import React from 'react';
import { ChromePicker } from 'react-color';
import { useDispatch, useSelector } from 'react-redux';

import {
  setColor,
  setWidth,
  setHeight,
} from './slice';

import ColorpickerIcon from './ColorpickerIcon';

const BackgroundContainer = () => {
  const dispatch = useDispatch();
  const width = useSelector((state) => state.width);
  const height = useSelector((state) => state.height);

  // Change banner background color
  const handleClick = (selectedColor) => {
    dispatch(setColor(selectedColor));
  };

  // Change banner width
  const handleWidthChange = (e) => {
    const bannerWidth = /^[0-9\b]+$/;
    if (e.target.value === '' || bannerWidth.test(e.target.value)) {
      dispatch(setWidth(e.target.value));
    }
  };

  // Change banner heigth
  const handleHeightChange = (e) => {
    const bannerHeigth = /^[0-9\b]+$/;
    if (e.target.value === '' || bannerHeigth.test(e.target.value)) {
      dispatch(setHeight(e.target.value));
    }
  };

  return (
    <>
      <input type="text" name="width" value={width} maxLength="3" placeholder="Banner Width" onChange={handleWidthChange} />
      <input type="text" name="height" value={height} maxLength="3" placeholder="Banner Height" onChange={handleHeightChange} />
      <ColorpickerIcon onClick={handleClick} />
    </>
  );
};

export default BackgroundContainer;