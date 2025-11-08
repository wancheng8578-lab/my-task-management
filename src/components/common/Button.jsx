import { Button } from '@mui/material';

const Component = ({
  onClick,
  children,
  fullWidth,
  sx,
  type = `submit`,
  variant = `contained`,
}) => {
  return (
    <Button
      sx={{ textTransform: `none`, ...sx }}
      fullWidth={fullWidth}
      variant={variant}
      onClick={onClick}
      type={type}
    >
      {children}
    </Button>
  );
};

export { Component };
