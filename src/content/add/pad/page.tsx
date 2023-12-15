import {Card, CardContent, Grid} from "@mui/material";
import {useEffect, useState} from "react";
import {InputLabelMui} from "../../muicomponent/inputlabel";

function PaPage() {

    const [pPosition, setPPosition] = useState<string | number | undefined>(undefined)
    const [pTotalSMV, setPTotalSMV] = useState<string | number | undefined>(undefined)

    useEffect(()=>{
        const storedata = sessionStorage.getItem('sm');
        if (storedata !==null) {
            const data = JSON.parse(storedata);
            if (data !==null && data.styleMasterCode) {
                setPPosition(data.padPrintPosition?.toString())
                setPTotalSMV(data.padPrintTotalSMV?.toString())
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
                        <InputLabelMui fullwidth={true} setValue={setPPosition} valueName={pPosition} labelName={'PadPrint Position'}/>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <InputLabelMui fullwidth={true} setValue={setPTotalSMV} valueName={pTotalSMV} labelName={'PadPrint Total SMV'}/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default PaPage;