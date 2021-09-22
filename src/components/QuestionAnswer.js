import React, { Fragment, useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import { CircularProgress } from "@material-ui/core";

const QuestionAnswer = () => {
  const [question, updateQuestion] = useState("");
  const [answer, updateAnswer] = useState("");

  useEffect(() => {
    startedLoading();
    requestAnswer();
    finishedLoading();
  }, [question]); // eslint-disable-line react-hooks/exhaustive-deps

  // useEffect(() => {
  //   finishedLoading();
  // }, [answer]);

  function startedLoading() {
    // hide the previous answer
    document.getElementsByClassName("qa-output")[0].style.display = "none";
    // display the loading icon
    document.getElementsByClassName("loading-bar")[0].style.display = "flex";
  }

  function finishedLoading() {
    // hide the loading icon
    document.getElementsByClassName("loading-bar")[0].style.display = "none";
    document.getElementsByClassName("qa-output")[0].style.display = "block";
    document.getElementsByClassName("qa-output")[0].innerHTML = answer;
  }

  async function requestAnswer() {
    console.log("Q: " + question);
    console.log(question === "" || question === undefined);

    // if there is no question, give a blank answer
    if (question === "" || question === undefined) {
      updateAnswer("");
    } else {
      const response = await fetch(
        `https://thawing-chamber-34850.herokuapp.com/?question=${question}`
      );
      const json = await response.json();
      updateAnswer(json.answer);
      console.log(answer);
    }

    console.log("A: " + answer);
  }

  const onSubmitQuestion = (e) => {
    e.preventDefault();
    updateQuestion(document.getElementsByClassName("qa-input")[0].value);
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
