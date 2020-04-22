import React from 'react';
import './Celebrity.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import {useState} from 'react';
import data from '../../fakeData/data';

const Celebrity=(props)=>{
    //console.log(props);
    const {name,email,phone,salary,img}=props.friend;
    
    
    const [connect,setConnect]=useState([]);
    const [condition,setCondition]=useState("add");
    /*const handleAddFriend=(friend)=>{
        console.log("Clicked");
        console.log(friend);
        if(condition==="add"){
        const newConnection=[...connect,friend]; 
        setConnect(newConnection); }
        //console.log(newConnection)
        
    }*/
    const handleFriend=()=>{
       
        
       
        if(condition==='add'){
            props.handleAddFriend(props.friend)
            console.log(props.connect)
            setCondition("remove");
        }else{
            props.handleRemoveFriend(props.friend)
            console.log(connect)
            //console.log(props.connect)
            setCondition("add");
        }
        
        
    }
    
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
          onClick={()=>handleFriend()}><FontAwesomeIcon icon={faPlusCircle } />{condition}</button>
                
                </div>
            </div>
            
       
    );
    };

export default Celebrity;