import {
  Button,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import React, { useState } from "react";
import { searchRecipe } from "../functions";
import { setRecipes } from "../actions";
import { connect } from "react-redux";

const SearchRecipe = (props: any) => {
  const [ingredients, setIngredients] = useState<string>("");
  const [calories, setCalories] = useState<string>("");
  return (
    <Form className="form">
      <FormGroup className="form-group">
        <FormLabel className="form-label">Recipe Name</FormLabel>{" "}
        <FormControl
          onChange={(event) => setIngredients(event.target.value)}
          className="form-control"
          type="text"
          placeholder="ingredients"
        ></FormControl>
      </FormGroup>
      <FormGroup className="form-group">
        <FormLabel className="form-label">Calories</FormLabel>{" "}
        <FormControl
          onChange={(event) => setCalories(event.target.value)}
          className="form-control"
          type="text"
          placeholder="min-max"
        ></FormControl>
      </FormGroup>{" "}
      <Button
        className="button"
        onClick={() => searchRecipe(ingredients, calories, props.setRecipes)}
      >
        {" "}
        Submit
      </Button>
    </Form>
  );
};

export default connect(null, { setRecipes })(SearchRecipe);
