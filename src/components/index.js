const components = {};

const requireComponent = require.context(
  '.', true, /\w+\.jsx$/
);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);
  const componentName = fileName.replace(/(\.\/|\.jsx)/g, '').replace(/(\/index)/g, '');
  components[componentName] = componentConfig.default || componentConfig;
});

module.exports = components
