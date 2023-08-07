import { useState } from "react";

import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";

import classes from "./Questions.module.css";

const Questions = (props) => {
  const { validQuestions } = props;

  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();
  const maxSteps = validQuestions.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Card className={classes.questionsBox} sx={{ width: "100%", flexGrow: 1 }}>
      <CardContent>
        <Box sx={{ display: "flex", textAlign: "left" }}>
          <Typography component="h3" sx={{ height: "100%" }}>
            {validQuestions[activeStep].question}
          </Typography>
        </Box>
        <Divider variant="middle" sx={{ m: 4 }} />
        <Box
          className={classes.questionsBox}
          sx={{ minHeight: 170, width: "100%" }}
        >
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            {validQuestions[activeStep].possibleAnswers.map((el, i) =>
              validQuestions[activeStep].possibleAnswers.length > 1 ? (
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
                  multiline
                  maxRows={4}
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
            <Button
              size="small"
              onClick={handleBack}
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
        <Button
          className={classes.submitExamButton}
          variant="contained"
          position="static"
        >
          Submit Exam's Answers
        </Button>
      </CardContent>
    </Card>
  );
};

export default Questions;
