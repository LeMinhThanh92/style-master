import {Box, Card, CardContent, Grid, Tab} from "@mui/material";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import {AutocompleteFormat, MuiAutocomplete} from "../muicomponent/autocomplete";
import {InputLabelMui} from "../muicomponent/inputlabel";
import {useEffect, useState} from "react";
import SamPage from "./sam";
import PrintPage from "./printing";
import EmbPage from "./emb";
import HeatPage from "./heat";
import BondPage from "./bond";
import PadPage from "./pad";
import SubPage from "./sub";

function AddNPage() {

    const [smCode, setSmCode] = useState('')
    const [stage, setStage] = useState<AutocompleteFormat | string | number | null>(null)
    const [merName, setMerName] = useState<AutocompleteFormat | string | number | null>(null)
    const [status, setStatus] = useState<AutocompleteFormat | string | number | null>(null)
    const [options, setOptions] = useState<AutocompleteFormat | string | number | null>(null)
    const [productType, setProductType] = useState<AutocompleteFormat | string | number | null>(null)
    const [cuspCode, setCuspCode] = useState('')
    const [a1aRouteNum, setA1aRouteNum] = useState('')
    const [season, setSeason] = useState('')
    const [tacRouteNum, setTacRouteNum] = useState('')
    const [value, setValue] = useState('1');
    const [facAllocation, setFacAllocation] = useState<AutocompleteFormat | string | number | null>(null);

    const handleChange = (e: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    useEffect(() => {
        const storedata = sessionStorage.getItem('sm');
        if (storedata !==null) {
             const data = JSON.parse(storedata);
            if (data !==null && data.styleMasterCode) {
                setSmCode(data.styleMasterCode?.toString());
                setSeason(data.season?.toString())
                setA1aRouteNum(data.a1aRouteNumber?.toString())
                setTacRouteNum(data.tacRouteNumber?.toString())
                setStage(data.stage?.toString())
                setMerName(data.merAccountName?.toString())
                setStatus(data.status?.toString())
                setOptions(data.optionNo?.toString())
                setProductType(data.productType?.toString())
                setFacAllocation(data.factoryAllocation?.toString())
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
                {/*<Grid item xs={12} md={12}>*/}
                {/*    <Card>*/}
                {/*        <CardContent>*/}
                {/*            <Typography component={'h2'} variant={'h2'}>*/}
                {/*                Add new Style*/}
                {/*            </Typography>*/}
                {/*        </CardContent>*/}
                {/*    </Card>*/}
                {/*</Grid>*/}
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
                                    <MuiAutocomplete labelname={'Stage'} value={stage}
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
                                    <MuiAutocomplete labelname={'Product Type'} value={productType}
                                                     setValue={(newValue) => setProductType(newValue)}/>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <MuiAutocomplete labelname={'Factory Allocation'} value={facAllocation}
                                                     setValue={(newValue) => setFacAllocation(newValue)}/>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <MuiAutocomplete labelname={'Mer Account Name'} value={merName}
                                                     setValue={(newValue) => setMerName(newValue)}/>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <MuiAutocomplete labelname={'Status'} value={status}
                                                     setValue={(newValue) => setStatus(newValue)}/>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <InputLabelMui fullwidth={true} valueName={season} setValue={setSeason} labelName={'Season'}/>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <MuiAutocomplete labelname={'Option No'} value={options}
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
            </Grid>
        </>
    )
}

export default AddNPage;