import React, { useState } from "react";
import "./MadLibs.css";
import Form from "./Form";
import Story from "./Story";

function MadLibs() {
  const [inputs, setInputs] = useState([]);

  const submitInputs = (MadLibObject) => {
    setInputs((inputs) => [...inputs, MadLibObject]);
  };
  return (
    <>
      <div className="App">
        <h1>MadLibs!</h1>
        <div id="board">
          {inputs[0] ? (
            <Story
              adjective_1={inputs[0].adjective_1}
              noun_1={inputs[0].noun_1}
              plural_noun={inputs[0].plural_noun}
              female_name={inputs[0].female_name}
              adjective_2={inputs[0].adjective_2}
              article_of_clothing={inputs[0].article_of_clothing}
              noun_2={inputs[0].noun_2}
              a_city={inputs[0].a_city}
              a_place={inputs[0].a_place}
              a_body_part={inputs[0].a_body_part}
            />
          ) : (
            <Form makeMadLib={submitInputs} />
          )}
        </div>
      </div>
    </>
  );
}

export default MadLibs;
