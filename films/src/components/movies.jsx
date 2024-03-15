import { Movie } from './Movie';

function Movies(props) {
    const { movies } = props;

    return (
        <div className='movies'>
            {movies && movies.length ? (
                movies.map((movie) => <Movie key={movie.imdbID} {...movie}/>)
            ) : (
                <div className='NotFoundDiv'>
                    <h4>Not found...</h4>                    
                    <img src="shutterstock_109969949.jpg" alt="" />
                </div>
            )}
        </div>
    )
}

export { Movies };