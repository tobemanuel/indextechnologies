<script>
function Features() {
  const Features = document.getElementById("Features");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div class="text-body text-center d-flex flex-column align-items-center">
    <h2 class="title fw-bold">Características Listas para Microempresas</h2>
    <p>6 workflows pre-built + plataforma Horizons. Deploy en 5 min, sin código.</p>
  </div>
  <div class="container-body row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4">
    <div class="col d-flex flex-column justify-content-center pt-5">
      <div class="icon d-flex justify-content-center">
        <img src="./Images/qc-icon.svg" alt="QC Automation" />
      </div>
      <div class="text">
        <div class="title fw-bold text-center">QC Manufacturing</div>
        <div class="description text-center">
          Inspecciones con fotos, reports ISO, compliance alerts. 
          Jotform + n8n listo.
        </div>
      </div>
    </div>
    <div class="col d-flex flex-column justify-content-center pt-5">
      <div class="icon d-flex justify-content-center">
        <img src="./Images/invoice-icon.svg" alt="Invoicing" />
      </div>
      <div class="text">
        <div class="title fw-bold text-center">Facturación Auto</div>
        <div class="description text-center">
          CRM → PDF → Email. Multi-moneda DE-PY, GDPR. 
          2h/día ahorradas.
        </div>
      </div>
    </div>
    <div class="col d-flex flex-column justify-content-center pt-5">
      <div class="icon d-flex justify-content-center">
        <img src="./Images/dashboard-icon.svg" alt="BI Dashboard" />
      </div>
      <div class="text">
        <div class="title fw-bold text-center">BI Dashboards</div>
        <div class="description text-center">
          Real-time analytics + predicciones. Mobile-first, 
          embed en Horizons.
        </div>
      </div>
    </div>
    <div class="col d-flex flex-column justify-content-center pt-5">
      <div class="icon d-flex justify-content-center">
        <img src="./Images/trade-icon.svg" alt="Cross-Border" />
      </div>
      <div class="text">
        <div class="title fw-bold text-center">Trade DE-PY</div>
        <div class="description text-center">
          Export docs, compliance, currency sync. Bilingual templates.
        </div>
      </div>
    </div>
    <div class="col d-flex flex-column justify-content-center pt-5">
      <div class="icon d-flex justify-content-center">
        <img src="./Images/user-icon.svg" alt="User Login" />
      </div>
      <div class="text">
        <div class="title fw-bold text-center">User Self-Serve</div>
        <div class="description text-center">
          Login, configura templates, multi-usuario. Supabase secure.
        </div>
      </div>
    </div>
    <div class="col d-flex flex-column justify-content-center pt-5">
      <div class="icon d-flex justify-content-center">
        <img src="./Images/compliant-icon.svg" alt="GDPR" />
      </div>
      <div class="text">
        <div class="title fw-bold text-center">GDPR Compliant</div>
        <div class="description text-center">
          EU hosting, backups, audit logs. Trade seguro.
        </div>
      </div>
    </div>
  </div>
  `;
  Features.appendChild(Container);
}
Features();
</script>
