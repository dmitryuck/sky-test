import Link from 'next/link';
import Category from '../../../server/interfaces/Category';
import styles from './ResultCard.scss';

interface Props {
  category: string;
  result: any;
}

const ResultCard = (props: Props) => {
  return (
    <Link
      href={{
        pathname: 'category',
        query: { name: props.result.name },
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
