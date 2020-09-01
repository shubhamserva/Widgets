import React,{useState} from 'react';

const Accordian = ({items})=>{

    const [activeIndex,setActiveIndex] = useState(null);
    const [count,setCount] = useState(0);

    const onTitleClick = (index) =>{
        setActiveIndex(index);
    }
    const buttonclicked = ()=>{
        setCount(count + 1);
    }

            const renderedItems = items.map((item,index)=>{
                return <div key = {item.title}>
                    <div className="title active" onClick={()=> onTitleClick(index)}>
                        <i className="dropdown icon"></i>
                        {item.title}
                    </div>
                    <div className="content active">
                        <p>{item.content}</p>

                        <button onClick = { ()=>buttonclicked()}>Click to inc count</button>
            <h3>{count}</h3>

                    </div>
                </div>
            })

        return <div className = "ui style accordian"> 
            {renderedItems  }
        </div>
}

export default Accordian