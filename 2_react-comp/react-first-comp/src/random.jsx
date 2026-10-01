function Random(){
  let randomNumber = Math.random() * 10;
  return <p style={{'background-color': '#776691'}}>The random number is: {randomNumber}</p>;
}
export default Random;