import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import React from "react";
import _ from "lodash";
import MethodsPage from "./components/MethodsPage";
import { CATEGORY_ITEMS, METHOD_ITEMS, HOME_ROUTE } from "./Constants";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SingleMethodPage from "./components/single-item-page/SingleMethodPage";
import Item from "./components/Item";

export default class App extends React.Component {
  constructor() {
    super();
    this.methodInfo = {
      category: "Concept Development",
      title: "The Actant Model",
      introduction:
        "Investigate relationships, functions and possible actions to strengthen development work",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/SVG_Logo.svg/1200px-SVG_Logo.svg.png",
      guidance:
        "Print and use the template at “Downloads”, and after: · Start by filling in the project axis: Who or what must achieve which object (goal)?· Next, the communication axis is determined: How does the subject access the object? And who or what should receive the object?· Finally, the actors of the conflict axis are uncovered: What resistance can the subject expect to meet? And what kind of help is needed to overcome this resistance? · Make an actant model of the current situation and follow up with potential scenarios. Worth considering · Test narrative scenarios by rotating an actor in different actant positions. · Do not just elaborate on the actants. Also describe the content of the relationships. Preparation Print many templates in A3 for the groups. The use of the Actant Model requires many repetitions. If necessary, also use post-its, so that it is easier to move the actors in the Aktant model.",
      description:
        "The actant model (Greimas, 1973) is traditionally used to examine and describe relationships, functions and actions in a storytelling. However, the model can also be an effective tool for initiating development processes through narrative scenarios. The special strength of the actant model is that it acts as a checklist of projects’ key actors and at the same time creates a coherent  picture of relationships, functions and possible actions. In short, the actant model can be used as a tool for identifying possible  development strategies, project planning and communication.  The actant model consists of 6 roles, which are called actants: · Subject - Who is the “main character” · Object - The subject always has a project, a goal or something he / she wants to grasp. · Opponent - Who or what is trying to prevent the subject from reaching the object? · Helper - Who or what helps the subject get the object? · Giver - Who or what gives away the object? · Recipient - Who or what gets the object in the end?",
      sources: "Sources"
    };
  }

  render() {
    var routes = [];
    METHOD_ITEMS.forEach((item) => {
      var path = "/" + _.snakeCase(item.title);
      console.log(path);
      routes.push(
        <Route
          exact
          path={path}
          element={<SingleMethodPage methodInfo={item} />}
        />
      );
    });

    return (
      <Router>
        <div></div>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <MethodsPage methods={METHOD_ITEMS} categories={CATEGORY_ITEMS} />
            }
          />
          {routes}
        </Routes>
      </Router>
    );
  }
}
