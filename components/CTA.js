<script>
function CTA() {
  const CTA = document.getElementById("CTA");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div class="row row-cols-1 row-cols-lg-2 gx-5">
    <div class="text-body col py-5">
      <h2 class="title fw-bold">
        Plataforma Horizons: Automations & BI desde cualquier dispositivo
      </h2>
      <p>
        Accede a workflows listos (QC, facturación, CRM), dashboards en tiempo real y 
        optimizaciones DE-PY. Regístrate gratis, configura en 5 min, mide ROI instantáneo.
        ¡Sin IT teams para microempresas (1-50 empleados)!
      </p>
      <div class="badges mt-5">
        <p>¡Prueba Gratis Ahora!</p>
        <div class="badges-items me-3 d-none d-sm-block">
          <a class="badge-item text-decoration-none" href="https://www.hostinger.com/horizons" target="_blank">
            <img class="item" src="./Images/horizons-badge.png" alt="Horizons Platform" />
          </a>
          <a class="badge-item text-decoration-none" href="https://indextechnologies.de/demo" target="_blank">
            <img class="item" src="./Images/demo-badge.png" alt="Live Demo" />
          </a>
        </div>
      </div>
    </div>
    <div class="col container-body overflow-hidden">
      <img class="img-fluid" src="./Images/dashboard-mockup.png" alt="BI Dashboard Demo" />
    </div>
  </div>
  `;
  CTA.appendChild(Container);
}
CTA();
</script>
