const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');
const themeButton = document.querySelector('.theme-button');
const themeLabel = themeButton?.querySelector('.theme-label');
const themeIcon = themeButton?.querySelector('.theme-icon');

const setTheme = (theme) => {
  const isLight = theme === 'light';
  document.body.classList.toggle('light', isLight);
  if (themeLabel) themeLabel.textContent = isLight ? 'Dark mode' : 'Light mode';
  if (themeIcon) themeIcon.textContent = isLight ? '☾' : '☼';
  themeButton?.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
  localStorage.setItem('portfolio-theme', theme);
};

setTheme(localStorage.getItem('portfolio-theme') || 'dark');

themeButton?.addEventListener('click', () => {
  setTheme(document.body.classList.contains('light') ? 'dark' : 'light');
});

menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.querySelector('span').textContent = isOpen ? '×' : '+';
});

document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    const symbol = menuButton?.querySelector('span');
    if (symbol) symbol.textContent = '+';
  });
});

const projectsSection = document.querySelector('#projects');
const projectsGrid = projectsSection?.querySelector('.project-grid');

if (projectsGrid) {
  const projectNote = projectsSection.querySelector('.project-note');
  if (projectNote) projectNote.textContent = 'Every project below links directly to a reachable public repository.';

  projectsGrid.innerHTML = `
    <article class="project-card project-feature reveal visible">
      <div class="project-top"><span>01 / ODC FINAL PROJECT</span><span>↗</span></div>
      <h3>ODC final<br />project</h3>
      <p>The final project repository from the Digital Hub with Orange Digital Center program.</p>
      <div class="project-bottom"><span>ODC</span><span>DevOps</span><span>Final project</span></div>
      <a class="project-repo project-repo-link" href="https://gitlab.com/Heggoo/odc_final_project" target="_blank" rel="noreferrer">View GitLab project ↗</a>
    </article>
    <article class="project-card reveal visible">
      <div class="project-top"><span>02 / KUBERNETES</span><span>↗</span></div>
      <h3>Three-tier Kubernetes<br />application</h3>
      <p>A three-tier application built during the ODC DevOps internship with Kubernetes, Docker, and ArgoCD fundamentals.</p>
      <div class="project-bottom"><span>Kubernetes</span><span>Docker</span><span>ArgoCD</span></div>
      <a class="project-repo project-repo-link" href="https://github.com/lets-devopss/ODC_KubernetesThreetierApp" target="_blank" rel="noreferrer">View GitHub repository ↗</a>
    </article>
    <article class="project-card reveal visible">
      <div class="project-top"><span>03 / CONTAINERS</span><span>↗</span></div>
      <h3>Docker three-tier<br />application</h3>
      <p>A public ODC project repository focused on packaging a three-tier application with Docker.</p>
      <div class="project-bottom"><span>Docker</span><span>Three-tier</span><span>ODC</span></div>
      <a class="project-repo project-repo-link" href="https://github.com/lets-devopss/ODC-DockerThreeTierAPP" target="_blank" rel="noreferrer">View GitHub repository ↗</a>
    </article>
    <article class="project-card reveal visible">
      <div class="project-top"><span>04 / CLOUD INFRA</span><span>↗</span></div>
      <h3>AWS infrastructure<br />with Terraform</h3>
      <p>Infrastructure-as-Code work for building AWS infrastructure with Terraform.</p>
      <div class="project-bottom"><span>AWS</span><span>Terraform</span><span>IaC</span></div>
      <a class="project-repo project-repo-link" href="https://github.com/lets-devopss/Build-infrastrucure-by-Terraform-on-AWS" target="_blank" rel="noreferrer">View GitHub repository ↗</a>
    </article>
    <article class="project-card reveal visible">
      <div class="project-top"><span>05 / CI/CD</span><span>↗</span></div>
      <h3>Docker image delivery<br />pipeline</h3>
      <p>A Jenkins pipeline project for building and pushing Docker images to Docker Hub.</p>
      <div class="project-bottom"><span>Jenkins</span><span>Docker</span><span>CI/CD</span></div>
      <a class="project-repo project-repo-link" href="https://github.com/lets-devopss/Push-docker-image-to-Docker-Hub-using-Jenkins-Pipeline" target="_blank" rel="noreferrer">View GitHub repository ↗</a>
    </article>
    <article class="project-card reveal visible">
      <div class="project-top"><span>06 / AUTOMATION</span><span>↗</span></div>
      <h3>Jenkins, Terraform<br />&amp; Ansible</h3>
      <p>A public training repository combining Jenkins, Terraform, and Ansible automation work.</p>
      <div class="project-bottom"><span>Jenkins</span><span>Terraform</span><span>Ansible</span></div>
      <a class="project-repo project-repo-link" href="https://github.com/lets-devopss/NTI-jenkins-terraform-ansible" target="_blank" rel="noreferrer">View GitHub repository ↗</a>
    </article>`;
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
