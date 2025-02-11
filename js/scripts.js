// Asegúrate de incluir la librería js-yaml (si usas CDN, agrégala en tu HTML)
<script src="https://cdnjs.cloudflare.com/ajax/libs/js-yaml/4.1.0/js-yaml.min.js"></script>

// Función para leer y procesar el archivo YAML
function loadConfig() {
  fetch('/config.yml')
    .then((response) => {
      if (!response.ok) throw new Error(`Error al cargar config.yml: ${response.status}`);
      return response.text();
    })
    .then((yamlText) => {
      const config = jsyaml.load(yamlText);  // Convierte YAML a objeto JavaScript
      
      // Usar la configuración para cargar el Hero Section
      loadHeroSection(config.hero);
      // Usar la configuración para el botón de ofertas
      loadOffersSection(config.offers);
    })
    .catch((error) => console.error('Error al procesar config.yml:', error));
}

// Cargar Hero Section con los datos de config.yml
function loadHeroSection(heroConfig) {
  // Cargar el título y texto de la configuración
  document.getElementById('hero-title').innerText = heroConfig.title;
  document.getElementById('hero-text').innerHTML = heroConfig.text;
  
  // Cambiar las imágenes según las configuraciones
  const mobileImg = document.querySelector('.hero img.d-flex.d-md-none');
  const desktopImg = document.querySelector('.hero img.d-none.d-md-flex');
  mobileImg.src = heroConfig.image_mobile;
  desktopImg.src = heroConfig.image_desktop;

  // Cargar el archivo Markdown si existe
  if (heroConfig.markdown_file) {
    renderMarkdown(heroConfig.markdown_file, 'hero-title', 'hero-text');
  }
}

// Cargar Offers Section con los datos de config.yml
function loadOffersSection(offersConfig) {
  const button = document.querySelector('.Black_Box .button-text');
  button.innerText = offersConfig.button_text;
  
  const offerLink = document.querySelector('.Black_Box a');
  offerLink.href = offersConfig.link;
}

// Función para renderizar Markdown
function renderMarkdown(filePath, titleId, textId) {
  fetch(filePath)
    .then((response) => {
      if (!response.ok) throw new Error(`Error al cargar ${filePath}: ${response.status}`);
      return response.text();
    })
    .then((markdown) => {
      const htmlContent = marked(markdown); // Convierte Markdown a HTML
      
      // Dividir el contenido para que el título y el texto se ubiquen correctamente
      const parts = htmlContent.split("\n");
      
      // Coloca el título
      document.getElementById(titleId).innerHTML = parts[0].replace('# ', ''); // Elimina el `#` del título
      // Coloca el texto
      document.getElementById(textId).innerHTML = parts.slice(1).join("\n"); // El resto es texto
    })
    .catch((error) => console.error('Error al procesar Markdown:', error));
}

// Llamar a la función loadConfig para cargar la configuración al cargar la página
loadConfig();