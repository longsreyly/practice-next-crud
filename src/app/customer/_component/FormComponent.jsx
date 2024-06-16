import { handlerCustomerInput } from "@/app/action/customerActions";
const FormComponent = () => {

    return (
        <main id="content" role="main" class="w-full  max-w-md mx-auto p-6">
            <div class="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-300">
                <div class="p-4 sm:p-7">
                    <div class="text-center">
                        <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">Information Customer</h1>
                    </div>
                    <div class="mt-5">
                        <form action={handlerCustomerInput}>
                            <div class="grid gap-y-4">
                                <div>
                                    <label
                                        htmlfor="customerName"
                                        class="block text-sm font-bold ml-1 mb-2 dark:text-white">Customer Name</label>
                                    <div class="relative">
                                        <input
                                            id="customerName"
                                            name="customerName"
                                            type="text"
                                            placeholder="customer name"
                                            className="input input-bordered input-primary w-full max-w-xs" />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlfor="address"
                                        id="address"
                                        className="block text-sm font-bold ml-1 mb-2 dark:text-white">Customer address</label>
                                    <div class="relative">
                                        <input
                                            id="address"
                                            name="address"
                                            type="text"
                                            placeholder="customer address"
                                            className="input input-bordered input-primary w-full max-w-xs" />
                                    </div>
                                </div>
                                <button type="submit" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md max-w-xs border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Add Customer</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default FormComponent;