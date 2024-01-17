import { useDispatch } from "react-redux";
import { fetchChatCompletion } from "../../utils/requests";
import { chatActions } from "../../store/chatSlice";
import useInput from "../../hooks/use-input";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import classes from "./Form.module.css";

const Form = () => {
  const {
    value: enteredCategory,
    isValid: categoryIsValid,
    hasError: categoryHasError,
    valueChangeHandler: categoryChangeHandler,
    valueBlurHandler: categoryBlurHandler,
    reset: categoryResetHandler,
  } = useInput((value) => value.trim() !== "");

  const dispatch = useDispatch();

  const handleSubmitCategory = (event) => {
    event.preventDefault();
    dispatch(chatActions.saveCategory(enteredCategory));
    dispatch(chatActions.toggleDisplayArticle(true));
    dispatch(
      fetchChatCompletion({
        enteredCategory: enteredCategory,
        testAnswers: null,
      })
    );
    categoryResetHandler("");
  };
  return (
    <form className={classes.categoryInput} onSubmit={handleSubmitCategory}>
      <TextField
        label={<StarBorderOutlinedIcon />}
        placeholder="Enter Subject"
        variant="outlined"
        size="small"
        autoComplete="off"
        value={enteredCategory}
        onBlur={categoryBlurHandler}
        onChange={categoryChangeHandler}
        sx={{
          focusColor: "red",
        }}
      />
      <Fab
        size="small"
        sx={{
          background: "#11CBD7",
          color: "white",
          transition: "color background .2s",
          ":hover": {
            color: "#11CBD7",
            transition: "color background .2s ease",
          },
        }}
        type="submit"
      >
        GO
      </Fab>
    </form>
  );
};
export default Form;
