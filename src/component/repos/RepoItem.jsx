import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";

import PropTypes from "prop-types";

function RepoItem({ repo }) {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo;

  return (
    <div className="mb-2 rounded-md card bg-base-200 hover:bg-base-300">
      <div className="card-body">
        <a href={html_url} target="_blank" rel="noreferrer noopener">
          <h3 className="mb-2 text-xl font-semibold">
            <FaLink className="inline mr-1" /> {name}
          </h3>
          <p className="mb-3">{description}</p>
          <div>
            <div className="mr-2 badge badge-info badge-lg">
              <FaEye className="mr-2" /> {watchers_count}
            </div>
            <div className="mr-2 badge badge-success badge-lg">
              <FaStar className="mr-2" /> {stargazers_count}
            </div>
            <div className="mr-2 badge badge-error badge-lg">
              <FaInfo className="mr-2" /> {open_issues}
            </div>
            <div className="mr-2 badge badge-warning badge-lg">
              <FaUtensils className="mr-2" /> {forks}
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
