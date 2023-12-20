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
                const response = await api.get('/api/v1/style_master/get_filter',{
                    params:{
                        pCustomerCode:'AD'
                    }
                });
                setData(response.data?.data);
                sessionStorage.setItem('filter',JSON.stringify(response.data?.data))
            } catch (error) {
                enqueueSnackbar(`Error fetching data`, {
                    variant: 'error',
                    anchorOrigin: {vertical: 'top', horizontal: 'center'},
                });
            }
        };

        fetchData();
    }, [sessionStorage.getItem('filter')]);

    const AutocompleteDto = (data?.content || [])
        .filter((filter: FilterFormat) => filter.columnName !== 'OptionNo' && filter.columnName !== 'Status' && filter.columnName!=='BondingProcess')
        .map((filter: FilterFormat) => ({
            id: filter.id,
            columnName:filter.columnName,
            value: filter.value,
        }));

    const AutocompleteProductTypeDto = (data?.content || [])
        .filter((filter: FilterFormat) => filter.columnName === 'ProductType')
        .map((filter: FilterFormat) => ({
            id: filter.id,
            columnName:filter.columnName,
            value: filter.value,
        }));
    const AutocompleteSeasonDto = (data?.content || [])
        .filter((filter: FilterFormat) => filter.columnName === 'Season')
        .map((filter: FilterFormat) => ({
            id: filter.id,
            columnName:filter.columnName,
            value: filter.value,
        }));
    const AutocompleteFactoryAllocationDto = (data?.content || [])
        .filter((filter: FilterFormat) => filter.columnName === 'FactoryAllocation')
        .map((filter: FilterFormat) => ({
            id: filter.id,
            columnName:filter.columnName,
            value: filter.value,
        }));
    const AutocompleteMerAccountNameDto = (data?.content || [])
        .filter((filter: FilterFormat) => filter.columnName === 'MerAccountName')
        .map((filter: FilterFormat) => ({
            id: filter.id,
            columnName:filter.columnName,
            value: filter.value,
        }));
    const AutocompleteStageDto = (data?.content || [])
        .filter((filter: FilterFormat) => filter.columnName === 'Stage')
        .map((filter: FilterFormat) => ({
            id: filter.id,
            columnName:filter.columnName,
            value: filter.value,
        }));
    const AutocompleteStyleMasterCodeDto = (data?.content || [])
        .filter((filter: FilterFormat) => filter.columnName === 'StyleMastercode')
        .map((filter: FilterFormat) => ({
            id: filter.id,
            columnName:filter.columnName,
            value: filter.value,
        }));
    const AutocompleteStatusDto = (data?.content || [])
        .filter((filter: FilterFormat) => filter.columnName === 'Status')
        .map((filter: FilterFormat) => ({
            id: filter.id,
            columnName:filter.columnName,
            value: filter.value,
        }));
    const AutocompleteOptionNoDto = (data?.content || [])
        .filter((filter: FilterFormat) => filter.columnName === 'OptionNo')
        .map((filter: FilterFormat) => ({
            id: filter.id,
            columnName:filter.columnName,
            value: filter.value,
        }));
    const AutocompleteBondingProcessDto = (data?.content || [])
        .filter((filter: FilterFormat) => filter.columnName === 'BondingProcess')
        .map((filter: FilterFormat) => ({
            id: filter.id,
            columnName:filter.columnName,
            value: filter.value,
        }));

    sessionStorage.setItem('Season',JSON.stringify(AutocompleteSeasonDto))
    sessionStorage.setItem('ProductType',JSON.stringify(AutocompleteProductTypeDto))
    sessionStorage.setItem('FactoryAllocation',JSON.stringify(AutocompleteFactoryAllocationDto))
    sessionStorage.setItem('Stage',JSON.stringify(AutocompleteStageDto))
    sessionStorage.setItem('MerAccountName',JSON.stringify(AutocompleteMerAccountNameDto))
    sessionStorage.setItem('StyleMasterCode',JSON.stringify(AutocompleteStyleMasterCodeDto))
    sessionStorage.setItem('Status',JSON.stringify(AutocompleteStatusDto))
    sessionStorage.setItem('OptionNo',JSON.stringify(AutocompleteOptionNoDto))
    sessionStorage.setItem('BondingProcess',JSON.stringify(AutocompleteBondingProcessDto))



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
