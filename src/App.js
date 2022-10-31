import "./App.css";
import Title from "./Title";
import Description from "./Description";

const App = () => {
  return (
    <>
      <div className="content">
        <Title name={"Lorem"} className="title" />
        <Description></Description>
      </div>
      <div className="content">
        <Title name={"Ipsum"} className="title" />
        <Description text={""}></Description>
      </div>
    </>
  );
};
export default App;
