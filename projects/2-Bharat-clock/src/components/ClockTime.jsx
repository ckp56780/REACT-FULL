function ClockTime() {
  return <p className="lead">Current  Date and Time: {new Date().toLocaleString()}</p>;
}
export default ClockTime;