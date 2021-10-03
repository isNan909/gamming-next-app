import { useState } from 'react';
import Layout from '../components/Layout';
import SearchBox from '../components/SearchBox';
import GameList from '../components/GameList';
// import getGames from '../utils/api';

import styles from '../styles/Home.module.css';

export default function Home({ filteredGames }) {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase());
  };

  const filterGames = filteredGames.filter((game) =>
    game.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <div className={styles.container}>
        <SearchBox
          type="text"
          placeholder="Search your game.."
          onChange={handleChange}
        />
        <GameList filteredGames={filterGames} />
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    'https://free-to-play-games-database.p.rapidapi.com/api/games',
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host': process.env.RAPID_API_HOST,
        'x-rapidapi-key': process.env.RAPID_API_KEY,
        'Content-Type': 'application/json',
      },
    }
  );
  const filteredGames = await res.json();

  return {
    props: {
      filteredGames,
    },
  };
};
