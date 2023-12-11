import {useState} from "react";
import {Grid} from "@mui/material";
import {InputLabelMui} from "../../muicomponent/inputlabel";

function PrPage() {
    const [pPosition,setPPosition]=useState<string|number|undefined>(undefined)
    const [pPrinter,setPPrinter]=useState<string|number|undefined>(undefined)
    const [pItem,setPItem]=useState<string|number|undefined>(undefined)

    return(
        <Grid container
              direction={'row'}
              justifyContent={'left'}
              alignItems={'stretch'}
              spacing={2}>
            <Grid item xs={12} md={3}>
                <InputLabelMui setValue={setPPosition} valueName={pPosition} labelName={'Screen Pr. Position'}/>
            </Grid>
            <Grid item xs={12} md={3}>
                <InputLabelMui setValue={setPPrinter} valueName={pPrinter} labelName={'Screen Pr. Printer'}/>
            </Grid>
            <Grid item xs={12} md={3}>
                <InputLabelMui setValue={setPItem} valueName={pItem} labelName={'Screen Pr. Fabric Item/PartNo'}/>
            </Grid>
        </Grid>
    )
}
export default PrPage;