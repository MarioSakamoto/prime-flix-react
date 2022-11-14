import {useEffect, useState} from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './home.css';

function Home(){
    const[filmes, setFilmes] = useState([]);

    useEffect(()=>{

        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: "f156c329a0911c1549f0389581941b0d",
                    language: "pt-BR",
                    page:1,
                }
            })

            //console.log(response.data.results.slice(0,10));
            setFilmes(response.data.results.slice(0, 10))

        }

        loadFilmes();
    }, [])

    return(
        <div className="container">
            <div className="lista-filmes">
            {filmes.map((filmes) => {
                return(
                    <article key={filme.id}>
                        <strong>{filmes.title}</strong>
                        <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                        <Link to={`/filme/${filme.id}`}>Acessar</Link>
                    </article>
                )
            })}
           </div>
        </div>
    )
}

export default Home;