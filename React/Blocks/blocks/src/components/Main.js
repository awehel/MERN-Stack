const Main = (props)=>{

    const divStyle = {
        height: "600px",
        width: "900px",
        background: "#e06666",
        margin: "15px",
        display: "inline-block",
        verticalAlign: 'top'
    };

    return(
        <div style={divStyle}>
            {props.children}
        </div>
    )
}

export default Main