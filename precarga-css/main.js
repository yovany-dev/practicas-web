async function requestInfo() {
    console.log('Cargando informacion...');

    // 1. Obtener la informacion de la API
    const data = await fetch('post.json');
    const json = await data.json();
    let html = '';

    // 2. Para cada post de van a descargar las imagenes
    for (let i = 0; i < json.posts.length; i++) {
        const post = json.posts[i];
        const [profileURL, photoURL] = await Promise.all([
            downloadImage(post.profile.photo),
            downloadImage(post.content.photo)
        ]);

        // 3. Crear la tarjeta para cada post
        html += `
            <div class="card-container">
                <div class="card-header">
                    <img src="${profileURL}" class="fadeIn">
                    <h3 class="fadeIn">${post.profile.name}</h3>
                </div>
                <div class="card-content">
                    <div class="card-text">
                        <p class="fadeIn">${post.content.text}</p>
                    </div>
                    <div class="card-image">
                        <img src="${photoURL}" class="fadeIn">
                    </div>
                </div>
            </div>
        `
    }

    // 4. Adjuntar tarjetas en #container
    console.log('Adjuntando contenido...');
    document.getElementById('container').innerHTML = html;
}

async function downloadImage(url) {
    console.log(`Descargando ${url}...`);
    const response = await fetch(`http://127.0.0.1:5500/img/${url}`);
    const blob = await response.blob();
    const imgURL = URL.createObjectURL(blob);
    console.log(`Descarga completa de ${url}`);
    return imgURL;
}

requestInfo();