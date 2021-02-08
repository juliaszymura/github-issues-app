import "./App.css";
import data from "./data.json";
import githubIcon from "./assets/icon-github.svg";
import closedIssueIcon from "./assets/icon-closed-issue.svg";
import openIssueIcon from "./assets/icon-open-issue.svg";
import { ReactComponent as StarIcon } from "./assets/icon-star.svg";

const OsxButtons = () => {
  return (
    <p className="osx-buttons">
      <button className="red"></button>
      <button className="yellow"></button>
      <button className="green"></button>
    </p>
  );
};

const Filter = ({ icon, name, count }) => {
  let iconName;
  switch (icon) {
    case "github":
      iconName = githubIcon;
      break;
    case "open-issue":
      iconName = openIssueIcon;
      break;
    case "closed-issue":
      iconName = closedIssueIcon;
      break;
    default:
  }

  return (
    <p className="filter">
      <img src={iconName} alt="icon" />
      <span>{name}</span>
      <span className="issue-count">{count}</span>
    </p>
  );
};

const IssueGroup = ({ date, issues }) => {
  return (
    <section className="issue-group">
      <h2>{date}</h2>
      <ul>
        {issues.map((issue) => (
          <Issue key={issue.name} {...issue} />
        ))}
      </ul>
    </section>
  );
};

const Issue = ({ name, selected }) => {
  const starIcon = selected ? (
    <StarIcon fill="black" />
  ) : (
    <StarIcon fill="transparent" stroke="#E0E0E0" />
  );

  return (
    <li className="issue">
      <span>{name}</span>
      {starIcon}
    </li>
  );
};

function App() {
  return (
    <div className="App">
      <div className="app-window">
        <div className="sidebar">
          <OsxButtons />
          {data.filters.map((filter) => (
            <Filter key={filter.name} {...filter} />
          ))}
        </div>
        <main>
          {data.issues.map((issue) => (
            <IssueGroup key={issue.date} {...issue} />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
