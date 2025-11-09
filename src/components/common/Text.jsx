import { Typography } from '@mui/material';

const Component = ({ variant, sx, children, color, dataTestid }) => {
  return (
    <Typography
      data-testid={dataTestid}
      variant={variant}
      sx={{ opacity: 0.7, ...sx }}
      color={color}
    >
      {children}
    </Typography>
  );
};

export { Component };
