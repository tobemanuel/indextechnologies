<script>
function Testimonial() {
  const Testimonial = document.getElementById("Testimonial");
  const Container = document.createElement("div");
  Container.classList.add("container", "position-relative");
  Container.innerHTML = `
  <div class="testimonial-items row row-cols-1 row-cols-lg-2 gx-5 align-items-center position-relative">
    <div class="text-body position-absolute">
      <div class="quote-mark position-absolute">
        <img src="./Images/quote-mark.png" alt="Quote" />
      </div>
      <h2 class="title fw-bold">Historias de Microempresas Reales</h2>
      <p>Resultados probados en Rhein-Neckar y Paraguay.</p>
    </div>
    
    <div class="col">
      <div class="testimonial-item bg-white rounded item-1 shadow">
        <div class="client-logo">
          <img src="./Images/manufacturing-logo.svg" alt="Manufactura PY" />
        </div>
        <div class="content mt-3">
          <div class="feed-personalDetails">
            <p class="feed">
              "QC automation salvó 3h/día. Templates listos, GDPR ok para exports DE. 
              Plataforma Horizons es perfecta para startups."
            </p>
            <div class="personal-detail d-flex flex-column mt-3">
              <span class="per-name fw-bold">Carlos López</span>
              <span class="per-role">CEO, Manufactura PY (15 empleados)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="col mt-4">
      <div class="testimonial-item bg-white rounded shadow">
        <div class="client-logo">
          <img src="./Images/trade-logo.svg" alt="Trade Rhein-Neckar" />
        </div>
        <div class="content mt-3">
          <div class="feed-personalDetails">
            <p class="feed">
              "Facturación DE-PY auto en 10 min. ROI inmediato, sin programador. 
              Recomendado para micro-trade."
            </p>
            <div class="personal-detail d-flex flex-column mt-3">
              <span class="per-name fw-bold">Anna Müller</span>
              <span class="per-role">Fundadora, Export HD (8 empleados)</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="testimonial-item bg-white rounded mt-4 shadow">
        <div class="client-logo">
          <img src="./Images/bi-logo.svg" alt="BI Startup" />
        </div>
        <div class="content mt-3">
          <div class="feed-personalDetails">
            <p class="feed">
              "Dashboards real-time transformaron decisions. Fácil, barato, escalable."
            </p>
            <div class="personal-detail d-flex flex-column mt-3">
              <span class="per-name fw-bold">Miguel Rojas</span>
              <span class="per-role">CTO, AgroTech PY (25 empleados)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
  Testimonial.appendChild(Container);
}
Testimonial();
</script>
