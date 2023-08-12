// import Plus from "assets/icons/plus-icon";
// import Minus from "assets/icons/minus-icon";
// import Trash from "assets/icons/trash";
import { IconButton } from "app/valves/temp/button-temp/icon-button";
// import { CounterSizes } from "../../../../components/utils/prop-types";
// import { CounterBase, CounterValue, CounterSize } from "../../../../components/utils/theme";

type CounterProps = {
  className?: string;
  value: number;
  size?: CounterSizes;
  onDecrement: (e: any) => void;
  onIncrement: (e: any) => void;
};

export function Counter({
  onDecrement,
  onIncrement,
  value,
  size = "normal",
  className = "",
}) {
  const classNames = CounterBase + " " + CounterSize[size] + " " + className;
  return (
    <div className="counter">
      <IconButton
        onClick={onDecrement}
        className={`h-full transition duration-300 focus:outline-none`}
      >
        {value > 1 ? <Minus /> : <Trash />}
      </IconButton>
      <span>{value}</span>
      <IconButton
        onClick={onIncrement}
        className={`h-full transition duration-300 focus:outline-none`}
      >
        <Plus />
      </IconButton>
    </div>
  );
};


