import React from 'react'

const Tabs = (props) =>{

    const{tabArray,  activeTab, setActiveTab} = props;

    const styled = (indexFromBelow) =>{
        if(activeTab === indexFromBelow){
            return "activeTabStyle"
        }
        else{
            return "inactiveTabStyle"
        }
    }

    return(
        <div style={{display:"flex", justifyContent:"center", padding:'2px', margin:'5px'}}>
            {
                tabArray.map((item, index)=>(
                    <p
                    className={`${styled(index)}`}
                    onClick={()=>setActiveTab(index)}
                    style={{margin:'5px', padding: '5px'}}
                    >
                        {item.label}
                    </p>
                ))
            }
        </div>
    )
}

export default Tabs