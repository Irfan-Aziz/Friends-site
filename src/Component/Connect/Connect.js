import React from 'react';
import './Connect.css';

const Connect = (props) => {
    const connect=props.connect;
    let total=0;
    for(let i=0;i<connect.length;i++){
        const amount=connect[i];
        total=total+amount.salary;
    }
    return (
        <div className="connection-details">
            <h4>Connection Details</h4>
    <h5>Total Connection: <span>{connect.length}</span></h5>
    <h5>Combined Salary: <span>${total}</span></h5>
        </div>
    );
};

export default Connect;