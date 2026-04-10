import "../styles/styles.css";

export default function Boxes({ boxes, handleChangeBoxColor }) {
  return (
    <div>
      <div className="container">
        {[...boxes].map((boxColor, index) => (
          <button
            key={index}
            className="box"
            style={{
              backgroundColor: boxColor,
              color: boxColor > "rgb(220,220,220)" ? "black" : "white",
            }}
            onClick={() => handleChangeBoxColor(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
