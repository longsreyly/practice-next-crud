import ButtonDeleteCustomer from "@/app/customer/_component/ButtonDeleteCustomer";

const TableComponent = async ({ customerData }) => {
    console.log("customer data:", customerData);

    return (
        <main>
            <div class="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
                <table class="w-full table-fixed">
                    <thead>
                        <tr class="bg-gray-100">

                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>

                        </tr>
                    </thead>
                    <tbody class="bg-white">
                        {
                            customerData.map((data) => (
                                <tr key={data.id}>
                                    <th class="py-4 px-6 border-b border-gray-200">{data.customerName}</th>
                                    <td class="py-4 px-6 border-b border-gray-200 truncate">{data["address"]}</td>
                                    <td class="py-4 px-6 border-b border-gray-200">
                                        <span class="bg-green-500 text-white py-1 px-2 rounded-full text-xs">Active</span>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                            <ButtonDeleteCustomer customerId={data.id}/>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </main>
    )
}
export default TableComponent;