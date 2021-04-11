

import React,{useState} from 'react'
import Person from '../Person/Person';
import './Persons.css';

export default function Persons() {

    const [persons,setpersons]=useState({
                Persons:[
                 {name:"sai1",id:26},
                 {name:"sai2",id:27},
               {name:"sai3",id:28},
                            
                  ],
                 
            })

           const setuserinput=(e,id)=>{
               const personindex=persons.Persons.findIndex(item=>{
                   return item.id === id
               })
               const personscopy=[...persons.Persons];
               const personcopy=personscopy[personindex];
               personcopy.name=e.target.value;
               setpersons({Persons:personscopy});
            }
            
         const deletselthandler=(id)=>{
            const personindex=persons.Persons.findIndex(item=>{
                return item.id === id
            })
               const personscopy=[...persons.Persons];
                 
             personscopy.splice(personindex,1)
            setpersons({Persons:personscopy})

         }
                
    const [showpersons, setshowpersons] = useState(false);
   
   
    let  normalmsg="click this button to see persons";

    if( persons.Persons.length<=0){
        normalmsg= "persons are deleted";

       }
   
    if(showpersons){
        normalmsg=(
            persons.Persons.map((item) =>{
                return <Person 
                key={item.id}
                delet={()=>deletselthandler(item.id)}
                name={item.name}
                inputtext={(event)=>setuserinput(event,item.id)}
                />
            })
      );
        }
      

    
    return (
        <div className="Persons">
        <button onClick={()=>setshowpersons(!showpersons)}>show persons</button>
        <div className="Personslist">
           
           {normalmsg}
            
        </div>
        </div>
    )
}
