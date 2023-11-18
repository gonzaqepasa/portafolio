import { typesProjectState } from "@/Projects/class/state/state";
import Image from "next/image";
import { FcApproval, FcBarChart, FcServices, FcVlc } from "react-icons/fc";

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

  function renderIcon(icon: typesProjectState["val"]) {
    if (icon === "En Producción") return <FcApproval />;
    if (icon === "En Construcción") return <FcVlc />;
    if (icon === "En Mantenimiento") return <FcServices />;
    if (icon === "Versión Beta") return <FcBarChart />;
  }

  return (
    <>
      {state && (
        <div className="flex items-center ">
          <p className="text-xs">{renderIcon(state.val)}</p>
          <i className={`${returnColor(state.color)} text-xs `}>{state.val}</i>
        </div>
      )}
    </>
  );
};

export default StateOfProjectText;
