import React, {useEffect, useState} from 'react';
import {Button, CircularProgress, IconButton, Paper} from "@mui/material";
import {
    DataGrid,
    GridColDef,
    GridToolbarContainer,
    GridToolbarColumnsButton,
    GridRowsProp, GridRowSelectionModel, GridRowParams
} from "@mui/x-data-grid";
import {
    DeleteOutline, FileDownloadOutlined,
    FileUploadOutlined,
    ImportExportOutlined,
    RefreshOutlined,
    SearchOutlined
} from "@mui/icons-material";
import {useSnackbar} from "notistack";
import api from "../../api/api";
import {MuiDialog} from "../muicomponent/dialog";
import AddPage from "../add";
import {FilterFormat, MuiAutocompletegetfilter} from "./getfilerdata";

type StyleMasterInfo = {
    id: number;
    styleMasterId: string;
    styleMasterCode: string;
    season: string;
    stage: string;
    optionNo: string;
    tacRouteNumber: string;
    a1aRouteNumber: string;
    productType: string;
    factoryAllocate: string;
    merAccountName: string;
    status: number;
    totalRowNum: number;
};

type StyleMasterContent = {
    pageIndex: number;
    rowPerPage: number;
    totalElements: number;
    totalPages: number;
    dataList: StyleMasterInfo[];
};

type TableInfo = {
    headers: string[];
    content: StyleMasterContent;
};

const CustomToolbar = () => {
    const [searchValue, setSearchValue] = useState<FilterFormat| null>(null);
    const handleSearch = () => {
        console.log(searchValue)
    };
    return (
        <GridToolbarContainer>
            <GridToolbarColumnsButton/>
            <MuiAutocompletegetfilter labelname={'Search'} wi={'200px'} value={searchValue} setValue={(newValue)=>setSearchValue(newValue)}/>
            <Button variant={'outlined'} startIcon={<SearchOutlined/>} onClick={handleSearch}>search</Button>
            <Button variant={'outlined'} startIcon={<RefreshOutlined/>}>refresh</Button>
            <Button variant={'outlined'} startIcon={<FileUploadOutlined/>}>Import excel</Button>
            <Button variant={'outlined'} startIcon={<FileDownloadOutlined/>}>Export excel</Button>
        </GridToolbarContainer>
    );
};


const TableEmployeeData = () => {

    const [hd, setHd] = useState<TableInfo | null>(null);
    const {enqueueSnackbar} = useSnackbar();
    const [page, setPage] = useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [paginationModel, setPaginationModel] = useState({
        page: page,
        pageSize: rowsPerPage,
    });
    const [rows, setRows] = useState<GridRowsProp>([]);
    const [selectedIds, setSelectedIds] = useState<GridRowSelectionModel>([]);




    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data} = await api.get('/api/v1/style_master', {
                    params: {
                        page,
                        rowsPerPage,
                    },
                });

                setHd(data?.data);
                setRows(data?.data?.content?.dataList || []);
            } catch {
                enqueueSnackbar(`Error fetching data`, {
                    variant: 'error',
                    anchorOrigin: {vertical: 'top', horizontal: 'center'},
                });
            }
        };

        fetchData();
    }, [page, rowsPerPage, enqueueSnackbar]);




    const columns: GridColDef[] = (hd?.headers || []).map((header) => ({
        field: header,
        headerName: header,
        minWidth: 50,
        maxWidth: header === 'styleMasterId' || header === 'season' || header === 'stage' || header === 'optionNo' ? 100 :
            header === 'tacRouteNumber' || header === 'a1aRouteNumber' ? 130 : 1000,
        flex: 1,
        headerClassName: 'col-header',
        hideable: header === 'id' || header === 'status' || header === 'totalRowNum' || header === 'styleMasterId' ? true : false
    }));

    function handleClick() {
        console.log(selectedIds)
    }

    const [open, setOpen] = useState<boolean>(false)
    const handleDoubleClick = async (params: GridRowParams) => {

        //sessionStorage.setItem('sm', JSON.stringify(params.row))
        const checkdata = sessionStorage.getItem('sm')
        if (checkdata) {
            const data = JSON.parse(checkdata)
            if (params.row.styleMasterId!==data.styleMasterId) {
                try {
                    const {data} = await api.get('/api/v1/style_master/style_details', {
                        params: {
                            pStyleMasterId:params.row.styleMasterId
                        },
                    });
                    sessionStorage.setItem('sm', JSON.stringify(data?.data.content))
                    setOpen(true);

                }catch{
                    enqueueSnackbar(`Error fetching data`, {
                        variant: 'error',
                        anchorOrigin: {vertical: 'top', horizontal: 'center'},
                    });
                }
            }
            else {setOpen(true);}
        } else {
            console.log(params.row)
            try {
                const {data} = await api.get('/api/v1/style_master/style_details', {
                    params: {
                        pStyleMasterId:params.row.styleMasterId
                    },
                });
                sessionStorage.setItem('sm', JSON.stringify(data?.data.content))
                setOpen(true)
            }catch{
                enqueueSnackbar(`Error fetching data`, {
                    variant: 'error',
                    anchorOrigin: {vertical: 'top', horizontal: 'center'},
                });
            }
        }

    };

    return (
        <Paper
            sx={{
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                minHeight: 100,
                marginTop: 4,
                '& .MuiDataGrid-columnHeaderTitle': {
                    fontWeight: 'bold',
                },
                '& .col-header': {
                    backgroundColor: '#3C7363',
                    color: 'white'
                },
            }}
        >
            <IconButton onClick={handleClick}><DeleteOutline/> </IconButton>
            {rows.length > 0 ? (
                <DataGrid
                    initialState={{
                        columns: {
                            columnVisibilityModel: {
                                orderNo: false,
                            },
                        },
                    }}
                    className={'h-[512px]'}
                    getRowId={(row) => row.id}
                    pageSizeOptions={[10, 25, 50]}
                    paginationMode={'server'}
                    paginationModel={paginationModel}
                    onPaginationModelChange={(model) => {
                        setPage(model.page);
                        setRowsPerPage(model.pageSize);
                        setPaginationModel(model);
                    }}
                    columns={columns.filter((column) => !column.hideable)}
                    rowCount={hd?.content.totalElements || 0}
                    rows={rows}
                    slots={{toolbar: CustomToolbar}}
                    checkboxSelection
                    disableRowSelectionOnClick
                    onRowSelectionModelChange={(rowSelectionModel) => {
                        setSelectedIds(rowSelectionModel)
                    }}
                    onRowDoubleClick={handleDoubleClick}
                />
            ) : (
                <div className={'w-full h-48 flex justify-center items-center'}>
                    <CircularProgress style={{}}/>
                </div>
            )}
            <MuiDialog open={open} setOpen={setOpen} actionname={'save'} title={'Style Master Description'}
                       content={<AddPage/>}/>
        </Paper>


    );
};

export default TableEmployeeData;
