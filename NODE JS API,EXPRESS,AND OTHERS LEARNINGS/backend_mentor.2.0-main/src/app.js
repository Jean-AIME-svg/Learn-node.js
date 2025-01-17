

//****FILE SYSTEM MODULE */

const fs = require("fs");
//Create a file
fs.writeFile(
  "Overlap.txt",
  "This is the general overview of what i studied in this tutorial",
  (err) => {
    /**fs.writeFile is used to create a file */
    if (err) {
      console.log(err);
    } else {
      console.log("File was successfully created");
    }
  }
);

//Reading a file
fs.readFile("overlap.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("ERROR OCCURRED", err);
  } else {
    console.log(data);
  }
}); /**Note that you need to specify the type of encoding 
since everything is initially in hexadecimal */

/****Rename a file */
fs.rename("test.txt", "test.txt", (err, file) => {
  /**test.txt was renamed to test.txt */
  if (err) {
    console.log("AN ERROR OCCURRED", err);
  } else {
    console.log("File was successfully renamed");
  }
});

/****AppendFile */ /**When you need  to append additional data to the file */

fs.appendFile("test.txt", " Some data being appended", (err, file) => {
  if (err) {
    console.log("ERROR OCCURRED", err);
  } else {
    console.log("File was successfully appended");
  }
});

/***Deleting a file */
fs.unlink("test.txt", (err) => {
  if (err) {
    console.error("AN ERROR OCCURRED", err);
  } else {
    console.log("File was successfully deleted");
  }
});

//****FILE SYSTEM PART 2 */

/****making/creating directory with: mkdir*/
/***writing/creating file with: writeFile*/
fs.mkdir("./test/test.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile("./pedro__underg/test.txt", "123", (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Successfully created file");
      }
    });
  }

  /****Deleting file or directory with: unlink */
  /****And with: rmdir */
  fs.unlink("./test/test.txt", (err) => {
    if (err) {
      console.log(err);
    } else {
      fs.rmdir("test", (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`File was given its belongings`);
        }
      });
    }
  });
});

/*****Reading directory with: readdir */

fs.readdir("test", (err, files) => {
  if (err) {
    console.error(err);
  } else {
    console.log(files);
    for (let file of files) {
      fs.unlink("./b_.txt" + file, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("File kicked off");
        }
      });
    }
  }
});

fs.readdir("./test", (err, files) => {
  if (err) {
    console.error(err);
  } else {
    for (let file of files) {
      fs.unlink("./test" + file, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Ass-file kicked off");
        }
      });
    }
  }
});

/****READABLE AND WRITABLE MODULES */
/**readable stream */ //const fs = require('fs')
const readStream = fs.createReadStream("./test.txt", "utf-8");
const writeStream = fs.createWriteStream("test2.txt");

/**listen for events */
readStream.on("data", (chunk) => {
  setTimeout(() => {
    console.log(chunk); //chunk makes it easy to immediately manipulate it
    /**writable stream  */
    writeStream.write(chunk);
  }, 7000);
  //with streams,you can just start to use the file before it is fully loaded
});

/*****PIPES AND PIPE CHAINING */
/**takes a given stream to put the stream to the destination */
const myReadStream = fs.createReadStream("./t.txt", "utf8");
const myWriteStream = fs.createWriteStream("mine2.txt");
readStream.pipe(writeStream);

/**Note:ReadStream is the source while the writeStream is the destination */
/***Zlib module */
const zlib = require("zlib");
const gzip = zlib.createGzip(); //Zipped
const gunzip = zlib.createGunzip(); //unzipped file
readStream.pipe(gzip).pipe(writeStream); //zipped file
readStream.pipe(gunzip).pipe(writeStream); //Unzipped file

/***Stream files for zipped-pipe file */
const readStream_zipped = fs.createReadStream("./test2.txt", "utf8");
const writeStream_zipped = fs.createWriteStream("compressed.txt.gz");

/***stream files for Unzipped-piped file */
const readStreamGunzip = fs.createReadStream("./compressed.txt.gz", "utf8");
const writeStreamGunzip = fs.createWriteStream("Uncompressed.txt.");

/*******HTTP SERVER with HTTP MODULE ***/
const http = require("http");
const server = http.createServer((req, res) => {
  res.write("Hello world from Nodejs");
  console.log("Successfully created server");
  res.end();
  /***To only give response when it is the real domain */
  if (req.url === "/") {
    res.write("Listening at port 3000...");
    res.end();
  } else {
    res.write("Using some other domain...");
    res.end(); //Response is gonna be for anything we type
  }
});
server.listen(3000);

/*******Serving static files with 'http' and 'File system' modules */
//const fs = require('fs');
http
  .createServer((req, res) => {
    /**Header with html file */
    const readStream_html = fs.createReadStream(
      "./static/index.html" /*,'./package.json'*/
    );
    res.writeHead(200, { "Content-type": "text/html" }); //creates header from my response

    /**Header with json file */
    //const readStream_json = fs.createReadStream('./static/package.json');
    //res.writeHead(200,{'Content-type':'application/json'});

    /**Header with images */
    const readStream_image = fs.createReadStream("./static/Messi.png");
    res.writeHead(200, { "Content-type": "image/png" });
    //header helps the customer know the type of data expected

    /**chaining pipes through response */
    readStream_html.pipe(res);
    //readStream_image.pipe(res);
    //readStream_json.pipe(res);

    /**Sending responsive server */
    res.write("Listening at port 4000..."); //200 is the status code
    res.end("Waiting for changes");
    /**Note that calling a write() method after calling end() will raise an error */
  })
  .listen(4000);

/****WORKING WITH NPM PACKAGES */
const _ = require("lodash");
let example = _.fill([1, 2, 3, 4, 5, 6], "banana", 1, 4);

console.log(example);

/**SEMANTIC VERSIONING */
//"lodash":"^4.17.11" //major.minor.patch
//minor update : ^4.18.11:Adds new functionality : non-breaking change
//major update:^5.0.0 : means there was a breaking change
//~4.17.11 : 4.17.x only changes the last:patch

/***EXPRESS WEB FRAMEWORK */
//continued with expres.js file still in this directory
