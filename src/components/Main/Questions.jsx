import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChatCompletion } from "../../utils/requests";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Card,
  CardContent,
  Divider,
  MobileStepper,
  Typography,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { chatActions } from "../../store/chatSlice";
import classes from "./Questions.module.css";

const Questions = ({ validQuestions, result }) => {
  const [activeStep, setActiveStep] = useState(0);
  const category = useSelector((state) => state.chat.category);
  const responses = useSelector((state) => state.chat.quizResponses);
  const dispatch = useDispatch();
  const theme = useTheme();
  const maxSteps = validQuestions.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const handleResponseChange = (response) => {
    const questionId = validQuestions[activeStep].id;
    const existingResponseIndex = responses.findIndex(
      (item) => item && item.questionId === questionId
    );

    const updatedResponses =
      existingResponseIndex !== -1
        ? responses.map((item, index) =>
            index === existingResponseIndex
              ? { ...item, chosenAnswer: response }
              : item
          )
        : [
            ...responses,
            {
              questionId,
              question: validQuestions[activeStep].question,
              chosenAnswer: response,
            },
          ];

    dispatch(chatActions.saveQuizResponses(updatedResponses));
  };

  const handleSubmitTest = () => {
    dispatch(chatActions.toggleDisplayArticle(false));
    dispatch(chatActions.endOfQuiz());
    dispatch(
      fetchChatCompletion({
        enteredCategory: category,
        testAnswers: responses,
      })
    );
  };

  return (
    <Card
      className={classes.questionsBox}
      sx={{ width: "100%", maxHeight: 350, flexGrow: 1 }}
    >
      <CardContent>
        <Box sx={{ display: "flex", textAlign: "left" }}>
          <Typography component="h3" sx={{ height: "100%" }}>
            {validQuestions[activeStep].question}
          </Typography>
        </Box>
        <Divider variant="middle" sx={{ m: 2 }} />
        <Box
          className={classes.questionsBox}
          sx={{ minHeight: !result ? 140 : 0, width: "100%" }}
        >
          {!result && (
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              {validQuestions[activeStep].possibleAnswers.map((el, i) =>
                validQuestions[activeStep].possibleAnswers.length > 1 ? (
                  <FormControlLabel
                    key={i}
                    value={el.answer}
                    onChange={(e) => handleResponseChange(e.target.value)}
                    control={
                      <Radio
                        sx={{
                          color: "rgba(0, 0, 0, 0.6)",
                          "&.Mui-checked": {
                            color: "#11CBD7",
                          },
                        }}
                      />
                    }
                    label={el.answer}
                  />
                ) : (
                  <TextField
                    key={i}
                    id="filled-basic"
                    label="Place your answer here"
                    variant="filled"
                    fullWidth
                    multiline
                    maxRows={4}
                    onChange={(e) => handleResponseChange(e.target.value)}
                  />
                )
              )}
            </RadioGroup>
          )}

          {result && (
            <Typography sx={{ textAlign: "left" }}>
              {validQuestions[activeStep].correctAnswer}
            </Typography>
          )}
        </Box>
        <MobileStepper
          className={classes.stepperButtons}
          variant="text"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={() => handleStepChange(activeStep + 1)}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={() => handleStepChange(activeStep - 1)}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />

        {!result && (
          <div className={classes.submitExamButton}>
            <Button
              variant="contained"
              position="static"
              onClick={handleSubmitTest}
            >
              Submit Exam's Answers
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Questions;
