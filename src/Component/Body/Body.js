import React from 'react';
import './Body.css';
import data from '../../fakeData/data';
import {useState} from 'react';
import Celebrity from '../Celebrty/Celebrity';
import Connect from '../Connect/Connect';
const Body = () => {
    const [friends,setFriends]=useState(data);
    const [connect,setConnect]=useState([]);
    console.log(data);
    const handleAddFriend=(friend)=>{
        console.log("Clicked",friend);
        const newConnection=[...connect,friend]; 
        setConnect(newConnection); 
    }
        
        return (
            <div className="details-container">
               <div className="left-side">
               {
                    friends.map(friend=><Celebrity
                        handleAddFriend={handleAddFriend}
                     friend={friend} ></Celebrity>)
               }    
               </div>
               <div className="right-side">
                  <Connect connect={connect}></Connect>
               </div>
            </div>
        );
    };
    export default Body;
    