import React, {useState} from 'react';
import Accordian from './components/Accordian';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
    {
        title:'what is react',
        content:'kuch nhi'
    },
    {
        title:'kyo padh raha h',
        content:'naukri k liye'
    },
    {
        title:'samaj aa rha h',
        content:'haa bdya'
    }
]
const options = [
    {
        label:'REd',
        value:'red'
    },
    {
        label:'BLUE',
        value:'blue'
    },
    {
        label:'YELLOW',
        value:'yellow'
    }
]


export default () =>{
     const [selected,setSelected] = useState(options[0]);
    // const [showDropdown,setShowDropdown] = useState(true);
    return (
        <div>
            <Header/>
           <Route path='/'>
               <Accordian items={items} />
           </Route>
           <Route path='/list'>
               <Search/>
           </Route>
           <Route path='/dropdown'>
                <Dropdown  options={options}  selected = {selected}  onSelectedChange = {setSelected} label={'Select a color'}   />
           </Route>
           <Route path='/translate'>
               <Translate />
           </Route>
        </div>

        
    )
}