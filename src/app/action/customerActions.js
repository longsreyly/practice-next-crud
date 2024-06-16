"use server"

import { deleteCustomerService, insertCustomerService } from "@/service/customer.service";
import { revalidateTag } from "next/cache";


//Insert Customer Service
export async function handlerCustomerInput(customerInput) {
    "use server";
    console.log('Customer Innfo', customerInput);
    // Define new Customer
    const newCustomer = {
        customerName: customerInput.get("customerName"),
        address: customerInput.get("address"),
    };
    //Calling insertCustomerServices
    await insertCustomerService(newCustomer)
    revalidateTag('customer')
}


//Delete Customer Action
export async function deleteCustomerServiceAction(customerId) {

await deleteCustomerService(customerId);
//Calling revalidate
revalidateTag('customer')
}