import React from "react";
import Donut from "../../component/donut";

export default function Donuts() {
  const [donutsMenu, setDonutsMenu] = React.useState([
    {
      name: "plain ol donut",
      flavor: "plain",
      topping: ["sprinkles", "caramel"],
      recommended: false,
    },
  ]);
  const [userDonut, setUserDonut] = React.useState({
    name: "",
    flavor: "",
    topping: [],
    recommended: false,
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    setDonutsMenu([...donutsMenu, userDonut])
    console.log(donutsMenu);
  }
  const handleInputChange = (e, key) => {
    setUserDonut({ ...userDonut, [key]: e.target.value });
    console.log(userDonut);
  };

  const renderDonuts = () => {
    return donutsMenu.map((donut) => <Donut {...donut} key={donut.name} />);
  };

  return (
    <div>
      {/* Your Form Should be here */}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="donut name" onChange={(e) => handleInputChange(e, "name")}/>
        <select name="flavor" id="flavor" onChange={(e) => handleInputChange(e, "flavor")}>
          <option value="chocolate">chocolate</option>
          <option value="vanila">vanila</option>
          <option value="strawberry">strawberry</option>
        </select>
        <input type="submit"/>
      </form>
      <br/>
      {renderDonuts()}
    </div>
  );
}
