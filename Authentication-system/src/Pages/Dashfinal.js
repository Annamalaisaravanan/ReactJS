import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import BootStrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import {Modal,Button} from "react-bootstrap";

const Pagination = () =>{
    const [details,setdetails] = useState([]);

    const getdata = async () =>{
        try{
                const data = await axios.get("http://localhost:3001/dashboard"
                );
                setdetails(data.data);
        }catch(e){
            console.log(e)
        }
    };

    useEffect(()=>{
        getdata();
    },[]);


   const columns = [
       {dataField:"firstname", text:"First Name"},
       {dataField:"lastname", text:"Last Name"},
       {dataField:"email", text:" Email"},
       {dataField:"password", text:"Password"}
   ]

    return(
        <div>
            <div  style={{textAlign:'center'}}> <h3>Welcome To Dashboard</h3> </div>
           <div style={{textAlign:'center'}}>
           <button type="button" style={{color:'white'}} className="btn btn-warning">
             <Link to='/' style={{textDecoration:'none',color:'white'}}> Log Out</Link>
               </button></div>
            <h1>User Details</h1>
            <BootStrapTable 
            keyField="firstname"
            data={details}
            columns={columns}
            pagination={paginationFactory()}
            
            />
        </div>
    );
};

export default Pagination;