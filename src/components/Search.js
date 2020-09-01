import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Search =()=>{
    const [term,setTerm] = useState('programming');
    const [results,setResults] = useState([]);
    console.log("res are",results);
    
    useEffect(()=>{
        const search = async()=>{
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
                params:{
                    action:'query',
                    list:'search',
                    origin:'*',
                    format:'json',
                    srsearch:term
                }
            });
            setResults(data.query.search);
        }
        const timeoutId = setTimeout(()=>{
            if(term){
                search();}
        },1000)
       return(()=>{
        clearTimeout(timeoutId);
       })
    },[term]);

    const renderedList = results.map((result) =>{
        return(
            <div key={result.pageid} className="item">
               
                <div className="ui floated content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                    <a 
                    className="ui button"
                    href =  {`https://en.wikipedia.org?curid=${result.pageid}`}
                    > Go</a>
                </div>
                
            </div>
        )
    })

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>EnterSEarch Term</label>
                    <input 
                    value={term}
                    onChange={(e)=>setTerm(e.target.value)}
                    className="input"/>
                </div>
            </div>
    <div className="ui celled list"> {renderedList}</div>
            Search</div>
    )
}
export default Search
