import {Autocomplete, Stack, TextField} from '@mui/material'

export interface AutocompleteFormat {
    id: number;
    label: string;
    value:string;
}

interface AutocompleteProps {
    labelname: string;
    display?: any;
    wi?: string;
    value?: AutocompleteFormat | string | number | null;
    setValue?: (newValue: AutocompleteFormat | number | string | null) => void;
}

const testdata = ['option1', 'option2', 'option3', 'option4'];

const AutocompleteData = testdata.map((data, index) => ({
    id: index + 1,
    label: data,
    value: (index + 2).toString(),
}));
export function MuiAutocomplete({labelname, display, value, setValue, wi}: AutocompleteProps) {
    return (
        <Stack spacing={2}>
            <Autocomplete
                options={AutocompleteData}
                sx={{display: display, width: wi,pb:'3px'}}
                renderInput={(params) => <TextField {...params} label={labelname}/>}
                value={value}
                onChange={(_, newValue) => setValue && setValue(newValue)}
            />
        </Stack>
    );
}