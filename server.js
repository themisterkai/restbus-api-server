var restbus = require('restbus');

var port = process.env.PORT || '3535';

restbus.listen(port, function() {
  console.log('restbus is now listening on port 3535');
});