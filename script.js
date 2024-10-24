(function () {
  const example = document.getElementById('example');
  const cw1 = document.getElementById('cw1');
  const cw2 = document.getElementById('cw2');
  const cw3 = document.getElementById('cw3');
  const answer = document.getElementById('answer');

  function showLoading() {
    const loading = document.createElement('div');
    loading.id = 'loading';
    loading.innerHTML = 'Loading…';
    document.body.appendChild(loading);
  }

  function clearLoading() {
    const loading = document.getElementById('loading');
    if (loading) {
      loading.remove(); 
    }
  }

  function clearAnswer() {
    answer.innerHTML = ''; 
  }

  example.addEventListener("click", function () {
    showLoading(); 
    clearAnswer(); 
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array); 
        clearLoading(); 
        answer.innerHTML = JSON.stringify(array);
      });
  });

  cw1.addEventListener("click", function () {
    showLoading(); 
    clearAnswer(); 
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array); 
        clearLoading(); 

        
        const ul = document.createElement('ul');

        
        array.forEach(post => {
          const li = document.createElement('li');
          li.innerHTML = `<strong>${post.title}</strong><p>${post.body}</p>`;
          ul.appendChild(li);
        });

        
        answer.appendChild(ul);
      });
  });

  cw2.addEventListener("click", function () {
    const postId = 1; 
    showLoading(); 
    clearAnswer(); 
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => response.json())
      .then(post => {
        console.log(post); 
        clearLoading(); 

        
        answer.innerHTML = `<strong>${post.title}</strong><p>${post.body}</p>`;
      });
  });

  cw3.addEventListener("click", function () {
    showLoading(); 
    clearAnswer(); 
    const newPost = {
      title: 'Nowy post',
      body: 'To jest treść nowego posta.',
      userId: 1 
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPost)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data); 
      clearLoading(); 
      answer.innerHTML = `Dodano nowy post o ID = ${data.id}`; 
    })
    .catch(error => {
      clearLoading(); 
      answer.innerHTML = 'Wystąpił błąd podczas dodawania posta.';
      console.error('Error:', error);
    });
  });

})();
