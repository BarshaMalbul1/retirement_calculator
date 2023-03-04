import { useState } from "react";
import Header from "../Component/Header";
import { Container } from "@material-ui/core";
import Comparison from "../Component/Comparison";
import {Grid} from "@material-ui/core";
function ComparisonPage()
{   const [formData,setFormData] = useState({});

    return(
        <Container>
            <Header></Header>
            <div className='rowC'>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, m:5}}>
                    <Grid item xs={6}>
                        <Comparison></Comparison>
                    </Grid>
                    <Grid item xs={6}>
                        <Comparison></Comparison>
                    </Grid>
                </Grid>
            </div>                    
        </Container>
    )
}

export default ComparisonPage;