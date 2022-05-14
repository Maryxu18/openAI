import React, { useState } from "react";
import api from "../../services/api";

function Form({ updateResponses }) {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      prompt: prompt,
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };

    if (prompt !== "") {
      api
        .post("/", data)
        .then((res) => {
          const newResponse = res.data.choices[0].text;
          const newResponseDate = res.data.created;
          updateResponses(prompt, newResponse, newResponseDate);
        })
        .catch((err) => {
          //TODO: handle error
        });
    }
  };
  return (
    <div className="mb-3">
      <form name="responseForm" onSubmit={handleSubmit}>
        <div class="mb-3">
          <label className="form-label"> Enter a Prompt</label>{" "}
          <textarea
            value={prompt}
            onChange={(event) => {
              setPrompt(event.target.value);
            }}
            rows={5}
            cols={30}
            form="responseForm"
            className="form-control"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
