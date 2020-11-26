import Link from 'next/link';
import styles from './CategoryItemCard.scss';

interface Props {
  category: string;
  result: any;
}

const ResultCard = (props: Props) => {
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
