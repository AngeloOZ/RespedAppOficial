import { SweetAlert } from "../helpers";

const Alerta = () => {
  const handleClick = () => {
    SweetAlert.error({confirmButtonText:"Holaaa"});
  };

  return (
    <div>
      <h1>SweetAlert</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Alerta;
