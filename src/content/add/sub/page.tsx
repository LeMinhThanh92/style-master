import {useState} from "react";
import {Grid} from "@mui/material";
import {InputLabelMui} from "../../muicomponent/inputlabel";

function SuPage() {
    const [pSPosition,setPSPosition]=useState<string|number|undefined>(undefined)
    const [pSPrinter,setPSPrinter]=useState<string|number|undefined>(undefined)
    const [pSItem,setPSItem]=useState<string|number|undefined>(undefined)

    return(
        <Grid container
              direction={'row'}
              justifyContent={'left'}
              alignItems={'stretch'}
              spacing={2}>
            <Grid item xs={12} md={3}>
                <InputLabelMui setValue={setPSPosition} valueName={pSPosition} labelName={'Sublimation Position'}/>
            </Grid>
            <Grid item xs={12} md={3}>
                <InputLabelMui setValue={setPSPrinter} valueName={pSPrinter} labelName={'Sublimation Printer'}/>
            </Grid>
            <Grid item xs={12} md={3}>
                <InputLabelMui setValue={setPSItem} valueName={pSItem} labelName={'Sublimation Fabric Item/PartNo'}/>
            </Grid>
        </Grid>
    )
}
export default SuPage;