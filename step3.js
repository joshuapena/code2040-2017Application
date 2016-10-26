var request = require("request");

var options = { method: 'POST',
  url: 'http://challenge.code2040.org/api/haystack',
  body: {
    token: '70df2892854eeee321b54771a9d0feee'
  },
  json: true
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  var options = { method: 'POST',
    url: 'http://challenge.code2040.org/api/haystack/validate',
    body: {
      token: '70df2892854eeee321b54771a9d0feee',
      needle: body.haystack.indexOf(body.needle)
    },
    json: true
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });
});
