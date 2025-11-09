import { useTheme } from '@mui/material/styles';

const Component = ({ list = [], type = `disc`, startFrom = 1 }) => {
  const theme = useTheme();

  const typeMap = {
    'list-disc': `disc`,
    'lower-alphabet': `lower-alpha`,
    'lower-roman': `lower-roman`,
    number: `decimal`,
  };

  const styleType = typeMap[type] ?? `disc`;

  return (
    <ol
      start={startFrom}
      style={{
        listStyleType: styleType,
        paddingLeft: `1rem`,
        margin: 0,
        color: theme.palette.text.secondary,
      }}
    >
      {list.map((item, index) => (
        <li key={item.value ?? `row-${index}`}>{item.children}</li>
      ))}
    </ol>
  );
};

export { Component };
