import { FC } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

type DropdownProps = {
  label: string;
  value: string;
  onChange: (newValue: string) => void;
  options: string[];
};

const Dropdown: FC<DropdownProps> = ({ label, value, onChange, options }) => {
  return (
    <FormControl style={{ width: '170px' }}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        value={value}
        label={label}
        onChange={(e): void => {
          onChange(e.target.value);
        }}
      >
        <MenuItem value={''}>Alle</MenuItem>
        {options.map((it: string) => (
          <MenuItem key={it} value={it}>
            {it}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
