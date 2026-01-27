<script>
function FAQ() {
  const FAQ = document.getElementById("FAQ");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div class="text-body">
    <h2 class='title fw-bold'>Preguntas Frecuentes</h2>
    <p>Lo que más nos preguntan las microempresas (1-50 empleados).</p>
  </div>
  <div class="accordion mt-5" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true">
          ¿Para quién es Index Technologies?
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          Microempresas y startups (1-50 empleados) en Rhein-Neckar y Paraguay que necesitan automatizar sin IT teams. 
          Manufacturing, trade, servicios—facturación, QC, CRM en 5 min.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingTwo">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
          ¿Cómo funciona la Plataforma Horizons?
        </button>
      </h2>
      <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          Regístrate gratis → Elige template (QC docs, invoicing) → Configura datos → Dashboard live. 
          GDPR-compliant, bilingual DE/ES, €29/mes básico.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
          ¿Qué incluye un workflow típico?
        </button>
      </h2>
      <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          Formularios Jotform/n8n → Automations (PDFs, emails, Slack) → BI dashboard. 
          Ej: Manufacturing QC con fotos y compliance reports en 15 min.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingFour">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
          ¿Es seguro para datos DE-PY trade?
        </button>
      </h2>
      <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          100% GDPR-compliant + export controls. Hosting EU, encriptación Supabase, backups automáticos.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingFive">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive">
          ¿Cuánto cuesta empezar?
        </button>
      </h2>
      <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          Prueba gratis 14 días. Planes: €29/mes (1 workflow), €99 (ilimitados + custom). 
          ROI en semanas vs. manual processes.
        </div>
      </div>
    </div>
  </div>
  `;
  FAQ.appendChild(Container);
}
FAQ();
</script>
