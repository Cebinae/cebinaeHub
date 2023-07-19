





import Contacts from "@/components/contactsCard";
import CloudsBg from './../../components/cloudsBg';
import Plane from "@/components/plane/plane";

export default function ContactsBg(){
    return(
        <main className="h-[100vh] w-[full] flex flex-row justify-center items-center overflow-hidden">
            
            <CloudsBg></CloudsBg>
            <Contacts></Contacts>

        </main>
    )
}