import { TextField, InputAdornment } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Component = ({
  value,
  onChange,
  label,
  size = `small`,
  leftIcon,
  placeholder,
  sx,
  required,
}) => {
  const theme = useTheme();

  return (
    <TextField
      size={size}
      variant={`outlined`}
      sx={{
        backgroundColor: theme.palette.secondary.main,
        borderRadius: `12px`,
        '& .MuiOutlinedInput-root': {
          px: 2,
          '& fieldset': { border: `none` },
          '&:hover fieldset': { border: `none` },
          '&.Mui-focused fieldset': { border: `none` },
        },
        ...sx,
      }}
      InputProps={
        leftIcon && {
          startAdornment: <InputAdornment position={`start`}>{leftIcon}</InputAdornment>,
        }
      }
      placeholder={placeholder}
      label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
    />
  );
};

export { Component };
