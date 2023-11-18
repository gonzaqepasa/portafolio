import { MdOutlineWebAsset } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
interface Props {
  url?: string;
  urlGithub?: string;
}
const ProjectUrls: React.FC<Props> = ({ url, urlGithub }) => {
  return (
    <>
      {url && (
        <div className="flex w-11/12 max-w-5xl  whitespace-nowrap">
          <a
            className="flex items-center gap-1  text-blue-400 hover:text-blue-600 transition-colors"
            href={url}
            target="_blank"
          >
            <MdOutlineWebAsset />
            <i>Enlace del deploy</i>
          </a>
        </div>
      )}
      {urlGithub && (
        <div className="flex w-11/12 max-w-5xl whitespace-nowrap ">
          <a
            className="flex items-center gap-1  text-blue-400 hover:text-blue-600 transition-colors"
            href={urlGithub}
            target="_blank"
          >
            <FaGithub />
            <i>Github</i>
          </a>
        </div>
      )}
    </>
  );
};

export default ProjectUrls;
