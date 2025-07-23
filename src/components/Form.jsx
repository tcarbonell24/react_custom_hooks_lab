import { useLocalStorage } from "../hooks/useLocalStorage";

function Form() {
  // use custom hook for name and service number
  const [name, setName] = useLocalStorage("name", "");
  const [serviceNumber, setServiceNumber] = useLocalStorage("serviceNumber", "");

  return (
    <>
      <form style={{ display: "flex", flexDirection: "column" }}>
        {/* input for name */}
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          data-testid="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* input for service number */}
        <label htmlFor="serviceNumber">Service Number:</label>
        <input
          id="serviceNumber"
          type="text"
          data-testid="service"
          value={serviceNumber}
          onChange={(e) => setServiceNumber(e.target.value)}
        />
      </form>

      {/* show greeting or prompt */}
      <h4>{name ? `Welcome, ${name}!` : "Enter your name"}</h4>
    </>
  );
}

export default Form;
