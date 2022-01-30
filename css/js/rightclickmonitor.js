if (document.addEventListener) {
    document.addEventListener('contextmenu', function(e) {
      alert("Oh... so now you want to... Right Click? Ironic.");
      e.preventDefault();
    }, false);
  } else {
    document.attachEvent('oncontextmenu', function() {
      alert("Oh... so now you want to... Right Click? Ironic.");
      window.event.returnValue = false;
    });
  }