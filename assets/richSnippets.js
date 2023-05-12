// Assurez-vous que la page est complètement chargée
document.addEventListener("DOMContentLoaded", function() {
    // Créez un élément de balise <script>
    var script = document.createElement("script");
    
    // Ajoutez le type et les attributs spécifiques pour les Rich Snippets
    script.type = "application/ld+json";
    
    // Définissez les données structurées des Rich Snippets
    script.innerHTML = JSON.stringify({
      "@context": "http://schema.org",
      "@type": "Website",
      "headline": "Nina Carducci, photographe à Bordeaux",
      "description": "Site de présentation du travail de Nina Carucci, photographe professionnelle et événementielle à Bordeaux",
      "author": {
        "@type": "Person",
        "name": "Nina Carducci"
      }
    });
    
    // Ajoutez le script à l'en-tête de la page
    document.getElementsByTagName("head")[0].appendChild(script);
  });
