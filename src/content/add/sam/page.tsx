import {Card, CardContent, Grid} from "@mui/material";
import {useEffect, useState} from "react";
import {InputLabelMui} from "../../muicomponent/inputlabel";

function SaPage() {

useEffect(()=>{
    const storedata = sessionStorage.getItem('sm');
    if (storedata !==null) {
        const data = JSON.parse(storedata);
        if (data !==null && data.styleMasterCode) {
            setCuttingSMV(data.cuttingSMV?.toString())
            setSewing(data.sewing?.toString())
            setInspect(data.inspect?.toString())
            setPress(data.press?.toString())
            setFinishing(data.finishing?.toString())
            setTotalSewIPFSMV(data.totalSIPFSMV?.toString())
        }
    }
},[sessionStorage.getItem('sm')])

    const [cuttingSMV, setCuttingSMV] = useState<number|undefined|string>(undefined)
    const [press, setPress] = useState<number|undefined|string>(undefined)
    const [sewing, setSewing] = useState<number|undefined|string>(undefined)
    const [finishing, setFinishing] = useState<number|undefined|string>(undefined)
    const [inspect, setInspect] = useState<number|undefined|string>(undefined)
    const [totalSewIPFSMV, setTotalSewIPFSMV] = useState<number|undefined|string>(undefined)

    return (
        <>
            <Card>
                <CardContent>
                    <Grid container
                          direction={'row'}
                          justifyContent={'left'}
                          alignItems={'stretch'}
                          spacing={2}>
                        <Grid item xs={12} md={3}>
                            <InputLabelMui fullwidth={true} setValue={setCuttingSMV} labelName={'Cutting SMV'} valueName={cuttingSMV}/>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <InputLabelMui fullwidth={true} setValue={setSewing} labelName={'Sewing'} valueName={sewing}/>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <InputLabelMui fullwidth={true} setValue={setInspect} labelName={'Inspect'} valueName={inspect}/>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <InputLabelMui fullwidth={true} setValue={setPress} labelName={'Press'} valueName={press}/>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <InputLabelMui fullwidth={true} setValue={setFinishing} labelName={'Finishing'} valueName={finishing}/>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <InputLabelMui fullwidth={true} setValue={setTotalSewIPFSMV} labelName={'Total Sew IPF SMV'} valueName={totalSewIPFSMV}/>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default SaPage;