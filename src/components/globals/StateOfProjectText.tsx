import { typesProjectState } from "@/Projects/class/state/state";
import Image from "next/image";
import { FcApproval } from "react-icons/fc";
interface Props {
  state: typesProjectState;
}

const returnColor = (str: typesProjectState["color"]): string => {
  const colorVariants: Record<typesProjectState["color"], string> = {
    cyan: "text-cyan-400",
    orange: "text-orange-400",
    green: "text-green-400",
  };
  return colorVariants[str];
};
const StateOfProjectText: React.FC<Props> = ({ state }) => {
  console.log(state);
  return (
    <>
      {state && (
        <i className={`flex ${returnColor(state.color)} text-xs `}>
          {/* <Image src={state.icon} alt={state.val} /> */}
          {state.val}
        </i>
      )}
    </>
  );
};

export default StateOfProjectText;
