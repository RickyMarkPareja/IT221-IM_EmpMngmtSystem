
import { useState } from "react";


function InputData() {
    
    const [fname, setfname] = useState(""); 
    const [lname, setlname] = useState(""); 
    const [hdate, sethdate] = useState(""); 
    const [jtitle, setjtitle] = useState(""); 
    const [salary, setsalary] = useState(""); 

    
    function handleSubmit(e) { 
        e.preventDefault();     

        const data = {
            city: "CagayanDeOro",
            department_name: "IT Department",
            employees: [
                {
                    id: Date.now(),
                    first_name: fname,
                    last_name: lname,
                    hire_date: hdate,
                    job_title: jtitle,
                    salary: Number(salary)
                }
            ]
        }

        fetch("http://localhost/im-api/insertdata.php", { 
            method: "POST", 
            headers: { 
                "Content-Type": "application/json" 
            }, 
            body: JSON.stringify(data) 
        }) 
        .then(res => res.json()) 
        .then(data => { 
            alert(data.message || "Employee Saved!");
        }); 
    }     


    return (   
        <section className="card"> 
            <h2>Input Data to Database</h2> 
            <form onSubmit={handleSubmit}> 
                <p>Employee Details --</p>

                <p>First Name:</p>
                    <input 
                    type="text" id="fname" placeholder="Murdoch"
                    value={fname} 
                    onChange={(e) => setfname(e.target.value)} 
                    />

                <p>Last Name:</p>
                    <input 
                    type="text" id="lname" placeholder="Byrnes"
                    value={lname} 
                    onChange={(e) => setlname(e.target.value)} 
                    />

                <p>Hire Date:</p>
                    <input 
                    type="date" id="hdate" placeholder="10-11-1915"
                    value={hdate} 
                    onChange={(e) => sethdate(e.target.value)} 
                    />

                <p>Job Title:</p>
                    <input 
                    type="text" id="jtitle" placeholder="Cashier"
                    value={jtitle} 
                    onChange={(e) => setjtitle(e.target.value)} 
                    />

                <p>Salary:</p>
                    <input 
                    type="text" id="salary" placeholder="9000"
                    value={salary} 
                    onChange={(e) => setsalary(e.target.value)} 
                    /> <br/>

                <button type="submit" id="submitBtn">Save to Database</button>
            </form> 
        </section>
        
    );
}

export default InputData;


/*
Create database in phpmyadmin
CREATE TABLE departments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  city VARCHAR(100),
  department_name VARCHAR(100),
  employees JSON
);
*/