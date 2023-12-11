import {Grid} from "@mui/material";
import {useState} from "react";
import {InputLabelMui} from "../../muicomponent/inputlabel";

function PaPage() {

    const [pPosition,setPPosition]=useState<string|number|undefined>(undefined)
    const [pTotalSMV,setPTotalSMV]=useState<string|number|undefined>(undefined)

    return(
        <Grid container
              direction={'row'}
              justifyContent={'left'}
              alignItems={'stretch'}
              spacing={2}>
            <Grid item xs={12} md={3}>
                <InputLabelMui setValue={setPPosition} valueName={pPosition} labelName={'PadPrint Position'}/>
            </Grid>
            <Grid item xs={12} md={3}>
                <InputLabelMui setValue={setPTotalSMV} valueName={pTotalSMV} labelName={'PadPrint Total SMV'}/>
            </Grid>
        </Grid>
    )
}
export default PaPage;