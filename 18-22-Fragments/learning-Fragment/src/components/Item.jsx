import Styles from './Item.module.css';
function Item({foodItem}) {

  function handleBuyClick(event){
    console.log(event);
    console.log(`${foodItem} being bought`);
  }
  

  return (
    <li className={`${Styles['list-group-item']} ${Styles['kg-item']}`}>
      <span className={Styles['kg-span']}>{foodItem}</span>
      
      <button 
       className={`${Styles.button} btn btn-info`} 
      onClick ={(event)=> handleBuyClick (event)}
      >Buy
      </button>
      
      </li>
      
  );
}

export default Item;