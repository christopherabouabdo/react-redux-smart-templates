
module.exports = {

    name: "Redux Container",

    directory: false,

    params: [ "Component", "PathToComponentDir" ],

    rules: function(config) {

      return({
        items: [
          {
            destinationFile: `${config.Component}Container.js`,
            sourceTemplateFile: "ReduxContainer.template"
          },
        ]
      });

    }

}
