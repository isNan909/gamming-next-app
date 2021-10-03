import Games from './Games';

export default function GameList({ filteredGames }) {
  return (
    <>
      {filteredGames.map((game) => {
        return <Games id={game.id} title={game.title} key={game.id} />;
      })}
    </>
  );
}
