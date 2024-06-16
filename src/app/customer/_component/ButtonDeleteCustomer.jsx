'use client';

import { deleteCustomerServiceAction } from "@/app/action/customerActions";
import Link from "next/link";

const ButtonDeleteCustomer = ({ customerId }) => {
    return (
        <div>

            <button class="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">Edit</button>
            <button onClick={() => deleteCustomerServiceAction(customerId)}
                class="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">Delete</button>
        </div>
    )
}
export default ButtonDeleteCustomer;