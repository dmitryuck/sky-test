import Category from './category/Category';

interface Props {
  name: string;
}

const CategoryLayout = (props: Props) => {
  return <Category name={props.name} />;
};

export default CategoryLayout;
