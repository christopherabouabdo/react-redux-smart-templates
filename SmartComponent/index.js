
module.exports = {

    name: "Smart Component",

    directory: false,

    params: ["Name"],

    rules: function(config) {

      return({
        items: [
          {
            destinationFile: `${config.Name}.js`,
            sourceTemplateFile: "SmartComponent.template"
          },
        ]
      });

    }

}
