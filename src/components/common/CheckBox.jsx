import { Checkbox } from '@mui/material';
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded';

const Component = ({ checked, onChange }) => {
  const uncheckedIcon = <CheckBoxOutlineBlankRoundedIcon sx={{ fontSize: 22, color: `#8C8C8C` }} />;

  const checkedIcon = (
    <svg width="22" height="22" viewBox="0 -2 26 26">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="4"
        stroke="#7A7A7A"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M7 12.5 L11 16 L23 3"
        stroke="#7A7A7A"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );

  return (
    <Checkbox
      disableRipple
      icon={uncheckedIcon}
      checkedIcon={checkedIcon}
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
    />
  );
};

export { Component };
