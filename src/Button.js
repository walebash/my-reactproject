

const clickMe = () =>{
    alert(" you clicked me");
}

function Button() {
  return (
    <div className="component">
      <h2>This is a button component</h2>
      <button onClick= {clickMe} className = "btn blue" type="button">
        Button
        </button>
        <button onClick= {clickMe} className = "btn red" type="button">
        Submit
        </button>
        <button onClick= {clickMe} className = "btn green" type="button">
        Add
        </button>
    </div>
  );
}

export default Button;
