var request = require("request");

var options = { method: 'POST',
  url: 'http://challenge.code2040.org/api/prefix',
  body: {
    token: '70df2892854eeee321b54771a9d0feee'
   },
  json: true
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  var prefix = body.prefix;
  var prevArray = body.array;
  var currArray = [];
  for (var i = 0 ; i < prevArray.length; i++) {
    var word = prevArray[i];
    if (word.substring(0, prefix.length) !== prefix) {
      currArray.push(word);
    }
  }

  var request = require("request");

  var options = { method: 'POST',
    url: 'http://challenge.code2040.org/api/prefix/validate',
    body: {
      token: '70df2892854eeee321b54771a9d0feee',
      array: currArray
    },
    json: true
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });
});
