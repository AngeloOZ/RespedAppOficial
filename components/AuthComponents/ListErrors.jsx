export const ListErrors = ({ message, errors = [] }) => {
  return (
    <div style={{ textAlign: "start" }}>
      <p
        className="toCapitalize"
        style={{ fontWeight: "bold", textAlign: "left" }}
      >
        {message}
      </p>
      <ul style={{ margin: 0 }}>
        {errors.map((error, i) => (
          <li key={i}>{`${error.param}: ${error.msg}`}</li>
        ))}
      </ul>
    </div>
  );
};
