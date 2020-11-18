import Link from 'next/link';
import Category from '../../../server/interfaces/Category';
import styles from './CategoryCard.scss';

interface Props {
  category: Category;
}

const CategoryCard = (props: Props) => {
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
