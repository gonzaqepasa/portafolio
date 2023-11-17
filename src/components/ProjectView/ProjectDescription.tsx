interface Props {
  description: string;
}
const ProjectDescription: React.FC<Props> = ({ description }) => {
  return (
    <div>
      <p className={``}>{description}</p>
    </div>
  );
};

export default ProjectDescription;
