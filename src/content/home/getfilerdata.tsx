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
    const [data, setData] = useState<FilterInfo>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('/api/v1/style_master/get_filter', {
                    params: {
                        pCustomerCode: 'AD'
                    }
                });
                setData(response.data?.data);
                sessionStorage.setItem('filter', JSON.stringify(response.data?.data))
            } catch (error) {
                enqueueSnackbar(`Error fetching data`, {
                    variant: 'error',
                    anchorOrigin: {vertical: 'top', horizontal: 'center'},
                });
            }
        };

        if (!data) {
            fetchData();
        }
    }, [sessionStorage.getItem('filter')]);

    const AutocompleteDto = (data?.content || [])
        .filter((filter: FilterFormat) => filter.columnName !== 'OptionNo' && filter.columnName !== 'Status' && filter.columnName !== 'BondingProcess')
        .map((filter: FilterFormat) => ({
            id: filter.id,
            columnName: filter.columnName,
            value: filter.value,
        }));

    const mapColumns=['Season','ProductType','FactoryAllocation','Stage','MerAccountName','StyleMasterCode','Status','OptionNo','BondingProcess']
    const mapToDto=(columm:string)=>
        (data?.content ||[])
            .filter((filter:FilterFormat)=>filter.columnName===columm)
            .map((filter)=>({
                id: filter.id,
                columnName: filter.columnName,
                value: filter.value,
            }))
    mapColumns.forEach((column)=>{
        const dataDto=mapToDto(column)
        sessionStorage.setItem(column,JSON.stringify(dataDto))
    })

    return (
        <Stack spacing={2}>
            {AutocompleteDto !== null && (
                <Autocomplete
                    options={AutocompleteDto}
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


