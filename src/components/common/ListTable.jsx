// import React from 'react';
// import { Card, List, ListItem, ListItemText, Divider } from '@mui/material';
// import { useTheme } from '@mui/material/styles';

// const Component = ({ items, renderLeft, renderRight, showDivider = true }) => {
//   const theme = useTheme();

//   return (
//     <Card sx={{ p: 2, borderRadius: { xs: 0, sm: 1 }, boxShadow: `0px 2px 6px rgba(0,0,0,0.08)` }}>
//       <List disablePadding>
//         {items.map((item, index) => (
//           <React.Fragment key={index}>
//             <ListItem
//               sx={{
//                 py: 1.5,
//                 px: 1,
//                 borderRadius: 1,
//               }}
//               secondaryAction={renderRight?.(item)}
//             >
//               {renderLeft?.(item)}
//               <ListItemText
//                 sx={{
//                   color: !item.value ? theme.palette.primary.main : theme.palette.text.secondary,
//                   textDecoration: item.value ? `line-through` : `none`,
//                   textDecorationColor: theme.palette.text.secondary,
//                 }}
//                 primary={item.name}
//               />
//             </ListItem>

//             {showDivider && index < items.length - 1 && <Divider sx={{ my: 0.5 }} />}
//           </React.Fragment>
//         ))}
//       </List>
//     </Card>
//   );
// };

import React from 'react';
import { Card, List, ListItem, Stack, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Text } from '@/components';

const Component = ({ items, leftComponent, rightComponent, showDivider = true }) => {
  const theme = useTheme();

  return (
    <Card sx={{ py: 1, borderRadius: { xs: 0, sm: 1 } }}>
      <List disablePadding>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem
              key={index}
              sx={{
                pr: 15,
                borderRadius: 1,
              }}
              secondaryAction={rightComponent?.(item)}
            >
              <Stack flexDirection={`row`} alignItems={`center`}>
                {leftComponent?.(item)}
                <Text
                  variant={`h6`}
                  sx={{
                    color: !item.value ? theme.palette.primary.main : theme.palette.text.secondary,
                    textDecoration: item.value ? `line-through` : `none`,
                    lineBreak: `anywhere`,
                    fontWeight: 400,
                  }}
                >
                  {item.name}
                </Text>
              </Stack>
            </ListItem>
            {showDivider && index < items.length - 1 && <Divider sx={{ my: 1, mx: 2 }} />}
          </React.Fragment>
        ))}
      </List>
    </Card>
  );
};

export { Component };
