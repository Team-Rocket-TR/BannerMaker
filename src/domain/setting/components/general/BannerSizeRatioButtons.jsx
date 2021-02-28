import React from 'react';

import BannerSizeRatioButton from './BannerSizeRatioButton';

const BannerSizeButtons = ({ width, onClick }) => {
  const bannerRatios = [
    ['1:1', width, width],
    ['2:1', width, (width / 2)],
    ['4:3', width, Math.floor(width * (3 / 4))],
    ['16:9', width, Math.floor(width * (9 / 16))],
  ];

  return (
    <>
      {bannerRatios.map((props) => {
        const [ratio, w, h] = props;
        return (
          <BannerSizeRatioButton
            width={w}
            height={h}
            ratio={ratio}
            key={ratio}
            onClick={onClick}
          />
        );
      })}
    </>
  );
};

export default BannerSizeButtons;
