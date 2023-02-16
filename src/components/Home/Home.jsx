import React, { useState, useEffect, useMemo } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getTrendingMovies } from '../../shared/services/api';
import css from './home.module.css';
import MovieList from 'components/MovieList/MovieList';
import Paginator from 'components/Paginator/Paginator';
import { MagnifyingGlass } from 'react-loader-spinner';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });
  const location = useLocation();

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  const page = Number(params.page || 1);
  const [totalPages, settotalPages] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await getTrendingMovies(page);
        setMovies(data.results);
        settotalPages(data.total_pages);
        setLoading(false);
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [page]);

  return (
    <>
      <h2 className={css.title}>Trending movies:</h2>
      {loading ? (
        <div className={css.loading}>
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{ margin: '0 auto' }}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
          />
        </div>
      ) : (
        <>
          <MovieList movies={movies} location={location} />
        </>
      )}

      <Paginator
        totalPages={totalPages}
        setSearchParams={setSearchParams}
        params={params}
        currentPage={Number(params?.page - 1) || 0}
      />
    </>
  );
};

export default Home;
