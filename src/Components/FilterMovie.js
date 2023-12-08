import {Rating} from '@mui/material'
import { Button } from 'react-bootstrap'

const FilterMovie=({setSearch,setRate, search,rate})=>{
    const handleReset=()=>{
        setSearch('')
        setRate(0) 
    }
    return (
        <div>
            <br/>
<input value={search} type="text" onChange={(e)=>setSearch(e.target.value)}/>
<br/> 
<br/> 
<Rating value={rate} onChange={(e)=>setRate(e.target.value)}/>
<br/>
<br/>
<Button onClick={handleReset}> Reset </Button>

        </div>
    )
}

export default FilterMovie