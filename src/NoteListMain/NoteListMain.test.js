import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import NoteListMain from "./NoteListMain";
it("renders without crashing", () => {
  const div = document.createElement("div");
  const props = {
    match: { params: {} },
    history: {
      push: () => {}
    }
  };
  ReactDOM.render(
    <BrowserRouter>
      <NoteListMain {...props} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
