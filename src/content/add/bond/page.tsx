import {Grid} from "@mui/material";
import {MuiAutocomplete} from "../../muicomponent/autocomplete";
import {InputLabelMui} from "../../muicomponent/inputlabel";
import {useState} from "react";

function BPage() {

    const [bPosition,setBPosition]=useState<string|number|undefined>(undefined)
    const [bTotalSMV,setBTotalSMV]=useState<string|number|undefined>(undefined)
    const [lPosition,setLPosition]=useState<string|number|undefined>(undefined)
    const [lTotalSMV,setLTotalSMV]=useState<string|number|undefined>(undefined)
    const [bondTotalSMV,setBondTotalSMV]=useState<string|number|undefined>(undefined)

    return(
        <Grid container
              justifyContent={'left'}
              alignItems={'stretch'}
              spacing={2}
              direction={'row'}>
            <Grid item xs={12} md={3}>
                <MuiAutocomplete labelname={'BondingProcess'} />
            </Grid>
            <Grid item xs={12} md={3}>
                <InputLabelMui setValue={setBPosition} valueName={bPosition} labelName={'Bonding Position'} />
            </Grid>
            <Grid item xs={12} md={3}>
                <InputLabelMui setValue={setBTotalSMV} valueName={bTotalSMV} labelName={'Bonding Total SMV'} />
            </Grid>
            <Grid item xs={12} md={3}>
                <InputLabelMui setValue={setLPosition} valueName={lPosition} labelName={'Laser Position'} />
            </Grid>
            <Grid item xs={12} md={3}>
                <InputLabelMui setValue={setLTotalSMV} valueName={lTotalSMV} labelName={'Laser Total SMV'} />
            </Grid>
            <Grid item xs={12} md={3}>
                <InputLabelMui setValue={setBondTotalSMV} valueName={bondTotalSMV} labelName={'Total Bonding SMV'} />
            </Grid>
        </Grid>
    )
}
export default BPage;