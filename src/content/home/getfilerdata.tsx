import {Autocomplete, Stack, TextField} from '@mui/material';
import {useEffect, useState} from 'react';
import api from '../../api/api';
import {useSnackbar} from 'notistack';

export type FilterFormat = {
    id: number;
    columnName: string;
    value: string;
};

type FilterInfo = {
    headers: string[];
    content: FilterFormat[];
};

interface AutocompleteProps {
    labelname: string;
    display?: any;
    wi?: string;
    value?: FilterFormat | null;
    setValue?: (newValue: FilterFormat | null) => void;

}

export function MuiAutocompletegetfilter({
                                             labelname,
                                             display,
                                             value,
                                             setValue,
                                             wi,
                                         }: AutocompleteProps) {
    const {enqueueSnackbar} = useSnackbar();
    const [data, setData] = useState<FilterInfo | undefined>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('/api/v1/style_master/get_filter');
                setData(response.data?.data);
            } catch (error) {
                enqueueSnackbar(`Error fetching data`, {
                    variant: 'error',
                    anchorOrigin: {vertical: 'top', horizontal: 'center'},
                });
            }
        };

        fetchData();
    }, [enqueueSnackbar]);

    const AutocompleteData = (data?.content || []).map((filter: FilterFormat) => ({
        id: filter.id,
        columnName: filter.columnName,
        value: filter.value,
    }));

    return (
        <Stack spacing={2}>
            {AutocompleteData !== null && (
                <Autocomplete
                    options={AutocompleteData}
                    sx={{display: display, width: wi, pb: '3px'}}
                    renderInput={(params) => <TextField {...params} label={labelname}/>}
                    value={value}
                    onChange={(_, newValue) => setValue && setValue(newValue)}
                    getOptionLabel={(option) => option.value}
                    isOptionEqualToValue={(option, value) => option.value === value?.value}
                />
            )}
        </Stack>
    );
}
