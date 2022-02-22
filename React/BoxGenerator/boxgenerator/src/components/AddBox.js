import React, {useState} from 'react'

const AddBox = (props) =>{

    const{boxColorArr, setBoxColorArr} = props

    const [color, setColor] = useState("")

    const [size, setSize] = useState("")

    const handleForm = (e) =>{
        e.preventDefault()
        setBoxColorArr([...boxColorArr, {color: color, size: size+"px"}])
        setColor("")
        setSize("")
    }

    return(
        <div>
            <form onSubmit={(e)=>handleForm(e)}>
                <div>
                    <label>Color: </label>
                    <input
                        type="text"
                        name="color"
                        onChange={(e)=>setColor(e.target.value)}
                        value={color}
                    />
                </div>
                <div>
                    <label>Size: </label>
                    <input
                        type="number"
                        name = "size"
                        onChange={(e)=>setSize(e.target.value)}
                        value={size}
                    >
                    
                    </input>
                </div>
                <button>Add</button>
            </form>
        </div>
    )
}


export default AddBox