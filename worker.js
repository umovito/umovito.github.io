self.addEventListener('message', function(e) {
  if(e.data === 'hang the browser') {
    let val = "";
  
    for (let i = 0; i < 10000; i++) {
      for (let j = 0; j < 10000; j++) {
        val = "Worker returned: " + i + j;
      }
    }
    
    self.postMessage(val);
  }
});