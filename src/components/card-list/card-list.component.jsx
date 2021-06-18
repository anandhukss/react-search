import React from 'react';
import Card from '../card/card-component';
import  './19.3 card-list.styles.css';


function CardList(props) {
    
    return (
        <div className="card-list">
            {
                props.data.map((monster,index)=>{
                    return <Card key={index} monster={monster}/>
                })
            }
        </div>
    )
}

export default CardList;
