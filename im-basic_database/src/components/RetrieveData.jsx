import { useEffect, useState } from "react"; 
 
function RetrieveData() { 

    const [data, setData] = useState([]); 
 
    useEffect(() => { 
        fetch("http://localhost/im-api/getdata.php") 
            .then(res => res.json()) 
            .then(data => setData(data)); 
    }, []); 
    

    return ( 
        <section className="card"> 
            <h2>Retrieve Data from Database</h2> 
            <p>Employee Report --</p>

            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Job Title</th>
                        <th>Salary</th>
                    </tr>
                </thead>

                <tbody>
                    {Array.isArray(data) && data.length > 0 ? (
                        data.map((dept, i) =>
                            Array.isArray(dept.employees) ? (
                                dept.employees.map((emp, j) => (
                                    <tr key={i + "-" + j}>
                                        <td>{emp.first_name}</td>
                                        <td>{emp.last_name}</td>
                                        <td>{emp.job_title}</td>
                                        <td>{emp.salary}</td>
                                    </tr>
                                ))
                            ) : null
                        )
                    ) : (
                        <tr>
                            <td colSpan="4">No data found</td>
                        </tr>
                    )}
                </tbody>
            </table>
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