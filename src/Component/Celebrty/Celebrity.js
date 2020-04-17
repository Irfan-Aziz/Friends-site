import React from 'react';
import './Celebrity.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'

const Celebrity=(props)=>{
    const {name,email,phone,salary,img}=props.friend;
    //console.log({img});

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
               
                <button className="main-btn" id="addBtn"
          onClick={()=>props.handleAddFriend(email)}><FontAwesomeIcon icon={faPlusCircle } /> Add Friend</button>
                <button className="main-btn remove" id="removeBtn"
                onClick={()=>props.handleRemoveFriend(props.friend)}><FontAwesomeIcon icon={faMinusCircle}/>Remove Friend</button>
                </div>
            </div>
            
       
    );
    };

export default Celebrity;