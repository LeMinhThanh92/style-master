import {Autocomplete, Stack, TextField} from '@mui/material'

export interface AutocompleteFormat {
  id: number;
  label: string;
}

interface AutocompleteProps {
  labelname: string;
  display?: any;
  wi?:string;
  value?: AutocompleteFormat | string | null;
  setValue?: (newValue: AutocompleteFormat | string | null) => void;
}

const testdata = ['option1', 'option2', 'option3', 'option4'];

const AutocompleteData = testdata.map((data, index) => ({
  id: index + 1,
  label: data,
}));

export function MuiAutocomplete({labelname, display, value, setValue,wi}: AutocompleteProps) {
  return (
    <Stack spacing={2}>
      <Autocomplete
        options={AutocompleteData}
        sx={{display: display,width:wi}}
        renderInput={(params) => <TextField {...params} label={labelname}/>}
        value={value}
        onChange={(_, newValue) => setValue && setValue(newValue)}
        freeSolo
      />
    </Stack>
  );
}