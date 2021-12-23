import React from "react";
import reactDom from "react-dom";
import MainApp from "./App";

it('renders without crashing', () => {
    const div = document.createElement('div');
    reactDom.render(<MainApp />, div);
    reactDom.unmountComponentAtNode(div);
})