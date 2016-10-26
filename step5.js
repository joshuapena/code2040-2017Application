var request = require("request");

var options = { method: 'POST',
  url: 'http://challenge.code2040.org/api/dating',
  body: {
    token: '70df2892854eeee321b54771a9d0feee'
  },
  json: true
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  var oldDate = new Date(body.datestamp);
  var newDate = new Date(oldDate.getTime() + body.interval*1000);

  var returnString = newDate.toISOString();
  returnString = returnString.substring(0, returnString.indexOf('.000Z'))+'Z';

  var options = { method: 'POST',
    url: 'http://challenge.code2040.org/api/dating/validate',
    body: {
      token: '70df2892854eeee321b54771a9d0feee',
      datestamp: returnString
    },
    json: true
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });
});
