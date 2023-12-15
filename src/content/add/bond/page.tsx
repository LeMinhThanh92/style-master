import {Card, CardContent, Grid} from "@mui/material";
import {AutocompleteFormat, MuiAutocomplete} from "../../muicomponent/autocomplete";
import {InputLabelMui} from "../../muicomponent/inputlabel";
import {useEffect, useState} from "react";

function BPage() {

    const [bProcess, setBProcess] = useState<AutocompleteFormat | string | number | null>(null)
    const [bPosition, setBPosition] = useState<string | number | undefined>(undefined)
    const [bTotalSMV, setBTotalSMV] = useState<string | number | undefined>(undefined)
    const [lPosition, setLPosition] = useState<string | number | undefined>(undefined)
    const [lTotalSMV, setLTotalSMV] = useState<string | number | undefined>(undefined)
    const [bondTotalSMV, setBondTotalSMV] = useState<string | number | undefined>(undefined)

    useEffect(()=>{
        const storedata = sessionStorage.getItem('sm');
        if (storedata !==null) {
            const data = JSON.parse(storedata);
            if (data !==null && data.styleMasterCode) {
                setBProcess(data.bondingProcess?.toString())
                setBPosition(data.bondingPosition?.toString())
                setBTotalSMV(data.bondingTotalSMV?.toString())
                setLPosition(data.laserPosition?.toString())
                setLTotalSMV(data.laserTotalSMV?.toString())
                setBondTotalSMV(data.totalBondingSMV?.toString())
            }
        }
    },[sessionStorage.getItem('sm')])

    return (
        <Card>
            <CardContent>
                <Grid container
                      justifyContent={'left'}
                      alignItems={'stretch'}
                      spacing={2}
                      direction={'row'}>
                    <Grid item xs={12} md={3}>
                        <MuiAutocomplete labelname={'BondingProcess'} value={bProcess}
                                         setValue={(newValue) => setBProcess(newValue)}/>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <InputLabelMui fullwidth={true} setValue={setBPosition} valueName={bPosition} labelName={'Bonding Position'}/>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <InputLabelMui fullwidth={true} setValue={setBTotalSMV} valueName={bTotalSMV} labelName={'Bonding Total SMV'}/>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <InputLabelMui fullwidth={true} setValue={setLPosition} valueName={lPosition} labelName={'Laser Position'}/>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <InputLabelMui fullwidth={true} setValue={setLTotalSMV} valueName={lTotalSMV} labelName={'Laser Total SMV'}/>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <InputLabelMui fullwidth={true} setValue={setBondTotalSMV} valueName={bondTotalSMV}
                                       labelName={'Total Bonding SMV'}/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default BPage;