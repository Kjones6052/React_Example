// Import
import { useParams,  useNavigate } from "react-router-dom";
import CustomerForm from "./CustomerForm";

function CustomerFormWrapper() {
    let params = useParams() // Allows use of params to pass into the form
    let navigate = useNavigate() // useNavigate is good for dynamic destinations, param required

    return <CustomerForm params={params} navigate={navigate} />
}

// Export
export default CustomerFormWrapper