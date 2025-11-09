import { Typography } from '@mui/material';

const Component = ({ variant, sx, children, color, dataTestid }) => {
  return (
    <Typography data-testid={dataTestid} variant={variant} sx={{ ...sx }} color={color}>
      {children}
    </Typography>
  );
};

export { Component };
