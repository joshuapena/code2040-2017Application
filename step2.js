var request = require("request");

var createString = function(string, index) {
    if (index < string.length) {
        return createString(string, index+1) + string[index];
    } else {
        return '';
    }
};

var options = { method: 'POST',
  url: 'http://challenge.code2040.org/api/reverse',
  body: { token: '70df2892854eeee321b54771a9d0feee' },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  var reversedString = createString(body, 0);

  var options = { method: 'POST',
    url: 'http://challenge.code2040.org/api/reverse/validate',
    body: {
      token: '70df2892854eeee321b54771a9d0feee',
      string: reversedString
    },
    json: true
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });
});
