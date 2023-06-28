function openNav() {
    document.getElementById("mobile-menu").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mobile-menu").style.width = "0%";
  }

const indexContent = document.getElementById('index-content');

    fetch('../index.html')
        .then(response => response.text())
        .then(data => {
            indexContent.innerHTML = data;
        })
        .catch(error => {
            console.error('Error al cargar el contenido de index.html:', error);
        });