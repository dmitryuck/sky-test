import Item from './item/Item';

const CategoryLayout = (props) => {
  return <Item category={props.category} name={props.name} />;
};

export default CategoryLayout;
