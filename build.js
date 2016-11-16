var path = require('path');
var stealTools = require('steal-tools');

var config = {
  config: path.join(__dirname, 'package.json!npm')
};

stealTools.build(config)
  .then(function() {
    console.log('DONE!');
  })
  .catch(function(error) {
    if (typeof error === 'string') {
      console.log(error);
    }
    else {
      console.log('Error: ', error.message);
      console.log(error.stack);
    }
  });
