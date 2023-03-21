/**
 * We have used the following API call:
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "```jsx\nimport PropTypes from \"prop-types\"\n\nfunction Button({ label, backgroundColor = \"red\", size = \"md\", handleClick }) {\n  let scale = 1\n  if (size === \"sm\") scale = 0.75\n  if (size === \"lg\") scale = 1.5\n  const style = {\n    backgroundColor,\n    padding: `${scale * 0.5}rem ${scale * 1}rem`,\n    border: \"none\",\n  }\n  return (\n    <button onClick={handleClick} style={style}>\n      {label}\n    </button>\n  )\n}\n\nButton.propTypes = {\n  label: PropTypes.string,\n  backgroundColor: PropTypes.string,\n  size: PropTypes.oneOf([\"sm\", \"md\", \"lg\"]),\n  handleClick: PropTypes.func,\n}\n\nexport default Button\n```\nGiven the React component above, generate several storybook stories in a file (and close it with \"```\") by combining the component porpTypes following this style:\n```jsx\nimport Button from \"../components/Button\"\n\nexport default {\n  title: \"Components/Button\",\n  component: Button,\n  argTypes: { handleClick: { action: \"handleClick\" } },\n}\n\nconst Template = args => <Button {...args} />\n\nexport const Green = Template.bind({})\nGreen.args = {\n  backgroundColor: \"green\",\n  label: \"Press Me\",\n  size: \"md\",\n}\n\nexport const Small = Template.bind({})\nSmall.args = {\n  backgroundColor: \"red\",\n  label: \"Press Me\",\n  size: \"sm\",\n}\n// To be continued\n```\n\n```jsx\nimport Button from \"../components/Button\"\n\nexport default {\n  title: \"Components/Button\",\n  component: Button,\n  argTypes: { handleClick: { action: \"handleClick\" } },\n}\n\nconst Template = args => <Button {...args} />\n\nexport const Red = Template.bind({})\nRed.args = {\n  backgroundColor: \"red\",\n  label: \"Press Me\",\n  size: \"md\",\n}\n\nexport const Green = Template.bind({})\nGreen.args = {\n  backgroundColor: \"green\",\n  label: \"Press Me\",\n  size: \"md\",\n}\n\nexport const Small = Template.bind({})\nSmall.args = {\n  backgroundColor: \"red\",\n  label: \"Press Me\",\n  size: \"sm\",\n}\n\nexport const Large = Template.bind({})\nLarge.args = {\n  backgroundColor: \"red\",\n  label: \"Press Me\",\n  size: \"lg\",\n}\n```",
  temperature: 0.7,
  max_tokens: 1024,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
});
 */

import Button from "../components/Button"

export default {
  title: "GPT3-FS/Button",
  component: Button,
  argTypes: { handleClick: { action: "handleClick" } },
}

const Template = args => <Button {...args} />

export const Red = Template.bind({})
Red.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "md",
}

export const Green = Template.bind({})
Green.args = {
  backgroundColor: "green",
  label: "Press Me",
  size: "md",
}

export const Small = Template.bind({})
Small.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "sm",
}

export const Large = Template.bind({})
Large.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "lg",
}