
window.addEventListener('load', function() {
  document.getElementById('sampleeditor').setAttribute('contenteditable', 'true');
  document.getElementById('sampleeditor2').setAttribute('contenteditable', 'true');
});

function format(command, value) {
  document.execCommand(command, false, value);
}

function setUrl() {
  var url = document.getElementById('txtFormatUrl').value;
  var sText = document.getSelection();
  document.execCommand('insertHTML', false, '<a href="' + url + '" target="_blank">' + sText + '</a>');
  document.getElementById('txtFormatUrl').value = '';
}

function saveText() {
  var FileSaver = require('file-saver');
  var blob = new Blob(["Hello, world!"], { type: "text/plain;charset=utf-8" });
  FileSaver.saveAs(blob, "hello world.txt");
}

