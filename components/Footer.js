<script>
function Footer() {
  const Footer = document.getElementById("Footer");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div class="row gx-4 gy-5">
    <div class="col-12 col-md-10 left-section">
      <div class="brand-logo">
        <a class="navbar-brand" href="#home">
          <img class="BrandLogo" src="./Images/logo-indextech.svg" alt="Index Technologies" />
        </a>
      </div>
      <div class="nav-links d-flex flex-column mt-4">
        <ul class="nav justify-content-left row-1">
          <li class="nav-item">
            <a class="nav-link active" href="https://www.hostinger.com/horizons" target="_blank">Prueba Gratis</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#pricing">Precios</a>
          </li>
        </ul>
        <ul class="nav justify-content-left row-2">
          <li class="nav-item">
            <a class="nav-link" href="#about">Sobre Nosotros</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#services">Servicios</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#features">Templates</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#faq">FAQ</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contacto</a>
          </li>
        </ul>
      </div>
      <div class="copyrights mt-4">
        © 2026 Index Technologies GmbH. Tobias Emanuel, SRH Heidelberg. 
        <a class='text-decoration-underline' href="mailto:hello@indextechnologies.de">hello@indextechnologies.de</a>
      </div>
    </div>
    <div class="col-12 col-md-2 badges">
      <p>Síguenos</p>
      <div class="badges-items me-3 d-block">
        <a class="badge-item text-decoration-none" href="https://linkedin.com/company/indextechnologies" target="_blank">
          <img class="item" src="./Images/linkedin.svg" alt="LinkedIn" />
        </a>
        <a class="badge-item text-decoration-none" href="https://github.com/tuusuario/indextechnologies" target="_blank">
          <img class="item mt-md-3" src="./Images/github.svg" alt="GitHub" />
        </a>
      </div>
    </div>
  </div>
  `;
  Footer.appendChild(Container);
}
Footer();
</script>
