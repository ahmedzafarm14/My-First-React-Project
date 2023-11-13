import React from 'react'

export const Button = ({ ID, style }) => 
{
    function stylee() 
    {
        if (ID === "LogIn" || ID==="Get Started" || ID==="View More") 
        {
            return {
                marginLeft: "10px",
                width: "150px",
                height: "56px",
                borderRadius: "6px",
                background: "#74BDE0",
                color: "White",
                fontFamily:"Poppins",
                fontSize:"20px",
                fontWeight: "500",
            }

        }
        else if(ID==="Get Quote" || ID==="Live Chat" || ID==="Chat With Us") 
        {
            return {
                width: "150px",
                height: "56px",
                borderRadius: "6px",
                border: "1px solid #74BDE0",
                color: "#74BDE0",
                fontFamily:"Poppins",
                fontSize:"20px",
                fontWeight: "500",
                marginLeft:"15px"
            }

        }
    }
    return (
        <div>
            <button style={{ ...style, ...stylee() }}>{ID}</button>
        </div>
    )
}
export default Button