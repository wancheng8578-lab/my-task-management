import { Card, CardContent } from '@mui/material';

const Component = ({ children, sx, onSubmit, contentSx, contentPadding = 2, component }) => {
  return (
    <Card
      sx={{
        display: `flex`,
        flexDirection: `column`,
        height: `100%`,
        ...sx,
      }}
      component={component}
      onSubmit={(e) => {
        onSubmit(e);
      }}
    >
      <CardContent
        sx={{
          '&:last-child': { pb: contentPadding },
          ...contentSx,
        }}
      >
        {children}
      </CardContent>
    </Card>
  );
};

export { Component };
