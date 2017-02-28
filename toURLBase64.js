function toDataUrl(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    var reader = new FileReader();
    reader.onloadend = function() {
      callback(reader.result);
    }
    reader.readAsDataURL(xhr.response);
  };
  xhr.open('GET', url);
  xhr.responseType = 'blob';
  xhr.send();
}

toDataUrl('https://avatars2.githubusercontent.com/u/20767018?v=3&s=400', function(base64Img) {
  console.log(base64Img);
});
