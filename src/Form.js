import React from "react";
import "./Form.css";
import { useState } from "react";
import { v4 as uuid } from "uuid";

function Form({ makeMadLib }) {
  const [formData, setFormData] = useState({
    adjective_1: "",
    noun_1: "",
    plural_noun: "",
    female_name: "",
    adjective_2: "",
    article_of_clothing: "",
    noun_2: "",
    a_city: "",
    a_place: "",
    a_body_part: "",
    id: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    makeMadLib({ ...formData, id: uuid() });
  };

  return (
    <div id="form-div">
      <form class="form" onSubmit={handleSumbit}>
        <label>adjective</label>
        <input
          className="form-input"
          id="adjective_1"
          name="adjective_1"
          type="text"
          placeholder="adjective"
          value={formData.adjective_1}
          onChange={handleChange}
        ></input>
        <br></br>
        <label>noun</label>
        <input
          className="form-input"
          id="noun_1"
          name="noun_1"
          type="text"
          placeholder="noun"
          value={formData.noun_1}
          onChange={handleChange}
        ></input>
        <br></br>
        <label>plural noun</label>
        <input
          className="form-input"
          id="plural_noun"
          name="plural_noun"
          type="text"
          placeholder="plural noun"
          value={formData.plural_noun}
          onChange={handleChange}
        ></input>
        <br></br>
        <label>female name</label>
        <input
          className="form-input"
          id="female_name"
          name="female_name"
          type="text"
          placeholder="female name"
          value={formData.female_name}
          onChange={handleChange}
        ></input>
        <br></br>
        <label>adjective</label>
        <input
          className="form-input"
          id="adjective_2"
          name="adjective_2"
          type="text"
          placeholder="adjective"
          value={formData.adjective_2}
          onChange={handleChange}
        ></input>
        <br></br>
        <label>article of clothing</label>
        <input
          className="form-input"
          id="article_of_clothing"
          name="article_of_clothing"
          type="text"
          placeholder="article of clothing"
          value={formData.article_of_clothing}
          onChange={handleChange}
        ></input>
        <br></br>
        <label>noun</label>
        <input
          className="form-input"
          id="noun_2"
          name="noun_2"
          type="text"
          placeholder="noun"
          value={formData.noun_2}
          onChange={handleChange}
        ></input>
        <br></br>
        <label>a city</label>
        <input
          className="form-input"
          id="a_city"
          name="a_city"
          type="text"
          placeholder="a city"
          value={formData.a_city}
          onChange={handleChange}
        ></input>
        <br></br>
        <label>a place</label>
        <input
          className="form-input"
          id="a_place"
          name="a_place"
          type="text"
          placeholder="a place"
          value={formData.a_place}
          onChange={handleChange}
        ></input>
        <br></br>
        <label>part of the body</label>
        <input
          className="form-input"
          id="a_body_part"
          name="a_body_part"
          type="text"
          placeholder="a body part"
          value={formData.a_body_part}
          onChange={handleChange}
        ></input>
        <br></br>
        <button className="form-button">Get Story</button>
      </form>
    </div>
  );
}

export default Form;
