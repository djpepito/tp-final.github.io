export async function getPosts(nombre, email, mensaje) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    const postsContainer = document.getElementById('posts-container');

    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      `;

      postsContainer.appendChild(postElement);
    });

    
    alert('¡Reserva tomada con éxito!');
    document.getElementById('miFormulario').reset();
  } catch (error) {
    console.error('Error al obtener los posts:', error);
  }
}


 
export async function enviarDatos(nombre, email, mensaje) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nombre,
        email,
        mensaje
      })
    });

    if (response.ok) {
      alert('Datos enviados correctamente');
    } else {
      console.error('Error al enviar los datos:', response.statusText);
    }
  } catch (error) {
    console.error('Error al enviar los datos:', error);
  }
}
