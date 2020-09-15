import React from "react";

const Donut = ({
  flavor = "plain",
  topping = "none",
  name = "none",
  recommended,
}) => {
  // By default, a donut is FALSE for whether it's
  // eaten or not. That's why we pass in `false`.
  const [isEaten, setIsEaten] = React.useState(false);
  const [shape, setShape] = React.useState(null);
  const [counter, setCounter] = React.useState(0);
  const [isLiked, setIsLiked] = React.useState(recommended ? true : null);

  const handleClick = () => {
    setIsEaten(true);
    setCounter(counter + 1);
  };

  const handleShape = (e) => {
    setShape(e.target.name);
  };

  const handleLike = (e) => {
    e.target.name === "like" ? setIsLiked(true) : setIsLiked(false);
  };
  return (
    <div>
      <div>{name}</div>
      <div>{flavor}</div>
      <div>{topping}</div>
      {}
      <div>{shape && `This is a ${shape} donut`}</div>
      <button onClick={handleShape} name="circle">
        Circle
      </button>
      <button onClick={handleShape} name="square">
        Square
      </button>
      <div>{isEaten ? `This donut is eaten ${counter} times` : "Eat me"}</div>
      <button onClick={handleClick}>Eat</button>
      <div>
        {isLiked !== null &&
          (isLiked ? "this donut is aweomse" : "this donut sucks :(")}
      </div>
      <div>
        <button onClick={handleLike} name="like">
          Like!
        </button>
        <button name="dislike" onClick={handleLike}>
          Dislike!
        </button>
      </div>
    </div>
  );
};

export default Donut;
