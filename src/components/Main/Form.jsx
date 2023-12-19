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
    <form onSubmit={handleSubmitCategory}>
      <TextField
        label={<StarBorderOutlinedIcon />}
        placeholder="Enter Category"
        variant="outlined"
        size="small"
        autoComplete="off"
        error={categoryHasError}
        value={enteredCategory}
        onBlur={categoryBlurHandler}
        onChange={categoryChangeHandler}
      />
      <Fab size="small" color="secondary" type="submit">
        GO
      </Fab>
    </form>
  );
};
export default Form;
