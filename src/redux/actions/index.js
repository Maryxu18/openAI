import api from '../../services/api';

export const addResponseSuccess = (response) => {
  return {
    type: 'ADD_RESPONSE_SUCCESS',
    payload: response
  };
};

export const addResponseFailure = (error) => {
  return {
    type: 'ADD_RESPONSE_FAILURE',
    payload: error
  };
};

export const getResponse = (prompt, engine) => {
  return (dispatch) => {
    const data = {
      prompt,
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0
    };

    api
      .post(`${engine}/completions`, data)
      .then((res) => {
        const newResponse = res.data.choices[0].text;
        const newResponseDate = res.data.created;
        const engineName = engine.split('-')[1];
        const capitalizedEngine = engineName.charAt(0).toUpperCase() + engineName.slice(1);
        dispatch(
          addResponseSuccess({
            prompt,
            response: newResponse,
            date: newResponseDate,
            engineName: capitalizedEngine
          })
        );
      })
      .catch((error) => {
        dispatch(
          addResponseFailure({
            error: error.message
          })
        );
      });
  };
};
