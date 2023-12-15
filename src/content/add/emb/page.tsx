import {Card, CardContent, Grid} from "@mui/material";
import {useEffect, useState} from "react";
import {InputLabelMui} from "../../muicomponent/inputlabel";

function EPage() {

    const [embPosition, setEmbPosition] = useState<string | number | undefined>(undefined)
    const [embBadgeLogo, setEmbBadgeLogo] = useState<string | number | undefined>(undefined)
    const [embTotalStitch, setEmbTotalStitch] = useState<string | number | undefined>(undefined)
    const [embTotalSMV, setEmbTotalSMV] = useState<string | number | undefined>(undefined)

    useEffect(()=>{
        const storedata = sessionStorage.getItem('sm');
        if (storedata !==null) {
            const data = JSON.parse(storedata);
            if (data !==null && data.styleMasterCode) {
                setEmbPosition(data.embPosition?.toString())
                setEmbBadgeLogo(data.embBadgeLogo?.toString())
                setEmbTotalStitch(data.embTotalStitch?.toString())
                setEmbTotalSMV(data.embTotalSMV?.toString())
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
                        <InputLabelMui fullwidth={true} setValue={setEmbPosition} valueName={embPosition} labelName={'EMB Position'}/>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <InputLabelMui fullwidth={true} setValue={setEmbBadgeLogo} valueName={embBadgeLogo}
                                       labelName={'EMB Badge Logo'}/>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <InputLabelMui fullwidth={true} setValue={setEmbTotalStitch} valueName={embTotalStitch}
                                       labelName={'EMB Total Stitch'}/>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <InputLabelMui fullwidth={true} setValue={setEmbTotalSMV} valueName={embTotalSMV} labelName={'EMB Total SMV'}/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default EPage;