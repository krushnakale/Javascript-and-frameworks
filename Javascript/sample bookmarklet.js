javascript:(function() {
    alert("Hello, bookmarklet!");
  })();
  
  var bookmarkletCode = `(function() {
    document.body.style.backgroundColor = "red";
  })();`;
  
  var encodedBookmarklet = encodeURIComponent(bookmarkletCode);
  