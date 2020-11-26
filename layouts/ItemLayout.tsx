import Item from './item/Item';

interface Props {
  category: string;
  name: string;
}

const CategoryLayout = (props: Props) => {
  return <Item category={props.category} name={props.name} />;
};

export default CategoryLayout;
