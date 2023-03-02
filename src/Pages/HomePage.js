import ChartComponent from "../Component/ChartComponent";
import FormComponent from "../Component/FormComponent";
import TableComponent from "../Component/TableComponent";
import { useState } from "react";

function Homepage()
{   const [formData,setFormData] = useState({
    currentAge:20
});
    

    return(
        <div>
            <h1>RETIREMENT CALCULATOR</h1>
            {/* <Navbar> */}
            <h1>{formData.currentAge??0}</h1>
            <FormComponent setFormData={setFormData}></FormComponent>
            <br></br>
            {/* <ChartComponent></ChartComponent> */}
            <br></br>
            <TableComponent></TableComponent>
        </div>
    )
}

export default Homepage;