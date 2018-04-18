
function _render (div, content) {
  if (window.$ === undefined) {
    return setTimeout(function () {
      _render(div, content)
    }, 400)
  }
  $(div).html(content)
}

// $('<input/>', {
//     'type': 'Text',
//     'value':'Some Text',
//     prop: { size: "30" }
// }).appendTo("body");
