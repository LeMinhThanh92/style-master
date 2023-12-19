import {Box, Button, ButtonGroup, Card, CardContent, Grid, Tab} from "@mui/material";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import {AutocompleteFormat, MuiAutocomplete} from "../muicomponent/autocomplete";
import {InputLabelMui} from "../muicomponent/inputlabel";
import React, {useEffect, useState} from "react";
import SamPage from "./sam";
import PrintPage from "./printing";
import EmbPage from "./emb";
import HeatPage from "./heat";
import BondPage from "./bond";
import PadPage from "./pad";
import SubPage from "./sub";
import {useSnackbar} from "notistack";
import {FilterFormat, MuiAutocompleteSeason} from "./component/autocompleteSeason";
import {MuiAutocompleteStage} from "./component/autocompleteStage";
import {MuiAutocompleteProductType} from "./component/autocompleteProductType";
import {MuiAutocompleteFactoryAllocation} from "./component/autocompleteFactoryAllocation";
import {MuiAutocompleteMerAccountName} from "./component/autocompleteMerAccountName";
import {MuiAutocompleteStatus} from "./component/autocompleteStatus";
import {MuiAutocompleteOptionNo} from "./component/AutocompleteOptionNo";

function AddNPage() {

    const { enqueueSnackbar } = useSnackbar();
    const [smCode, setSmCode] = useState('')
    const [stage, setStage] = useState<FilterFormat | null>(null)
    const [merName, setMerName] = useState<FilterFormat | null>(null)
    const [status, setStatus] = useState<FilterFormat | null>(null)
    const [options, setOptions] = useState<FilterFormat | null>(null)
    const [productType, setProductType] = useState<FilterFormat | null>(null)
    const [cuspCode, setCuspCode] = useState('')
    const [a1aRouteNum, setA1aRouteNum] = useState('')
    const [season, setSeason] = useState<FilterFormat | null>(null)
    const [tacRouteNum, setTacRouteNum] = useState('')
    const [value, setValue] = useState('1');
    const [facAllocation, setFacAllocation] = useState<FilterFormat | null>(null);
    const [disableBtnUpdate,setDisableBtnUpdate]=useState<boolean>(false)
    const [disableBtnAddNew,setDisableBtnAddNew]=useState<boolean>(false)

    const handleChange = (e: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const  handleClickUpdate = (e:React.SyntheticEvent)=>{
        setDisableBtnUpdate(true)
        setTimeout(function() {
            setDisableBtnUpdate(false)
        }, 5000);
        enqueueSnackbar('Update',{variant:'success',anchorOrigin:{vertical:'bottom',horizontal:'right'}})
    }

    const  handlleClickAddNew=(e:React.SyntheticEvent)=>{
        setDisableBtnAddNew(true)
        setTimeout(function() {
            setDisableBtnAddNew(false)
        }, 5000);
        enqueueSnackbar('Add new',{variant:'success',anchorOrigin:{vertical:'bottom',horizontal:'right'}})
    }

    let AutocompleteStatusDto:any
    const getData= sessionStorage.getItem('Status')
    if (getData){
        AutocompleteStatusDto=JSON.parse(getData);
    }

    useEffect(() => {
        const storedata = sessionStorage.getItem('sm');
        if (storedata !==null) {
             const data = JSON.parse(storedata);
            if (data !==null && data.styleMasterCode) {
                setSmCode(data.styleMasterCode?.toString());
                // setSeason(data.season?.toString())
                setSeason({
                    id: 1,
                    columnName: 'A1',
                    value: data.season?.toString()
                })
                setA1aRouteNum(data.a1aRouteNumber?.toString())
                setTacRouteNum(data.tacRouteNumber?.toString())
                setStage({
                    id: 1,
                    columnName: 'A1',
                    value: data.stage?.toString()
                })
                setMerName({
                    id: 1,
                    columnName: 'A1',
                    value: data.merAccountName?.toString()
                })
                setStatus({
                    id: 1,
                    columnName: 'A1',
                    value: data.status?.toString()
                })
                setOptions({
                    id: 1,
                    columnName: 'A1',
                    value: data.optionNo?.toString()
                })
                setProductType({
                    id: 1,
                    columnName: 'A1',
                    value: data.productType?.toString()
                })
                setFacAllocation({
                    id: 1,
                    columnName: 'A1',
                    value: data.factoryAllocation?.toString()
                })
            }
        }
    }, [sessionStorage.getItem('sm')]);


    return (
            <>
                <Grid container
                      justifyContent={'left'}
                      alignItems={'stretch'}
                      direction={'row'}
                      spacing={2}>
                    <Grid item xs={12} md={12}>
                        <Card>
                            <CardContent>
                                <Grid container
                                      justifyContent={'left'}
                                      alignItems={'stretch'}
                                      direction={'row'}
                                      spacing={2}>
                                    <Grid item xs={12} md={3}>
                                        <InputLabelMui fullwidth={true} valueName={smCode} setValue={setSmCode}
                                                       labelName={'Style Master code'}/>
                                    </Grid>
                                    <Grid item xs={12} md={3}>
                                        <MuiAutocompleteStage labelname={'Stage'} value={stage}
                                                              setValue={(newValue) => setStage(newValue)}/>
                                    </Grid>
                                    <Grid item xs={12} md={3}>
                                        <InputLabelMui fullwidth={true} valueName={cuspCode} setValue={setCuspCode}
                                                       labelName={'Customter Pattern Code'}/>
                                    </Grid>
                                    <Grid item xs={12} md={3}>
                                        <InputLabelMui fullwidth={true} valueName={a1aRouteNum} setValue={setA1aRouteNum}
                                                       labelName={'A1A Route Number'}/>
                                    </Grid>
                                    <Grid item xs={12} md={3}>
                                        <MuiAutocompleteProductType labelname={'Product Type'} value={productType}
                                                                    setValue={(newValue) => setProductType(newValue)}/>
                                    </Grid>
                                    <Grid item xs={12} md={3}>
                                        <MuiAutocompleteFactoryAllocation labelname={'Factory Allocation'} value={facAllocation}
                                                                          setValue={(newValue) => setFacAllocation(newValue)}/>
                                    </Grid>
                                    <Grid item xs={12} md={3}>
                                        <MuiAutocompleteMerAccountName labelname={'Mer Account Name'} value={merName}
                                                                       setValue={(newValue) => setMerName(newValue)}/>
                                    </Grid>
                                    <Grid item xs={12} md={3}>
                                        <MuiAutocompleteStatus labelname={'Status'} value={status}
                                                         setValue={(newValue) => setStatus(newValue)}/>
                                    </Grid>
                                    <Grid item xs={12} md={3}>
                                        {/*<InputLabelMui fullwidth={true} valueName={season} setValue={setSeason} labelName={'Season'}/>*/}
                                        <MuiAutocompleteSeason labelname={'Season'} value={season}
                                                               setValue={(newValue)=>setSeason(newValue)} />
                                    </Grid>
                                    <Grid item xs={12} md={3}>
                                        <MuiAutocompleteOptionNo labelname={'Option No'} value={options}
                                                         setValue={(newValue) => setOptions(newValue)}/>
                                    </Grid>
                                    <Grid item xs={12} md={3}>
                                        <InputLabelMui fullwidth={true} valueName={tacRouteNum} setValue={setTacRouteNum}
                                                       labelName={'Tac Route Number'}/>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Box sx={{width: '100%', typography: 'body1'}}>
                            <TabContext value={value}>
                                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                                    <TabList onChange={handleChange} aria-label='Tab MasterItem'>
                                        <Tab label="SAM" value="1"/>
                                        <Tab label="Printing" value="2"/>
                                        <Tab label="Embroidery" value="3"/>
                                        <Tab label="Heat Transfer" value="4"/>
                                        <Tab label="Bonding" value="5"/>
                                        <Tab label="Pad print" value="6"/>
                                        <Tab label="Sub" value="7"/>
                                    </TabList>
                                </Box>
                                <TabPanel value="1">
                                    <SamPage/>
                                </TabPanel>
                                <TabPanel value="2">
                                    <PrintPage/>
                                </TabPanel>
                                <TabPanel value="3">
                                    <EmbPage/>
                                </TabPanel>
                                <TabPanel value="4">
                                    <HeatPage/>
                                </TabPanel>
                                <TabPanel value="5">
                                    <BondPage/>
                                </TabPanel>
                                <TabPanel value="6">
                                    <PadPage/>
                                </TabPanel>
                                <TabPanel value="7">
                                    <SubPage/>
                                </TabPanel>
                            </TabContext>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={12} sx={{position:'fixed',bottom:'8px'}}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',

                            }}
                        >
                            <ButtonGroup aria-label="small button group">
                                <Button variant={'outlined'} onClick={handleClickUpdate} disabled={disableBtnUpdate}>Update</Button>
                                <Button variant={'outlined'} onClick={handlleClickAddNew} disabled={disableBtnAddNew}>Add new</Button>
                            </ButtonGroup>

                        </Box>
                    </Grid>
                </Grid>
            </>
    )
}

export default AddNPage;