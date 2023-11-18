interface Props {
  description: string;
}
const ProjectDescription: React.FC<Props> = ({ description }) => {
  return (
    <div className={`my-4 max-w-3xl px-2 text-center`}>
      <i className={`font-light`}>{description}</i>
    </div>
  );
};

export default ProjectDescription;
