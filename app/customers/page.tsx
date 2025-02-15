
import { AddCustomerForm } from "@/components/add-customer-form"
import { CustomerList } from "@/components/customer-list"

export default function CustomersPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-semibold text-white">Customers</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <CustomerList />
                <AddCustomerForm />
            </div>
        </div>
    )
}