import {Autocomplete, Stack, TextField} from '@mui/material'

export interface FilterFormat {
    id: number;
    columnName: string;
    value: string;
}

interface AutocompleteProps {
    labelname: string;
    display?: any;
    wi?: string;
    value?: FilterFormat | null;
    setValue?: (newValue: FilterFormat | null) => void;
}

let AutocompleteDto:any
const getData= sessionStorage.getItem('FactoryAllocation')
if (getData){
    AutocompleteDto=JSON.parse(getData);
}


export function MuiAutocompleteFactoryAllocation({labelname, display, value, setValue, wi}: AutocompleteProps) {
    return (
        <Stack spacing={2}>
            <Autocomplete
                options={AutocompleteDto}
                sx={{display: display, width: wi,pb:'3px'}}
                renderInput={(params) => <TextField {...params} label={labelname}/>}
                value={value}
                onChange={(_, newValue) => setValue && setValue(newValue)}
                getOptionLabel={(option) => option.value || ''}
                isOptionEqualToValue={(option, value) => option.value === value?.value}
            />
        </Stack>
    );
}