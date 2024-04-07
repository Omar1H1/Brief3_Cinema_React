import { useEffect, useState, useRef } from 'react';
import { fetchTrendingMovies } from '../services/GlobalApi';
import SliderArrow from './SliderArrow';

const baseImageUrl = 'https://image.tmdb.org/t/p/original';

interface Movie {
  poster_path: string;
}

const MovieSlider = () => {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const elementRef = useRef<HTMLDivElement>(null);

  const sliderRight = () => {
    if (elementRef && elementRef.current) {
      (elementRef.current as HTMLDivElement).scrollLeft +=
        window.innerWidth - 110;
    }
  };

  const sliderLeft = () => {
    if (elementRef && elementRef.current) {
      (elementRef.current as HTMLDivElement).scrollLeft -=
        window.innerWidth - 110;
    }
  };

  useEffect(() => {
    fetchTrendingMovies().then((res) => {
      setMovieList(res.data.results);
    });
  }, []);

  return (
    <div className="mt-20">
      <h2 className="text-white  text-[18px] ml-28 mb-4 font-semibold">
        Trending now :
      </h2>
      <SliderArrow direction="left" onClick={sliderLeft} />
      <SliderArrow direction="right" onClick={sliderRight} />
      <div
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((movie, index) => (
          <img
            key={index}
            src={baseImageUrl + movie.poster_path}
            className="min-w-[310px] md:h-[310px] object-contain mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in"
          />
        ))}
      </div>
    </div>
  );
};

export default MovieSlider;
