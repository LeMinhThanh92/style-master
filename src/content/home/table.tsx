import React, {useEffect, useState} from 'react';
import {Button, CircularProgress, Grid, IconButton, Paper} from "@mui/material";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, {Dayjs} from "dayjs";
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


const TableEmployeeData = () => {

    const [deleteStatus,setDeleteStatus]=useState<boolean>(true)
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

    const [pStyleMasterCode, setPStyleMasterCode] = useState<string>('')
    const [pFactoryAllocation, setPFactoryAllocation] = useState<string>('')
    const [pMerAccountName, setPMerAccountName] = useState<string>('')
    const [pSeason, setPSeason] = useState<string>('')
    const [pStage, setPStage] = useState<string>('')
    const [pProductType, setPProductType] = useState<string>('')
    const [pFromDate, setPFromDate] = useState<Dayjs|null>(dayjs().subtract(2,'months'))
    const [pToDate, setPToDate] = useState<Dayjs|null>(dayjs())
    const [page1, setPage1] = useState<number>(0);
    const [rowsPerPage1, setRowsPerPage1] = useState(10);
    const [paginationModel1, setPaginationModel1] = useState({
        page: page1,
        pageSize: rowsPerPage1,
    });
    const [searchStatus,setSearchStatus]=useState<boolean>(false)
    const [searchValue, setSearchValue] = useState<FilterFormat | null>(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data} = await api.get('/api/v1/style_master/search_over_view', {
                    params: {
                        pStyleMasterCode:pStyleMasterCode,
                        pSeason:pSeason,
                        pStage:pStage,
                        pCustomerCode:'AD',
                        pProductType:pProductType,
                        pFactoryAllocation:pFactoryAllocation,
                        pMerAccountName:pMerAccountName,
                        pFromDate:pFromDate?.format('YYYY-MM-DD'),
                        pToDate:pToDate?.format('YYYY-MM-DD'),
                        pPageIndex:page1,
                        pPageSize:rowsPerPage1,
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
    }, [pStyleMasterCode, pSeason,pMerAccountName,pFactoryAllocation,pProductType,page1,rowsPerPage1]);


    const CustomToolbar = () => {
        const {enqueueSnackbar} = useSnackbar();


        const  handleRefesh=()=>{
          setSearchStatus(false)

        };
        const handleSearch = async () => {
            if (searchValue !== null) {
                switch (searchValue?.columnName) {
                    case 'FactoryAllocation':
                        setPFactoryAllocation(searchValue?.value);
                        setPMerAccountName('');
                        setPProductType('')
                        setPSeason('')
                        setPStyleMasterCode('');
                        setPStage('')
                        break;
                    case 'MerAccountName':
                        setPFactoryAllocation('');
                        setPMerAccountName(searchValue?.value);
                        setPProductType('')
                        setPSeason('')
                        setPStyleMasterCode('');
                        setPStage('')
                        break;
                    case 'ProductType':
                        setPFactoryAllocation('');
                        setPMerAccountName('');
                        setPProductType(searchValue?.value)
                        setPSeason('')
                        setPStyleMasterCode('');
                        setPStage('')
                        break;
                    case 'Season':
                        setPFactoryAllocation('');
                        setPMerAccountName('');
                        setPProductType('')
                        setPSeason(searchValue?.value)
                        setPStyleMasterCode('');
                        setPStage('')
                        break;
                    case 'StyleMastercode':
                        setPFactoryAllocation('');
                        setPMerAccountName('');
                        setPProductType('')
                        setPSeason('')
                        setPStyleMasterCode(searchValue.value);
                        setPStage('')
                        break;
                    case 'Stage':
                        setPFactoryAllocation('');
                        setPMerAccountName('');
                        setPProductType('')
                        setPSeason('')
                        setPStyleMasterCode('');
                        setPStage(searchValue.value)
                        break;
                }
                setSearchStatus(true)
            } else {
                enqueueSnackbar(`Error fetching data`, {
                    variant: 'error',
                    anchorOrigin: { vertical: 'top', horizontal: 'center' },
                });
            }

        };
        return (
            <GridToolbarContainer>
                <Grid container
                      justifyContent={'left'}
                      alignItems={'stretch'}
                      spacing={1}
                      direction={'row'}>
                    <Grid item xs={12} md={12}>
                        <>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <div
                                    className={"flex flex-col md:flex-row m-4"}>
                                    <DatePicker
                                        value={pFromDate}
                                        onChange={(newValue) => setPFromDate(newValue)}
                                        className={"w-64"}
                                        format={"YYYY-MM-DD"}
                                        slotProps={{textField: {size: 'small'}}}
                                    />

                                    <div className={"h-4 md:w-2"}/>

                                    <DatePicker
                                        value={pToDate}
                                        onChange={(newValue) => setPToDate(newValue)}
                                        className={"w-64"}
                                        format={"YYYY-MM-DD"}
                                        slotProps={{textField: {size: 'small'}}}
                                    />
                                </div>
                            </LocalizationProvider>
                        </>
                    </Grid>
                    {/*<Grid item xs={12} md={1}>*/}
                    {/*    <GridToolbarColumnsButton sx={{height:'54px'}}/>*/}
                    {/*</Grid>*/}
                    <Grid item xs={12} md={2}>
                        <MuiAutocompletegetfilter labelname={'Search'} wi={'100%'} value={searchValue}
                                                  setValue={(newValue) => setSearchValue(newValue)}/>
                    </Grid>
                    <Grid item xs={12} md={1.2}>
                        <Button fullWidth sx={{height:'54px'}} variant={'outlined'} startIcon={<SearchOutlined/>} onClick={handleSearch}>search</Button>
                    </Grid>
                    <Grid item xs={12} md={1.3}>
                        <Button fullWidth sx={{height:'54px'}} variant={'outlined'} startIcon={<RefreshOutlined/>} onClick={handleRefesh}>refresh</Button>
                    </Grid>
                    <Grid item xs={12} md={1.8}>
                        <Button fullWidth sx={{height:'54px'}} variant={'outlined'} startIcon={<FileUploadOutlined/>}>Import excel</Button>
                    </Grid>
                    <Grid item xs={12} md={1.8}>
                        <Button fullWidth sx={{height:'54px'}} variant={'outlined'} startIcon={<FileDownloadOutlined/>}>Export excel</Button>
                    </Grid>
                    <Grid item xs={12} md={1.3}>
                        <Button disabled={deleteStatus} fullWidth sx={{height:'54px',color:'red',borderColor:'red'}} variant={'outlined'} startIcon={<DeleteOutline />}>delete</Button>
                    </Grid>
                </Grid>

            </GridToolbarContainer>
        );
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data} = await api.get('/api/v1/style_master', {
                    params: {
                        pPageIndex: page,
                        pPageSize: rowsPerPage,
                        pCustomerCode:'AD'
                    },
                });

                setHd(data?.data);
                setRows(data?.data?.content?.dataList || []);
                sessionStorage.setItem('overview',JSON.stringify(data?.data?.content?.dataList||[]))
            } catch {
                enqueueSnackbar(`Error fetching data`, {
                    variant: 'error',
                    anchorOrigin: {vertical: 'top', horizontal: 'center'},
                });
            }
        };

        fetchData();
    }, [page, rowsPerPage]);


    const columns: GridColDef[] = (hd?.headers || []).map((header) => ({
        field: header,
        headerName: header,
        minWidth: 50,
        maxWidth: header === 'styleMasterId' || header === 'season' || header === 'stage' || header === 'optionNo' ? 100 :
            header === 'tacRouteNumber' || header === 'a1aRouteNumber' ? 130 : 1000,
        flex: 1,
        headerClassName: 'col-header',
        renderCell: (params) => (
            <>
        {params.colDef.field === 'createdDate'
            ? new Date(params.value).toISOString().replace('T', ' ').substring(0, 19)
            : params.value}
      </>
        ),
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
            if (params.row.styleMasterId !== data.styleMasterId) {
                try {
                    const {data} = await api.get('/api/v1/style_master/style_details', {
                        params: {
                            pStyleMasterId: params.row.styleMasterId
                        },
                    });
                    sessionStorage.setItem('sm', JSON.stringify(data?.data.content))
                    setOpen(true);

                } catch {
                    enqueueSnackbar(`Error fetching data`, {
                        variant: 'error',
                        anchorOrigin: {vertical: 'top', horizontal: 'center'},
                    });
                }
            } else {
                setOpen(true);
            }
        } else {
            try {
                const {data} = await api.get('/api/v1/style_master/style_details', {
                    params: {
                        pStyleMasterId: params.row.styleMasterId
                    },
                });
                sessionStorage.setItem('sm', JSON.stringify(data?.data.content))
                setOpen(true)
            } catch {
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
                    paginationModel={searchStatus ? paginationModel1 : paginationModel}
                    onPaginationModelChange={(model) => {
                        if(searchStatus){
                            setPage1(model.page);
                            setRowsPerPage1(model.pageSize);
                            setPaginationModel1(model);
                        }else {
                            setPage(model.page);
                            setRowsPerPage(model.pageSize);
                            setPaginationModel(model);
                        }


                    }}
                    columns={columns.filter((column) => !column.hideable)}
                    rowCount={hd?.content.totalElements || 0}
                    rows={rows}
                    slots={{toolbar: CustomToolbar}}
                    checkboxSelection
                    disableRowSelectionOnClick
                    onRowSelectionModelChange={(rowSelectionModel) => {
                        setSelectedIds(rowSelectionModel)
                        rowSelectionModel.length>0 ? setDeleteStatus(false) : setDeleteStatus(true)
                    }}
                    onRowDoubleClick={handleDoubleClick}
                />
            ) : (
                <div className={'w-full h-48 flex justify-center items-center'}>
                    <CircularProgress style={{}}/>
                </div>
            )}
            <MuiDialog open={open} setOpen={setOpen} title={'Style Master Description'}
                       content={<AddPage/>}/>
        </Paper>


    );
};

export default TableEmployeeData;
