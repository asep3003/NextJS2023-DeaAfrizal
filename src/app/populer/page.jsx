"use client"
import AnimeList from '@/components/AnimeList';
import HeaderMenu from '@/components/Utilities/HeaderMenu';
import Pagination from '@/components/Utilities/Pagination';
import { getAnimeResponse } from '@/libs/api-libs';
import React, { useEffect, useState } from 'react'

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    const populerAnime = await getAnimeResponse("top/anime", `page=${page}`);
    setTopAnime(populerAnime);
  }

  return (
    <>
      <HeaderMenu title={`ANIME TERPOPULER #${page}`} />
      <AnimeList api={topAnime} />
      <Pagination 
        page={page} 
        lastPage={topAnime.pagination?.last_visible_page}
        setPage={setPage}
      />
    </>
  )
}

export default Page;