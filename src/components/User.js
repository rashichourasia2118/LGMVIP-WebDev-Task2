import React,{useEffect,useState} from 'react'
import './loader.css';
import {UserDetailPage,CrdDetail,List,Employee,EmployeeName,Card,Age ,Image } from './UserCardDesign'
// import {GoDash} from 'react-icons/go'
export default function User() { 
    const [error,setError]=useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const timeout=setTimeout(()=>{
            fetch("https://reqres.in/api/users?page=1   ")
            .then(res=>{
                if(!res.ok){
                throw Error("couldn't fetch the data..")
            }
                return res.json()})
            .then(
                (data)=>{
                    setIsLoading(true);
                    setItems(data.data);
    
                }
            )
            .catch((e)=>{
               setIsLoading(true);
               setError(error); 
            })
        },5000);
        return ()=> clearTimeout(timeout);
        
      
    }, [error])
    if(error){
        return<div>Error:{error.message}</div>
    }else if(!isLoading){
        return(<div class="sk-chase">
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
      </div>
      )
    }else{
        return (
       
            <CrdDetail>
            <UserDetailPage>
                User Details
            </UserDetailPage>
            <List>
              {items.map((item) =>  {
                  return(
                    <Employee key={item.id}>
                    <Card>
                            <Image src={item.avatar} alt={item.name}></Image> 
                            {/* <Id>{item.id}<Dash><GoDash /></Dash></Id> */}
                            <EmployeeName>{item.first_name} {item.last_name} </EmployeeName>
                            <Age> {item.email}</Age>
                          
                            </Card>       
    
                        </Employee>         
                  )
                    
                   
                })}
                </List>
            </CrdDetail>
        )
    }
   
}
