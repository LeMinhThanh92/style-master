import {useEffect, useState} from "react";
import {Card, CardContent, Grid} from "@mui/material";
import {InputLabelMui} from "../../muicomponent/inputlabel";

function SuPage() {
    const [pSPosition, setPSPosition] = useState<string | number | undefined>(undefined)
    const [pSPrinter, setPSPrinter] = useState<string | number | undefined>(undefined)
    const [pSItem, setPSItem] = useState<string | number | undefined>(undefined)

    useEffect(()=>{
        const storedata = sessionStorage.getItem('sm');
        if (storedata !==null) {
            const data = JSON.parse(storedata);
            if (data !==null && data.styleMasterCode) {
                setPSPosition(data.sublimationPosition?.toString())
                setPSPrinter(data.sublimationPrinter?.toString())
                setPSItem(data.screenSublimationItem?.toString())
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
                        <InputLabelMui fullwidth={true} setValue={setPSPosition} valueName={pSPosition}
                                       labelName={'Sublimation Position'}/>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <InputLabelMui fullwidth={true} setValue={setPSPrinter} valueName={pSPrinter} labelName={'Sublimation Printer'}/>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <InputLabelMui fullwidth={true} setValue={setPSItem} valueName={pSItem}
                                       labelName={'Sublimation Fabric Item/PartNo'}/>
                    </Grid>

                </Grid>
            </CardContent>
        </Card>
    )
}

export default SuPage;