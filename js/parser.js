// <{<{<{<{<{<{<{<{<{<{<{<    Parser    >}>}>}>}>}>}>}>}>}>}>}>
//todo:  for insert take without - window.addEventListener('DOMContentLoaded', () => {

window.addEventListener('DOMContentLoaded', () => {

  const body = document.querySelector('body');
  let textNodes = [];

  // <{<{<{<{<{<{<{<{<{<{<{<    parsing & writting to array    >}>}>}>}>}>}>}>}>}>}>}>
  function recursy(element) {
    element.childNodes.forEach(node => {

      if (node.nodeName.match(/^H\d/)) {        //todo: string starts(^) with big letter(H) than(\) go number(d) 
        const obj = {
          header: node.nodeName,
          content: node.textContent.trim()
        };
        textNodes.push(obj);
      } else {
        recursy(node);
      }

    });
  }
  recursy(body);
  
  

// <{<{<{<{<{<{<{<{<{<{<{<    sending to server    >}>}>}>}>}>}>}>}>}>}>}>
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(textNodes)
  })
  .then(response => response.json())
  .then(json => console.log(json));
  
})



  // const body = document.querySelector('body');
  // body.childNodes.forEach(node => {
  //   console.log(node);
  // })