
module.exports = {

    name: "Redux Reducer",

    directory: false,

    params: ["Name"],

    rules: function(config) {

      return({
        items: [
          {
            destinationFile: `${config.Name}.js`,
            sourceTemplateFile: "ReduxReducer.template"
          },
        ]
      });

    }

}
