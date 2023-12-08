import NavMovie from './Components/NavMovie';
import './App.css';
import ListMovie from './Components/ListMovie';
import { useState } from 'react'; 
import AddMovie from './Components/AddMovie';
import FilterMovie from './Components/FilterMovie';

function App() {
  const [movies,setMovies]= useState(
    [
    { title : 'Harry Potter Saga', 
    description: 'The greatest magical story ever told : the boy who lived', 
    posterURL: 'https://resize.elle.fr/portrait/var/plain_site/storage/images/loisirs/series/harry-potter-l-annonce-que-tous-les-fans-attendaient-avec-impatience-3797929/90633353-1-fre-FR/Harry-Potter-l-annonce-que-tous-les-fans-attendaient-avec-impatience.jpg',
     rating: ' 4', 
     id: Math.random()
    },
    {
            title : "Parmi les ruines", 
            description:'Histoire éternelle imaginée par Youssef Sebai avec Faten Hamama dans le rôle titre' , 
             posterURL: 'https://media0033.elcinema.com/uploads/_315x420_9f5c4c3867749ecc6fce45a8f3d4d10242f7b2ef67dd82a41f6587c805438d17.jpg', 
             rating: '5', 
             id: Math.random(), 
        },
    
    {
            title : 'Doctor Zhivago', 
            description:'Epic adaptation with the magistral Omar Sherif', 
             posterURL:  'https://s3.amazonaws.com/static.rogerebert.com/uploads/review/primary_image/reviews/doctor-zhivago-1995/EB19950407REVIEWS504070303AR.jpg', 
             rating: ' 4.5', 
             id: Math.random(), 
        } , 
        {
            title : 'Kabhi Khushi Kabhie Gham...', 
            description : 'It tells the story of an Indian multimillionaire family with multiple love stories and killer songs', 
            posterURL: ' https://upload.wikimedia.org/wikipedia/en/4/4d/Kabhi_Khushi_Kabhie_Gham..._poster.jpg', 
            rating : '5', 
            id: Math.random(), 
        }
    ]
    )
    const [search, setSearch] = useState('')
    const [rate, setRate] = useState(0) 
  return (
    <div>
       <NavMovie/> 
       <br/>
       <br/>
       <AddMovie movies={movies} setMovies={setMovies}/> 
      <FilterMovie setSearch={setSearch} setRate={setRate} search={search} rate={rate}/> 
       <br/>
       <br/> 
       <ListMovie movies={movies} search={search} rate={rate}/> 

    </div>
  );
}

export default App;
