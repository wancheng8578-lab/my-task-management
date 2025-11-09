import { useState } from 'react';
import { Box } from '@mui/material';
import { Images } from '@/assets';

const Component = ({
  src,
  fallback = Images.image_not_found,
  width = 80,
  height = 80,
  rounded = false,
  fit = `cover`,
  sx,
}) => {
  const [error, setError] = useState(false);

  const imageSrc = !error ? src : fallback;

  return (
    <Box
      sx={{
        width,
        height,
        position: `relative`,
        borderRadius: rounded ? `50%` : 1,
        overflow: `hidden`,
        ...sx,
      }}
    >
      <img
        src={imageSrc}
        alt=""
        loading="lazy"
        onError={() => setError(true)}
        style={{
          width: `100%`,
          height: `100%`,
          objectFit: fit,
          display: `block`,
        }}
      />
    </Box>
  );
};
export { Component };
