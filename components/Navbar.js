<script>
function Navbar() {
  const navbar = document.getElementById("Navbar");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div class="nav-left d-flex" id="navbarNav">
    <a class="navbar-brand me-5" href="#home">
      <img class="BrandLogo" src="./Images/logo-indextech-white.svg" alt="Index Technologies" />
    </a>
    <ul class="navbar-nav d-none d-lg-flex">
      <li class="nav-item">
        <a class="nav-link" href="#features">Templates</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#pricing">Precios</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#faq">FAQ</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#contact">Contacto</a>
      </li>
    </ul>
  </div>
  <div class="nav-right d-flex align-items-center">
    <div class="badges-items me-3 d-none d-sm-block">
      <a class="badge-item text-decoration-none" href="https://www.hostinger.com/horizons" target="_blank">
        <img class="item" src="./Images/prueba-gratis-badge.png" alt="Prueba Gratis" />
      </a>
      <a class="badge-item text-decoration-none" href="#demo">
        <img class="item" src="./Images/demo-badge.png" alt="Live Demo" />
      </a>
    </div>
    <button class="btn collapsed d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
  
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasRightLabel">Index Technologies</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
    </div>
    <div class="offcanvas-body">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#features">Templates</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#pricing">Precios</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#faq">FAQ</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact">Contacto</a>
        </li>
      </ul>
      <div class="badges-items h-100 mt-3 d-flex flex-column">
        <a class="badge-item text-decoration-none" href="https://www.hostinger.com/horizons" target="_blank">
          <img class="item" src="./Images/prueba-gratis-badge.png" alt="Prueba Gratis" />
        </a>
        <a class="badge-item text-decoration-none" href="#demo">
          <img class="item" src="./Images/demo-badge.png" alt="Live Demo" />
        </a>
      </div>
    </div>
  </div>
  `;
  navbar.appendChild(Container);
}
Navbar();
</script>
