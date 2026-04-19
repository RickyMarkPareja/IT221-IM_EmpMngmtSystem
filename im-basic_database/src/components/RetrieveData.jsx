import { useEffect, useState } from "react"; 
 
function RetrieveData() { 
    /*
    const [contacts, setContacts] = useState([]); 
 
    useEffect(() => { 
        fetch("http://localhost/cv-api/getContacts.php") 
            .then(res => res.json()) 
            .then(data => setContacts(data)); 
    }, []); 
    */

    return ( 
        <section className="card"> 
            <h2>Retrieve Data from Database</h2> 
            <p>Employee Report --</p>
            
        </section> 
    ); 
} 
 
export default RetrieveData; 


            /*
            <ul> 
                {contacts.map(contact => ( 
                    <li key={contact.id}>{contact.name}</li> 
                ))} 
            </ul> 
            */