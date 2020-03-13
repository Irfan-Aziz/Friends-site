import React from 'react';
import './Celebrity.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const Celebrity=(props)=>{
    const {name,email,phone,salary,img}=props.friend;
    console.log({img});

    return (
        
        <div className="celebrity">
            <div>
                <img  src={img} alt=""/>
            </div>
            <div className="details">
                <h4 className="name">Name: <span>{name}</span></h4>
                <h4>E-mail: {email}</h4>
                <h4>Cellphone no: {phone}</h4>
                <h4>Salary: ${salary}</h4>
                <button className="main-btn"
          onClick={()=>props.handleAddFriend(props.friend)}><FontAwesomeIcon icon={faPlusCircle } /> Add Friend</button>

            </div>
            
        </div>
    );
    };

export default Celebrity;