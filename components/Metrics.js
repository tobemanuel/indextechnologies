<script>
function Metrics() {
  const Metrics = document.getElementById("Metric");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
    <div class="row row-cols-1 row-cols-lg-2 gy-5 gx-5">
      <div class="text-body col">
        <h2 class="fw-bold">Resultados para Microempresas como la Tuya</h2>
        <p class="Description mt-2">
          Templates probados que ahorran 60% tiempo. Mercado: 3.4M firmas 1-50 empleados DE.
        </p>
      </div>
      <div class="content col">
        <div class="row row-cols-1 row-cols-md-2 gy-4 gx-4">
          <div class="content-item d-flex align-items-center col">
            <div class="icon">
              <img src="./Images/clients-icon.svg" alt="Clientes" />
            </div>
            <div class="text ms-3">
              <div class="title fw-bold">500+</div>
              <div class="Description">Microempresas Automatizadas</div>
            </div>
          </div>
          <div class="content-item d-flex align-items-center col">
            <div class="icon">
              <img src="./Images/workflows-icon.svg" alt="Workflows" />
            </div>
            <div class="text ms-3">
              <div class="title fw-bold">10+</div>
              <div class="Description">Templates Pre-Built</div>
            </div>
          </div>
          <div class="content-item d-flex align-items-center col">
            <div class="icon">
              <img src="./Images/savings-icon.svg" alt="Ahorro" />
            </div>
            <div class="text ms-3">
              <div class="title fw-bold">60%</div>
              <div class="Description">Tiempo Ahorrado</div>
            </div>
          </div>
          <div class="content-item d-flex align-items-center col">
            <div class="icon">
              <img src="./Images/growth-icon.svg" alt="ROI" />
            </div>
            <div class="text ms-3">
              <div class="title fw-bold">2-4x</div>
              <div class="Description">ROI en Meses</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  Metrics.appendChild(Container);
}
Metrics();
</script>
