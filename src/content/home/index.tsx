import { Card, CardContent, Grid, Typography} from "@mui/material";
import SMTable from "./table";

function HomePage() {

    return (
        <>
            <Grid container
                  direction={'row'}
                  justifyContent={'center'}
                  alignItems={'stretch'}
                  spacing={2}>
                <Grid item xs={12} md={12}>
                    <Card>
                        <CardContent>
                            <Typography variant={'h3'} component={'h3'}>
                                Home
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={12}>
                    <SMTable/>
                </Grid>
            </Grid>
        </>
    )
}

export default HomePage;