import "./App.css";
import data from "./data.json";

const OsxButtons = () => {
  return <></>;
};

const Filter = ({ icon, name }) => {
  return <p className="filter">{name}</p>;
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
  return (
    <li className="issue">
      <span>{name}</span>
      <span>state: {selected}</span>
    </li>
  );
};

function App() {
  return (
    <div className="App">
      <div className="app-window">
        <div className="sidebar">
          <OsxButtons />
          <Filter name={data.filters[0].name} />
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
