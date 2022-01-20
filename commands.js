const fs = require("fs");
const rq = require("request");
module.exports = {
  pwd: function () {
    resultCommands(process.argv[1]);
  },
  echo: function (input, done) {
    done(input)
  },
  ls: function (input, done) {
    fs.readdir(dirname, function (err, files) {
      if (err) throw err;
      let arrayLs = [];
      files.forEach(function (file) {
        arrayLs.push(file.toString());
      });
      let aux = arrayLs.join("\n");
      done(aux)
    });
  },
  cat: function (input, done) {
    fs.readFile(dirname + "/" + input, "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      done(data);
    });
    
  },
  head: function (input, done) {
    fs.readFile(dirname + "/" + input, function (err, data) {
      if (err) throw err;

      const arr = data.toString().replace(/\r\n/g, "\n").split("\n");
      let arrayDeInput = [];

      for (let i = 0; i < 5; i++) {
        arrayDeInput.push(arr[i]);
      }
      let aux = arrayDeInput.join("\n");
      done(aux);
    });
  },
  tail: function (input,done) {
    fs.readFile(dirname + "/" + input, function (err, data) {
      if (err) throw err;
      const arr = data.toString().replace(/\r\n/g, "\n").split("\n");
      let arrayDeTail = [];
      for (let i = arr.length - 5; i < arr.length; i++) {
        arrayDeTail.push(arr[i]);
      }
      let aux = arrayDeTail.join("\n");
      done(aux);
    });
  },
sort: function (input,done) {
    fs.readFile(dirname + "/" + input, function (err, data) {
      if (err) throw err;
      let arr = data.toString().replace(/\r\n/g, "\n").split("\n");
      let arrOrdenado = bubbleSort(arr);
      let string = arrOrdenado.join("\n");
      done(string);
    });
  },
  wc: function (input,done) {
    fs.readFile(dirname + "/" + input, function (err, data) {
      if (err) throw err;
      let arr = data.toString().replace(/\r\n/g, "\n").split("\n");
      done(arr.length)
    });
  },
  curl: function (input) {
    rq(input, function (error, response, body) {
      console.error("error:", error);
      done(body)
    });
  },
};



function bubbleSort(array) {
  let largoArr = array.length;
  for (let i = 0; i < largoArr; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j);
      }
    }
  }
  return array;
}

function swap(array, posicion) {
  let temp = array[posicion];
  array[posicion] = array[posicion + 1];
  array[posicion + 1] = temp;
}