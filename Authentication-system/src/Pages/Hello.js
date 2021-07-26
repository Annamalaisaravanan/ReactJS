import React from 'react';
import {Link} from 'react-router-dom';


function Hello(){
        return(
            <div>
            <h3>Hello World</h3>
            <span><Link style={{textDecoration:'none',fontSize:'20px'}} to='/signup'><a>Signup</a></Link></span>
           
            <span><Link style={{textDecoration:'none',
           margin:'20px', fontSize:'20px'
        }} to='/login'><a>Login</a></Link></span>
            </div>
        )
}

export default Hello;
