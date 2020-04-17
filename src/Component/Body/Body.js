import React from 'react';
import './Body.css';
import data from '../../fakeData/data';
import {useState} from 'react';
import Celebrity from '../Celebrty/Celebrity';
import Connect from '../Connect/Connect';
const Body = () => {
    const [friends,setFriends]=useState(data);
    const [connect,setConnect]=useState([]);
    //console.log(data);
    const handleAddFriend=(friend)=>{
        console.log("Clicked");
        console.log(friend);
        const newConnection=[...connect,friend]; 
        setConnect(newConnection); 
        //console.log(newConnection)
        const add=document.getElementById("addBtn");
        add.style.display="none";
        const remove=document.getElementById("removeBtn");
        remove.style.display="block";
    }
    const handleRemoveFriend=(friend)=>{
        //console.log("Clicked remove");
        const currentFriend=connect.filter((e,val)=>{if(e!==friend.val){
        return e;}});
        setConnect(connect);
        console.log(currentFriend);
        const add=document.getElementById("addBtn");
        add.style.display="block";
        const remove=document.getElementById("removeBtn");
        remove.style.display="none";
    }
        
        return (
            <div className="details-container">
               <div className="left-side">
               {
                    friends.map(friend=><Celebrity
                        handleAddFriend={handleAddFriend}
                        handleRemoveFriend={handleRemoveFriend}
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
    