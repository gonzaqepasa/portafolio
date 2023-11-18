interface Props {
  name: string;
}
const ProjectTitle: React.FC<Props> = ({ name }) => {
  return (
    <div className="">
      <h2
        className={`text-4xl  bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text`}
      >
        {name}
      </h2>
    </div>
  );
};

export default ProjectTitle;
