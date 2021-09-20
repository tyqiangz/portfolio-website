import React, { Fragment, useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import { CircularProgress } from "@material-ui/core";

const QuestionAnswer = () => {
  const [question, updateQuestion] = useState("");
  const [answer, updateAnswer] = useState("");

  useEffect(() => {
    requestAnswer();
  }, [question]); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestAnswer() {
    document.getElementsByClassName("qa-output")[0].style.display = "none";
    document.getElementsByClassName("loading-bar")[0].style.display = "flex";
    console.log(question);
    const response = await fetch(
      `https://thawing-chamber-34850.herokuapp.com/?question=${question}`
    );
    const json = await response.json();
    updateAnswer(json.answer);

    document.getElementsByClassName("loading-bar")[0].style.display = "none";
    document.getElementsByClassName("qa-output")[0].style.display = "block";
    document.getElementsByClassName("qa-output")[0].innerHTML = answer;
    console.log(answer);
  }

  const onSubmitQuestion = (e) => {
    updateQuestion(e.target.value);
    e.preventDefault();
  };

  return (
    <Fragment>
      <form onSubmit={(e) => onSubmitQuestion(e)}>
        <input
          className="qa-input"
          autoComplete="off"
          type="text"
          placeholder="What is his current job?"
          onBlur={(e) => updateQuestion(e.target.value)}
        />
      </form>
      <Box className="loading-bar" sx={{ width: "100%" }}>
        <CircularProgress color="inherit" />
      </Box>
      <p className="qa-output"></p>
    </Fragment>
  );
};

export default QuestionAnswer;
