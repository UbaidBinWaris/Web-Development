import React, { useEffect , useState } from "react";

const Card = () => {
    const [card , setcard] = useState([])

    const fechdata = async () =>{
        let a= await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await a.json();
        setcard(data);
        console.log(data);
    }
    useEffect(() =>{
        fechdata();
    },[])
    return (
        <div className="container">
            card.map((card) =>{
                return(
                    <div key = {card.id}className="card">
                        <h3>{card.title}</h3>
                        <p>{card.body}</p>
                    </div>
                )
            })
        </div>
    );
  };
  
  export default Card;


