import {Grid} from "@mui/material";
import {InputLabelMui} from "../../muicomponent/inputlabel";
import {useState} from "react";

function HPage() {

    const [htSmall,setHtSmall]=useState<number|string|undefined>(undefined)
    const [htBig,setHtBig]=useState<number|string|undefined>(undefined)
    const [htTotalPosition,setHtTotalPosition]=useState<number|string|undefined>(undefined)
    const [htEmbBacking,setHtEmbBacking]=useState<number|string|undefined>(undefined)

    return(
        <>
            <Grid container
                  direction={'row'}
                  justifyContent={'left'}
                  alignItems={'stretch'}
                  spacing={2}>
                <Grid item xs={12} md={3}>
                    <InputLabelMui setValue={setHtSmall} valueName={htSmall} labelName={'HT Small'} />
                </Grid>
                <Grid item xs={12} md={3}>
                    <InputLabelMui setValue={setHtBig} valueName={htBig} labelName={'HT Big'} />
                </Grid>
                <Grid item xs={12} md={3}>
                    <InputLabelMui setValue={setHtTotalPosition} valueName={htTotalPosition} labelName={'HT Total Position'} />
                </Grid>
                <Grid item xs={12} md={3}>
                    <InputLabelMui setValue={setHtEmbBacking} valueName={htEmbBacking} labelName={'HT Embroidery Backing'} />
                </Grid>
            </Grid>
        </>
    )
}
export default HPage;