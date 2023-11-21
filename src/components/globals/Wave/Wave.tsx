import "./wave.css";

interface Props {
  fade?: boolean;
}
const Wave: React.FC<Props> = ({ fade }) => {
  return (
    <div
      className={` h-28 ${fade && "fadeIn-1"} w-full relative overflow-hidden`}
    >
      <div className="wave "></div>
    </div>
  );
};

export default Wave;
