$(function(){
  $('.studyArea, .flex-code, .css-code').each(function(i){
    var codeArea = $(this);
    var codeHtml = codeArea.html();
    if(codeArea.hasClass('hidden')) codeArea.empty();
    CodeMirror($(this)[0], {
      value: codeHtml,
      mode: 'htmlmixed',
      lineNumbers: !$(this).is('.inline'),
      readOnly: true,
      styleActiveLine: false,
      autoClearEmptyLines:true,
      lineWrapping: true,
      matchBrackets: true,
      theme: 'monokai'
    });
  });
});