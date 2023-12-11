import {Box, Card, CardContent, Grid, Tab, Typography} from "@mui/material";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import {MuiAutocomplete} from "../muicomponent/autocomplete";
import {InputLabelMui} from "../muicomponent/inputlabel";
import {useState} from "react";
import SamPage from "./sam";
import PrintPage from "./printing";
import EmbPage from "./emb";
import HeatPage from "./heat";
import BondPage from "./bond";
import PadPage from "./pad";
import SubPage from "./sub";

function AddNPage() {

    const [smCode, setSmCode] = useState('')
    const [cuspCode, setCuspCode] = useState('')
    const [a1aRouteNum, setA1aRouteNum] = useState('')
    const [season, setSeason] = useState('')
    const [tacRouteNum, setTacRouteNum] = useState('')
    const [value, setValue] = useState('1');

    const handleChange = (e: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

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
                            <Typography component={'h2'} variant={'h2'}>
                                Add new Style
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Card>
                        <CardContent>
                            <Grid container
                                  justifyContent={'left'}
                                  alignItems={'stretch'}
                                  direction={'row'}
                                  spacing={2}>
                                <Grid item xs={12} md={3}>
                                    <InputLabelMui valueName={smCode} setValue={setSmCode}
                                                   labelName={'Style Master code'}/>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <MuiAutocomplete labelname={'Stage'}/>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <InputLabelMui valueName={cuspCode} setValue={setCuspCode}
                                                   labelName={'Customter Pattern Code'}/>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <InputLabelMui valueName={a1aRouteNum} setValue={setA1aRouteNum}
                                                   labelName={'A1A Route Number'}/>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <MuiAutocomplete labelname={'Product Type'}/>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <MuiAutocomplete labelname={'Factory Allocation'}/>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <MuiAutocomplete labelname={'Mer Account Name'}/>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <MuiAutocomplete labelname={'Status'}/>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <InputLabelMui valueName={season} setValue={setSeason} labelName={'Season'}/>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <MuiAutocomplete labelname={'Option No'}/>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <InputLabelMui valueName={tacRouteNum} setValue={setTacRouteNum}
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