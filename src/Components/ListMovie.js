import CardMovie from "./CardMovie"
const ListMovie=({movies,search,rate})=>{

var x = movies.filter((el,i,t)=> el.title.toUpperCase().includes(search.toUpperCase()) && el.rating>=rate)
    return (

        <div className="LISTA">
 { 
        x.length === 0 ? <h1> Movie Not Found</h1>: x.map((el,i,t)=> <CardMovie el={el}/>)
} 
        </div>
    ) 
}

export default ListMovie 