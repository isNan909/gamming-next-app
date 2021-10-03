import styles from './Games.module.css';
import Link from 'next/link';

const Games = ({ id, title }) => {
  return (
    <Link href="/game/[id]" as={`/game/${id}`}>
      <a>
        <div className={styles.game_container}>
          <h3>{title}</h3>
        </div>
      </a>
    </Link>
  );
};

export default Games;
