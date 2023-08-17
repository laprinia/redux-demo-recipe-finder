import { connect } from "react-redux";

const RecipeList = (props: any) => {
  return (
    <div className="product-list">
      <ul>
        {props.recipes
          .sort((a: any, b: any) => a.recipe.calories - b.recipe.calories)
          .map((recipe: any, index: number) => (
            <div
              className="product-tile"
              key={index}
              onClick={() => window.open(recipe.recipe.url, "_blank")}
            >
              <img
                className="product-image"
                src={recipe.recipe.image}
                alt={recipe.recipe.label}
              />
              <h3 className="product-title">{recipe.recipe.label}</h3>
              <p className="product-description">
                {Math.floor(recipe.recipe.calories)}
              </p>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default connect((state) => state, null)(RecipeList);
