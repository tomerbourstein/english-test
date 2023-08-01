import DATA from "../../../article.json";
import { useState } from "react";

import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";

import classes from "./Questions.module.css";
const Questions = () => {
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();
  const { article, questions } = DATA;
  const maxSteps = questions.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box className={classes.questionsBox} sx={{ width: "100%", flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        <Typography sx={{ height: "100%" }}>
          {questions[activeStep].question}
        </Typography>
      </Paper>
      <Box sx={{ minHeight: 170, width: "100%", p: 2 }}>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          {questions[activeStep].possibleAnswers.map((el, i) =>
            questions[activeStep].possibleAnswers.length > 1 ? (
              <FormControlLabel
                key={i}
                value={el.answer}
                control={<Radio />}
                label={el.answer}
              />
            ) : (
              <TextField
                key={i}
                id="filled-basic"
                label="Place your answer here"
                variant="filled"
                fullWidth
              />
            )
          )}
        </RadioGroup>
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
            onClick={handleNext}
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
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
      <Button
        className={classes.submitExamButton}
        variant="contained"
        position="static"
      >
        Submit Exams Answers
      </Button>
    </Box>
  );
};

export default Questions;
