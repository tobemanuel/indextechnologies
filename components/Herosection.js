<script>
function Herosection() {
  const Herosection = document.getElementById("Herosection");
  const Container = document.createElement("div");
  const BG = document.createElement("div");
  Container.classList.add("container");
  BG.classList.add("hero-bg");
  Container.innerHTML = `
  <div class="row row-cols-2 gx-5 gy-5">
    <div class="text-wrapper col-12 col-lg-7">
      <div class="text-body">
        <h1 class="fw-bold">
          Automations & BI para Microempresas<br><span class="text-primary">1-50 Empleados</span>
        </h1>
        <p class="mt-3">
          Plataforma Horizons: Templates listos (QC, facturación, dashboards). 
          5 min setup, sin IT teams. Rhein-Neckar ↔ Paraguay compliant.
        </p>
      </div>
      <div class="btns-group mt-3">
        <a class="button btn-theme-default" href="https://www.hostinger.com/horizons" target="_blank">
          Prueba Gratis 14 Días
        </a>
        <a class="button btn-theme-2" href="#demo">
          <i class="bi bi-play-circle me-2"></i> Ver Demo
        </a>
      </div>
    </div>
    <div class="mockup-img col-12 col-lg-5 overflow-hidden d-flex justify-content-center">
      <img class="img-fluid" src="./Images/horizons-dashboard.png" alt="Dashboard BI Live" />
    </div>
  </div>
  `;
  BG.innerHTML = `
    <img class="band left-bands" src="./Images/left-bands.svg" />
    <img class="band right-bands" src="./Images/right-bands.svg" />
    <div class="bg"></div>
    <img class="purple-circle" src="./Images/Purple Circle.svg" />
  `;
  Herosection.appendChild(Container);
  Herosection.appendChild(BG);
}
Herosection();
</script>
