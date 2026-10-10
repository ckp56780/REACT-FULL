function ErrorMessage({ items }) {

  return (
    <>
      {items.length === 0 && (
        <h3>There is no food items</h3>
      )}
    </>
  );
}

export default ErrorMessage;