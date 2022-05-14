import React, { useState } from "react";
import Form from "../components/Form";
import ResponseList from "../components/ResponseList";

function Home() {
  // const [responses, setResponses] = useState(localStorage.getItem("responses")? JSON.parse(localStorage.getItem("responses")): []);
  const [responses, setResponses] = useState([]);

  const updateResponses = (prompt, response, responseDate) => {
    const updatedReponsesList = [
      { prompt: prompt, response: response, date: responseDate },
      ...responses,
    ];
    setResponses(updatedReponsesList);
  };

  return (
    <>
      <Form responses={responses} />
      <ResponseList updateResponses={updateResponses}> </ResponseList>
    </>
  );
}

export default Home;
