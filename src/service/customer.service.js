

//Get All Customer
export const getAllCustomerService = async () => {
    const res = await fetch (
        "https://655c2c57ab37729791a9f8b0.mockapi.io/api/customer",{
            next: {tags:['customer']},
            cache: 'no-store',
            next: {tags: ['customer']}
        }
    );
    const data = await res.json();
    return data;
}

//Insert Customer
export const insertCustomerService = async (newCustomer) => {
    const res = await fetch (
        "https://655c2c57ab37729791a9f8b0.mockapi.io/api/customer",{
            method: "POST",
            body: JSON.stringify(newCustomer),
            headers: {
                "Content-Type" : "application/json",

        }
        }
        
    );
    const data = await res.json();
    return data;

}

//Delete Customer Service
export const deleteCustomerService = async (customerId) => {
    const res = await fetch (`https://655c2c57ab37729791a9f8b0.mockapi.io/api/customer/${customerId}`,
    {
        method : 'DELETE',
    }
    
); 
    const data = res.json();
    return data;

}

