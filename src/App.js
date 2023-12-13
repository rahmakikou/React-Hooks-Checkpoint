import NavMovie from './Components/NavMovie';
import './App.css';
import ListMovie from './Components/ListMovie';
import { useState } from 'react';  
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom'; 
import Movie from "./Components/Movie"; 

function App() {
  const [movies,setMovies]= useState(
    [
    { title : 'Harry Potter Saga', 
    description: 'The greatest magical story ever told : the boy who lived', 
    posterURL: 'https://resize.elle.fr/portrait/var/plain_site/storage/images/loisirs/series/harry-potter-l-annonce-que-tous-les-fans-attendaient-avec-impatience-3797929/90633353-1-fre-FR/Harry-Potter-l-annonce-que-tous-les-fans-attendaient-avec-impatience.jpg',
     rating: ' 4', 
     trailer : "https://www.youtube.com/embed/VyHV0BRtdxo?si=6uYDglZHCA_90rvT",
     id: Math.random()
    },
    {
            title : "Parmi les ruines", 
            description:'Histoire éternelle imaginée par Youssef Sebai avec Faten Hamama dans le rôle titre' , 
             posterURL: 'https://media0033.elcinema.com/uploads/_315x420_9f5c4c3867749ecc6fce45a8f3d4d10242f7b2ef67dd82a41f6587c805438d17.jpg', 
             rating: '5', 
             trailer : "https://www.youtube.com/embed/pGX52E0NHlo?si=vzxL6FOhEvzgozzy", 
             id: Math.random(), 
        },
    
    {
            title : 'Doctor Zhivago', 
            description:'Epic adaptation with the magistral Omar Sherif', 
             posterURL:  'https://s3.amazonaws.com/static.rogerebert.com/uploads/review/primary_image/reviews/doctor-zhivago-1995/EB19950407REVIEWS504070303AR.jpg', 
             rating: ' 4.5', 
             trailer : "https://www.youtube.com/embed/CGGr21PilKY?si=36hgrhhbkqhqSNVY",
             id: Math.random(), 
        } , 
        {
            title : 'Kabhi Khushi Kabhie Gham...', 
            description : 'It tells the story of an Indian multimillionaire family with multiple love stories and killer songs', 
            posterURL: ' https://upload.wikimedia.org/wikipedia/en/4/4d/Kabhi_Khushi_Kabhie_Gham..._poster.jpg', 
            rating : '5', 
            trailer : "https://www.youtube.com/embed/7uY1JbWZKPA?si=2mdvDn5WfcvVX4EI" , 
            id: Math.random(), 
        },
        {
          title :'Animal', 
          description : 'a father-son story portrayed by Anil Kapoor and Ranbir Kapoor', 
          rating : '3.5',
          posterURL : 'https://m.media-amazon.com/images/M/MV5BNWU5ZDRmMWItZGU0NC00NzZjLTgzYjctY2RlMzI3OTNkN2U5XkEyXkFqcGdeQXVyMTE0MTY2Mzk2._V1_.jpg',
          trailer : 'https://www.youtube.com/embed/8FkLRUJj-o0?si=vL2PeVy4TG9xue2H',
          id : Math.random(), 
          },
    ]
    )
    const [search, setSearch] = useState('')
    const [rate, setRate] = useState(0) 
  return (
    <div> 
       <NavMovie/> 
       <br/>
<br/> 
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/MovieList' element={<ListMovie movies={movies} search={search} rate={rate} setMovies={setMovies} setSearch={setSearch} setRate={setRate}/>}/>
        <Route path='/Movie/:id' element={<Movie movies={movies}/>}/> 
        

       </Routes>
     
      
    </div>
  );
}

export default App;
