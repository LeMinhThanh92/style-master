import {Grid} from "@mui/material";
import {useState} from "react";
import {InputLabelMui} from "../../muicomponent/inputlabel";

function EPage() {

    const [embPosition,setEmbPosition]=useState<string|number|undefined>(undefined)
    const [embBadgeLogo,setEmbBadgeLogo]=useState<string|number|undefined>(undefined)
    const [embTotalStitch,setEmbTotalStitch]=useState<string|number|undefined>(undefined)
    const [embTotalSMV,setEmbTotalSMV]=useState<string|number|undefined>(undefined)

    return(
        <Grid container
              direction={'row'}
              justifyContent={'left'}
              alignItems={'stretch'}
              spacing={2}>
            <Grid item xs={12} md={3}>
                <InputLabelMui setValue={setEmbPosition} valueName={embPosition} labelName={'EMB Position'} />
            </Grid>
            <Grid item xs={12} md={3}>
                <InputLabelMui setValue={setEmbBadgeLogo} valueName={embBadgeLogo} labelName={'EMB Badge Logo'} />
            </Grid>
            <Grid item xs={12} md={3}>
                <InputLabelMui setValue={setEmbTotalStitch} valueName={embTotalStitch} labelName={'EMB Total Stitch'} />
            </Grid>
            <Grid item xs={12} md={3}>
                <InputLabelMui setValue={setEmbTotalSMV} valueName={embTotalSMV} labelName={'EMB Total SMV'} />
            </Grid>
        </Grid>
    )
}
export default EPage;