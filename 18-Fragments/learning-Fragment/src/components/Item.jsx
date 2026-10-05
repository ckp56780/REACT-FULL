import Styles from './Item.module.css';
function Item({foodItem}) {
  return (
    <li className={`${Styles['list-group-item']} ${Styles['kg-item']}`}>
      <span className={Styles['kg-span']}>{foodItem}</span></li>
  );
}

export default Item;