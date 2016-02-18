const Boilerpipe = require('boilerpipe');
const fs = require('fs');

function extractHtml(url){
  let boilerpipe = new Boilerpipe({
    extractor: Boilerpipe.Extractor.Article,
    url: url
  });

  return new Promise(function(resolve, reject) {
    boilerpipe.getHtml((error, html) => {
      if(error) {
        reject('error happend when get html');
      }else{
        resolve(html);
      }
    });
  });
}

extractHtml(process.argv[2])
  .then(result => {
    fs.writeFile("./temp.html", result, err => {
      if(err) throw err;
      console.log("file write success");
    });
  })
  .catch(err => { console.log(err);});

  