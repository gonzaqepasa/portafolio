interface Props {
  name: string;
}
const ProjectTitle: React.FC<Props> = ({ name }) => {
  return (
    <div>
      <h2 className={`text-2xl`}>{name}</h2>
    </div>
  );
};

export default ProjectTitle;
