import React from "react";

const ShowBox = (props) =>{
    
    const {boxColorArr} = props
return (
    <div>
        {
        boxColorArr.map((box, index) => (
            <div key={index} style={{ 
                display: "inline-block",
                margin: "10px",
                height: box.size, 
                width: box.size, 
                backgroundColor: box.color
                }}>
            </div>
        ))
        }
    </div>
    );
}

export default ShowBox