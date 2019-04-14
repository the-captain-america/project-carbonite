
const boolStyle = (key, value) => props => {
  return props[key] ? value : null;
};

export default boolStyle;