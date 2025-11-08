import React from 'react';
import { Card, List, ListItem, ListItemText, Divider } from '@mui/material';

const Component = ({
  items,
  renderLeft,
  renderRight,
  getKey = (item) => item.id,
  getLabel = (item) => item.name,
  showDivider = true,
}) => {
  return (
    <Card sx={{ p: 2, borderRadius: { xs: 0, sm: 1 }, boxShadow: `0px 2px 6px rgba(0,0,0,0.08)` }}>
      <List disablePadding>
        {items.map((item, index) => (
          <React.Fragment key={getKey(item)}>
            <ListItem
              sx={{
                py: 1.5,
                px: 1,
                borderRadius: 1,
              }}
              secondaryAction={renderRight?.(item)}
            >
              {renderLeft?.(item)}
              <ListItemText primary={getLabel(item)} />
            </ListItem>

            {showDivider && index < items.length - 1 && <Divider sx={{ my: 0.5 }} />}
          </React.Fragment>
        ))}
      </List>
    </Card>
  );
};

export { Component };
