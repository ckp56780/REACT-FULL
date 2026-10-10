import styles from "./Foodinput.module.css";
function Foodinput({foodItem}) {

  function handleInputChange(event){
    console.log(event.target.value);
  }
  
  return (
    <input
      type="text"
      placeholder="Enter food item here"
      className={styles.Foodinput}
      onChange={handleInputChange}
    />
  );
}
export default Foodinput;