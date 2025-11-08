import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import * as React from 'react';

const Component = React.memo(({ open, onClose, children, title, sx }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      sx={{
        '& .MuiDialog-container': {
          alignItems: { xs: `flex-start`, sm: `center` },
          pt: { xs: 5, sm: 0 },
        },
        ...sx,
      }}
    >
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent sx={{ p: 3 }}>{children}</DialogContent>
    </Dialog>
  );
});

export { Component };
