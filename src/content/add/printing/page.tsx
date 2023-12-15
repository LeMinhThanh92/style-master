import {useEffect, useState} from "react";
import {Card, CardContent, Grid} from "@mui/material";
import {InputLabelMui} from "../../muicomponent/inputlabel";

function PrPage() {
    const [pPosition, setPPosition] = useState<string | number | undefined>(undefined)
    const [pPrinter, setPPrinter] = useState<string | number | undefined>(undefined)
    const [pItem, setPItem] = useState<string | number | undefined>(undefined)

    useEffect(()=>{
        const storedata = sessionStorage.getItem('sm');
        if (storedata !==null) {
            const data = JSON.parse(storedata);
            if (data !==null && data.styleMasterCode) {
                setPPosition(data.screenPrintPosition?.toString())
                setPPrinter(data.screenPrintPrinter?.toString())
                setPItem(data.screenPrintItem?.toString())
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
                        <InputLabelMui fullwidth={true} setValue={setPPosition} valueName={pPosition} labelName={'Screen Pr. Position'}/>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <InputLabelMui fullwidth={true} setValue={setPPrinter} valueName={pPrinter} labelName={'Screen Pr. Printer'}/>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <InputLabelMui fullwidth={true} setValue={setPItem} valueName={pItem}
                                       labelName={'Screen Pr. Fabric Item/PartNo'}/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default PrPage;