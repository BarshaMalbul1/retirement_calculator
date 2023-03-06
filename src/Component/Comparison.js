import ChartComponent from "../Component/ChartComponent";
import FormComponent from "../Component/FormComponent";
import TableComponent from "../Component/TableComponent";
import SummaryReport from "./SummaryReport";
import { useState } from "react";
import Header from "../Component/Header";
import { Container } from "@material-ui/core";

function Comparison()
{   const [formData,setFormData] = useState({});

    return(
        <div>
            <FormComponent setFormData={setFormData}></FormComponent>
            <br></br>
            {/* <ChartComponent></ChartComponent> */}
            <br></br>
            <summaryReport data={formData}></summaryReport>
            <TableComponent data={formData}></TableComponent>
        </div>
    )
}

export default Comparison;