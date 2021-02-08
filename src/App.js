import "./App.css";
import data from "./data.json";
import githubIcon from "./assets/icon-github.svg";
import closedIssueIcon from "./assets/icon-closed-issue.svg";
import openIssueIcon from "./assets/icon-open-issue.svg";
import { ReactComponent as StarIcon } from "./assets/icon-star.svg";
import { useState } from "react";

const OsxButtons = () => {
  return (
    <p className="osx-buttons">
      <button className="osx-buttons__button osx-buttons__button--red"></button>
      <button className="osx-buttons__button osx-buttons__button--yellow"></button>
      <button className="osx-buttons__button osx-buttons__button--green"></button>
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
    <button className="filter">
      <img src={iconName} alt="icon" />
      <span>{name}</span>
      <span className="filter__issue-count">{count}</span>
    </button>
  );
};

const IssuesGroup = ({ date, issues }) => {
  return (
    <section className="issues__group">
      <h2 className="issues__group__heading">{date}</h2>
      <ul className="issues__group__list">
        {issues.map((issue) => (
          <Issue key={issue.name} {...issue} />
        ))}
      </ul>
    </section>
  );
};

const Issue = ({ name, selected }) => {
  const [toggled, setToggled] = useState(selected);

  return (
    <li className="issue">
      <span>{name}</span>
      {toggled ? (
        <StarIcon
          className="issue__star-icon--filled"
          onClick={() => setToggled(!toggled)}
        />
      ) : (
        <StarIcon
          className="issue__star-icon--outline"
          onClick={() => setToggled(!toggled)}
        />
      )}
    </li>
  );
};

const App = () => {
  return (
    <div className="app">
      <div className="sidebar">
        <OsxButtons />
        {data.filters.map((filter) => (
          <Filter key={filter.name} {...filter} />
        ))}
      </div>
      <main className="issues">
        {data.issues.map((issue) => (
          <IssuesGroup key={issue.date} {...issue} />
        ))}
      </main>
    </div>
  );
};

export default App;
