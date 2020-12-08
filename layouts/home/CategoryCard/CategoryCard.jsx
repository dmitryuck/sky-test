import Link from 'next/link';
import styles from './CategoryCard.module.scss';

const CategoryCard = (props) => {
  return (
    <Link
      href={{
        pathname: 'category',
        query: { name: props.category.name },
      }}
    >
      <div className={styles.cardContainer}>
        <div className={styles.infoContainer}>
          <div>{props.category.name}</div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
