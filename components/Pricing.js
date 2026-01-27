<script>
function Pricing() {
  const Pricing = document.getElementById("Pricing");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div class="text-body d-flex flex-column align-items-center">
    <h2 class="text-center fw-bold">Planes para Microempresas</h2>
    <p class="text-center">
      Elige tu tier: Desde prueba gratis hasta custom. ROI en semanas.
    </p>
  </div>
  <div class="row mt-5">
    <!-- Basic -->
    <div class="pricing-table position-relative col-lg-4 col-md-6 col-sm-12">
      <div class="inner-box overflow-hidden position-relative">
        <div class="title">Starter</div>
        <div class="price">
          €29 <span class="duration">/ mes</span>
        </div>
        <div class="table-content">
          <ul>
            <li><span><i class="bi bi-check2"></i>1 Workflow Template</span></li>
            <li><span><i class="bi bi-check2"></i>Dashboard Básico</span></li>
            <li><span><i class="bi bi-check2"></i>User Login (1 user)</span></li>
            <li><span><i class="bi bi-x"></i>Custom Integrations</span></li>
          </ul>
        </div>
        <div class="table-footer">
          <a href="https://www.hostinger.com/horizons" class="button btn-theme-1" target="_blank">Empezar Gratis</a>
        </div>
      </div>
    </div>
    
    <!-- Recommended -->
    <div class="pricing-table position-relative tagged col-lg-4 col-md-6 col-sm-12">
      <div class="inner-box overflow-hidden position-relative">
        <span class="tag bg-primary-300">Más Popular</span>
        <div class="title">Pro</div>
        <div class="price">
          €99 <span class="duration">/ mes</span>
        </div>
        <div class="table-content">
          <ul>
            <li><span><i class="bi bi-check2"></i>Workflows Ilimitados</span></li>
            <li><span><i class="bi bi-check2"></i>BI Dashboards Avanzados</span></li>
            <li><span><i class="bi bi-check2"></i>5 Users + Multi-Equipo</span></li>
            <li><span><i class="bi bi-check2"></i>Custom Template (1h)</span></li>
          </ul>
        </div>
        <div class="table-footer">
          <a href="https://www.hostinger.com/horizons" class="button btn-theme-1" target="_blank">Elegir Pro</a>
        </div>
      </div>
    </div>
    
    <!-- Enterprise -->
    <div class="pricing-table position-relative col-lg-4 col-md-6 col-sm-12">
      <div class="inner-box overflow-hidden position-relative">
        <div class="title">Enterprise</div>
        <div class="price">
          €299+ <span class="duration">/ mes</span>
        </div>
        <div class="table-content">
          <ul>
            <li><span><i class="bi bi-check2"></i>Todo Pro + Custom Dev</span></li>
            <li><span><i class="bi bi-check2"></i>API + White Label</span></li>
            <li><span><i class="bi bi-check2"></i>Users Ilimitados</span></li>
            <li><span><i class="bi bi-check2"></i>Consultoría Tobias</span></li>
          </ul>
        </div>
        <div class="table-footer">
          <a href="mailto:hello@indextechnologies.de?subject=Enterprise Quote" class="button btn-theme-1">Contactar</a>
        </div>
      </div>
    </div>
  </div>
  `;
  Pricing.appendChild(Container);
}
Pricing();
</script>
