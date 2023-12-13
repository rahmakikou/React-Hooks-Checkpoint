import {Rating} from '@mui/material'
import { Button } from 'react-bootstrap'

const FilterMovie=({setSearch,setRate, search,rate})=>{
    const handleReset=()=>{
        setSearch('')
        setRate(0) 
    }
    return (
        <div className='three' style={{fontSize:'50px'}}>
<input style={{margin:'30px'}} value={search} type="text" onChange={(e)=>setSearch(e.target.value)}/>
<Rating style={{fontSize:'40px', margin:'40px'}} value={rate} onChange={(e)=>setRate(e.target.value)}/>
<Button style={{fontSize:'30px', margin:'40px', color:'pink', backgroundColor:'papayawhip'}} onClick={handleReset}> Reset </Button>

        </div>
    )
}

export default FilterMovie