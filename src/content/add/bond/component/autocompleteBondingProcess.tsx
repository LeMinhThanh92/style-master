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

export function MuiAutocompleteBondingProcess({labelname, display, value, setValue, wi}: AutocompleteProps) {
    const AutocompleteDto = JSON.parse(sessionStorage.getItem('BondingProcess') || '[]');
    return (
        <Stack spacing={2} >
            {AutocompleteDto !== undefined && (
                <Autocomplete
                    options={AutocompleteDto}
                    sx={{display: display, width: wi, pb: '3px'}}
                    renderInput={(params) => <TextField {...params} label={labelname}/>}
                    value={value}
                    onChange={(_, newValue) => setValue && setValue(newValue)}
                    getOptionLabel={(option) => option.value||'Bonding'}
                    isOptionEqualToValue={(option, value) => option.value === value?.value}
                />
            )}
        </Stack>
    );
}