function Hello() {

  //here we will define the variable and return the JSX code
  let myname = "Kumar Gaurav.";
  let number = 10;
  let fullName=()=>{
    return 'chandan kumar';
  }
  return <h3>
    MessageNo: {number} , I am your master {fullName()} <br /> and my friend's name is {myname}   
    </h3>;
}

export default Hello;