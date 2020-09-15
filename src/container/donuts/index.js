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

  const renderDonuts = () => {
    return donutsMenu.map((donut) => <Donut {...donut} key={donut.name} />);
  };

  return (
    <div>
      {/* Your Form Should be here */}
      {renderDonuts()}
    </div>
  );
}
