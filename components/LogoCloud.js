<script>
function LogoCloud() {
  const LogoCloud1 = document.getElementById("LogoCloud1");
  const LogoCloud2 = document.getElementById("LogoCloud2");
  const Container1 = document.createElement("div");
  const Container2 = document.createElement("div");
  Container1.classList.add("container", "border-top", "border-bottom", "py-4");
  Container2.classList.add("container");
  
  Container1.innerHTML = `
  <div class="row row-cols-2 row-cols-md-4 row-cols-lg-6 gy-5 justify-content-center">
    <div class="col d-flex justify-content-center ClientLogo">
      <img src="./Images/jotform-logo.svg" alt="Jotform" title="QC Forms" />
    </div>
    <div class="col d-flex justify-content-center ClientLogo">
      <img src="./Images/n8n-logo.svg" alt="n8n" title="Workflows" />
    </div>
    <div class="col d-flex justify-content-center ClientLogo">
      <img src="./Images/horizons-logo.svg" alt="Hostinger Horizons" title="Platform" />
    </div>
    <div class="col d-flex justify-content-center ClientLogo">
      <img src="./Images/supabase-logo.svg" alt="Supabase" title="Database/Auth" />
    </div>
    <div class="col d-flex justify-content-center ClientLogo">
      <img src="./Images/slack-logo.svg" alt="Slack" title="Alerts" />
    </div>
    <div class="col d-flex justify-content-center ClientLogo">
      <img src="./Images/gmail-logo.svg" alt="Gmail" title="Emails" />
    </div>
  </div>
  `;
  
  Container2.innerHTML = `
  <div class="row row-cols-1 row-cols-md-2 gy-5 gx-5">
    <div class="text-body col">
      <h2 class="title fw-bold">Integraciones Fáciles: 170+ Tools</h2>
      <p class="Description mt-2">
        Conecta tu CRM, Slack, email, Notion con templates pre-built. 
        Todo en Horizons platform—sin código, GDPR safe.
      </p>
    </div>
    <div class="content col">
      <img class='img-fluid' src="./Images/integrations-mockup.png" alt="Integrations Flow" />
    </div>
  </div>
  `;
  
  LogoCloud1.appendChild(Container1);
  LogoCloud2.appendChild(Container2);
}
LogoCloud();
</script>
