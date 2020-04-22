import React from 'react';
import './Body.css';
import data from '../../fakeData/data';
import {useState} from 'react';
import Celebrity from '../Celebrty/Celebrity';
import Connect from '../Connect/Connect';
const Body = () => {
    
    const [friends,setFriends]=useState(data);
 
    const [connect,setConnect]=useState([]);
    const [condition,setCondition]=useState("add");
    var [remove,setRemove]=useState([]);
    
    console.log(connect);
    const handleAddFriend=(friend)=>{
        
        console.log("Clicked",friend);
        console.log(friend);
        
        const newConnection=[...connect,friend]; 
        setConnect(newConnection); 
       
       
        //console.log(newConnection)
        
    }
    const handleRemoveFriend=(friend)=>{
        console.log(friend);
       var a=connect.filter(b=>b!==friend)
        setConnect(a)
            

    }
        
        return (
            <div className="details-container">
               <div className="left-side">
               {
                    friends.map(friend=><Celebrity
                        handleAddFriend={handleAddFriend} 
                        condition={condition}
                     friend={friend}
                     connect={connect}
                     handleRemoveFriend={handleRemoveFriend}
                     
                      ></Celebrity>)
               }    
               </div>
               <div className="right-side">
                  <Connect connect={connect}
                  //remove={remove}
                           ></Connect>
               </div>
            </div>
        );
    };
    export default Body;
    