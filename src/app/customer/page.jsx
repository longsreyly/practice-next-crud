import TableComponent from "@/components/TableComponent";
import { getAllCustomerService } from "@/service/customer.service";
import FormComponent from "./_component/FormComponent";

const CustomerComponent = async () => {
    const customerData = await getAllCustomerService();
    return(
        <main className=" mx-10 mt-10 grid-cols-2">
           <div>
           <h1 className="text-center mb-[30px] font-bold text-red-400">Cutomers Information</h1>
            <TableComponent customerData = {customerData}/>

           </div>
         <div>
         <h1 className="text-center mb-[30px] font-bold text-red-400 pt-20">Form User Customers</h1>
            <FormComponent/>
         </div>

        </main>
    )
}
export default CustomerComponent;