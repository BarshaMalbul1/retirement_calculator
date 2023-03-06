import ChartComponent from "../Component/ChartComponent";
import FormComponent from "../Component/FormComponent";
import TableComponent from "../Component/TableComponent";
import SummaryReport from "../Component/SummaryReport";
import { useState } from "react";
import Header from "../Component/Header";
import { Container } from "@material-ui/core";

function Homepage()
{   const [formData,setFormData] = useState([]);

    return(
        <Container>
            <Header></Header>
            {/* <Navbar> */}
            {/* console.log({formData.computed}); */}
            <br></br>
            <FormComponent setFormData={setFormData}></FormComponent>
            <br></br>
            <SummaryReport data={formData??[]}></SummaryReport>
           
            {/* <ChartComponent data={formData.computed??[]}></ChartComponent> */}
            <br></br>
            {/* <SummaryReport data={formData}></SummaryReport> */}
            <TableComponent data={formData.computed??[]}></TableComponent>
        </Container>
    )
}

export default Homepage;