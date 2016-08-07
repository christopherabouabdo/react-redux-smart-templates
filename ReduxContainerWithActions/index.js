
module.exports = {

    name: "Redux Container w/ Actions",

    directory: false,

    params: [
      "Component",
      "PathToComponentDir",
      "Actions",
      "PathToActionsDir"
    ],

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
