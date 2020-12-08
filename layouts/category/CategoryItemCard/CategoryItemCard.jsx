import Link from 'next/link';
import styles from './CategoryItemCard.module.scss';

const ResultCard = (props) => {
  return (
    <Link
      href={{
        pathname: 'item',
        query: { category: props.category, name: props.result.name },
      }}
    >
      <div className={styles.cardContainer}>
        <div className={styles.infoContainer}>
          <div>{props.result.name}</div>
        </div>
      </div>
    </Link>
  );
};

export default ResultCard;
