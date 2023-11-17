import { MdOutlineWebAsset } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
interface Props {
  url?: string;
  urlGithub?: string;
}
const ProjectUrls: React.FC<Props> = ({ url, urlGithub }) => {
  return (
    <div>
      {url && (
        <div>
          <a
            className="flex items-center gap-1 text-blue-400 hover:text-blue-600 transition-colors"
            href={url}
            target="_blank"
          >
            <MdOutlineWebAsset />
            <i>Enlace del deploy</i>
          </a>
        </div>
      )}
      {urlGithub && (
        <div>
          <a
            className="flex items-center gap-1 text-blue-400 hover:text-blue-600 transition-colors"
            href={urlGithub}
            target="_blank"
          >
            <FaGithub />
            <i>Github</i>
          </a>
        </div>
      )}
    </div>
  );
};

export default ProjectUrls;
