import {Card, CardContent, Grid} from "@mui/material";
import {useState} from "react";
import {InputLabelMui} from "../../muicomponent/inputlabel";

function SaPage() {

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
                            <InputLabelMui setValue={setCuttingSMV} labelName={'Cutting SMV'} valueName={cuttingSMV}/>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <InputLabelMui setValue={setSewing} labelName={'Sewing'} valueName={sewing}/>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <InputLabelMui setValue={setInspect} labelName={'Inspect'} valueName={inspect}/>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <InputLabelMui setValue={setPress} labelName={'Press'} valueName={press}/>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <InputLabelMui setValue={setFinishing} labelName={'Finishing'} valueName={finishing}/>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <InputLabelMui setValue={setTotalSewIPFSMV} labelName={'Total Sew IPF SMV'} valueName={totalSewIPFSMV}/>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default SaPage;