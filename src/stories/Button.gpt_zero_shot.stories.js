/**
 * We have used the following API call:
 const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "Given the following React component, generate a storybook file for it with some stories:\n```jsx\nimport PropTypes from \"prop-types\"\n\nfunction Button({ label, backgroundColor = \"red\", size = \"md\", handleClick }) {\n  let scale = 1\n  if (size === \"sm\") scale = 0.75\n  if (size === \"lg\") scale = 1.5\n  const style = {\n    backgroundColor,\n    padding: `${scale * 0.5}rem ${scale * 1}rem`,\n    border: \"none\",\n  }\n  return (\n    <button onClick={handleClick} style={style}>\n      {label}\n    </button>\n  )\n}\n\nButton.propTypes = {\n  label: PropTypes.string,\n  backgroundColor: PropTypes.string,\n  size: PropTypes.oneOf([\"sm\", \"md\", \"lg\"]),\n  handleClick: PropTypes.func,\n}\n\nexport default Button\n```\n```jsx\nimport React from \"react\";\nimport { storiesOf } from \"@storybook/react\";\nimport Button from \"./Button\";\n\nstoriesOf(\"Button\", module).add(\"Default\", () => <Button label=\"Default\" />);\n\nstoriesOf(\"Button\", module).add(\"Small\", () => <Button label=\"Small\" size=\"sm\" />);\n\nstoriesOf(\"Button\", module).add(\"Large\", () => <Button label=\"Large\" size=\"lg\" />);\n\nstoriesOf(\"Button\", module).add(\"Custom Color\", () => (\n  <Button label=\"Custom Color\" backgroundColor=\"blue\" />\n));\n\nstoriesOf(\"Button\", module).add(\"Custom Click Handler\", () => (\n  <Button label=\"Custom Click Handler\" handleClick={() => alert(\"clicked\")} />\n));\n```",
  temperature: 0.7,
  max_tokens: 512,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
});
 */

// We only modified the Button component path

import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../components/Button"; // It must be fixed

storiesOf("GPT3-ZS/Button", module).add("Default", () => <Button label="Default" />);

storiesOf("GPT3-ZS/Button", module).add("Small", () => <Button label="Small" size="sm" />);

storiesOf("GPT3-ZS/Button", module).add("Large", () => <Button label="Large" size="lg" />);

storiesOf("GPT3-ZS/Button", module).add("Custom Color", () => (
  <Button label="Custom Color" backgroundColor="blue" />
));

storiesOf("GPT3-ZS/Button", module).add("Custom Click Handler", () => (
  <Button label="Custom Click Handler" handleClick={() => alert("clicked")} />
));