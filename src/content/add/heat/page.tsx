import {Card, CardContent, Grid} from "@mui/material";
import {InputLabelMui} from "../../muicomponent/inputlabel";
import {useEffect, useState} from "react";

function HPage() {

    const [htSmall, setHtSmall] = useState<number | string | undefined>(undefined)
    const [htBig, setHtBig] = useState<number | string | undefined>(undefined)
    const [htTotalPosition, setHtTotalPosition] = useState<number | string | undefined>(undefined)
    const [htEmbBacking, setHtEmbBacking] = useState<number | string | undefined>(undefined)


    useEffect(()=>{
        const storedata = sessionStorage.getItem('sm');
        if (storedata !==null) {
            const data = JSON.parse(storedata);
            if (data !==null && data.styleMasterCode) {
                setHtSmall(data.htSmall?.toString())
                setHtBig(data.htBig?.toString())
                setHtTotalPosition(data.htTotalPosition?.toString())
                setHtEmbBacking(data.htEmbroideryBacking?.toString())
            }
        }
    },[sessionStorage.getItem('sm')])


    return (

        <Card>
            <CardContent>
                <Grid container
                      direction={'row'}
                      justifyContent={'left'}
                      alignItems={'stretch'}
                      spacing={2}>
                    <Grid item xs={12} md={3}>
                        <InputLabelMui fullwidth={true} setValue={setHtSmall} valueName={htSmall} labelName={'HT Small'}/>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <InputLabelMui fullwidth={true} setValue={setHtBig} valueName={htBig} labelName={'HT Big'}/>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <InputLabelMui fullwidth={true} setValue={setHtTotalPosition} valueName={htTotalPosition}
                                       labelName={'HT Total Position'}/>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <InputLabelMui fullwidth={true} setValue={setHtEmbBacking} valueName={htEmbBacking}
                                       labelName={'HT Embroidery Backing'}/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default HPage;