import { FcApproval } from "react-icons/fc";
interface Props {}
const InProductiontext: React.FC<Props> = () => {
  return (
    <i className="flex   text-xs text-green-300">
      <FcApproval className="text-base" />
      En producción
    </i>
  );
};

export default InProductiontext;
