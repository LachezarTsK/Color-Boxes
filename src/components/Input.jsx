import "../styles/styles.css";

export default function Input({ handleSetBoxes, setNumberOfBoxes }) {
  return (
    <div>
      <div className="text">Enter number of boxes: min 10, max 100</div>
      <form
        className="form"
        onSubmit={(e) => {
          handleSetBoxes();
          e.preventDefault();
        }}
      >
        <input
          className="input"
          type="number"
          step={1}
          min={10}
          max={100}
          onChange={(e) => setNumberOfBoxes(e.target.value)}
        />
        <button className="input" type="submit">
          submit
        </button>
      </form>
    </div>
  );
}
