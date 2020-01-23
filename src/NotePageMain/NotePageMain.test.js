import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import NotePageMain from "./NotePageMain";
it.skip("renders a .NotePageMain by default", () => {
  const props = {
    match: { params: {} }
  };

  const wrapper = shallow(<NotePageMain {...props} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
