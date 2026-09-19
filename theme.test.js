<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>Ignacio Roel — Portfolio</title>

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&display=swap"
    rel="stylesheet"
  />

  <link rel="stylesheet" href="style.css" />
</head>

<body>

  <!-- NAV -->
  <nav>
    <a href="#hero" class="nav-logo">Ignacio Roel</a>

    <ul class="nav-links">
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Proyectos</a></li>
      <li><a href="#education">Educación</a></li>
      <li><a href="#contact">Contacto</a></li>
    </ul>

    <button
      id="theme-toggle"
      class="theme-toggle"
      aria-label="Cambiar tema"
    >
      ☀
    </button>
  </nav>


  <!-- HERO -->
  <section id="hero">

    <p class="hero-tag">👋 Hola, soy</p>

    <h1 class="hero-name">
      Ignacio <span>Roel</span>
    </h1>

    <p class="hero-role">
      Programador Web
    </p>

    <p class="hero-desc">
      Programador web y estudiante de tecnologías de la información,
      con formación en desarrollo de software, APIs, bases de datos,
      aplicaciones web y móviles. Actualmente profundizando en
      DevOps, automatización y prácticas de CI/CD, integrando además
      mi formación en Geografía y Sistemas de Información Geográfica.
    </p>

    <div class="hero-cta">
      <a href="#projects" class="btn btn-primary">
        Ver proyectos
      </a>

      <a href="#contact" class="btn btn-outline">
        Contacto
      </a>
    </div>

  </section>


  <div class="divider"></div>


  <!-- SKILLS -->
  <section id="skills">

    <p class="section-label">// habilidades</p>

    <h2 class="section-title">
      Stack técnico
    </h2>

    <div class="skills-grid">


      <!-- VERSION CONTROL -->
      <div class="skill-card">

        <div class="skill-card-title">
          <span class="skill-dot"></span>
          Control de versiones
        </div>

        <ul class="skill-list">
          <li class="skill-tag">Git</li>
          <li class="skill-tag">GitHub</li>
          <li class="skill-tag">GitHub Actions</li>
        </ul>

      </div>


      <!-- DEVOPS -->
      <div class="skill-card">

        <div class="skill-card-title">
          <span class="skill-dot"></span>
          DevOps & CI/CD
        </div>

        <ul class="skill-list">
          <li class="skill-tag">GitHub Actions</li>
          <li class="skill-tag">Docker</li>
          <li class="skill-tag">Trivy</li>
          <li class="skill-tag">SonarCloud</li>
          <li class="skill-tag">YAML</li>
        </ul>

      </div>


      <!-- BACKEND -->
      <div class="skill-card">

        <div class="skill-card-title">
          <span class="skill-dot"></span>
          Backend
        </div>

        <ul class="skill-list">
          <li class="skill-tag">C#</li>
          <li class="skill-tag">.NET</li>
          <li class="skill-tag">ASP.NET Core</li>
          <li class="skill-tag">APIs REST</li>
          <li class="skill-tag">Swagger</li>
          <li class="skill-tag">OpenAPI</li>
        </ul>

      </div>


      <!-- DATABASE -->
      <div class="skill-card">

        <div class="skill-card-title">
          <span class="skill-dot"></span>
          Bases de datos
        </div>

        <ul class="skill-list">
          <li class="skill-tag">SQL</li>
          <li class="skill-tag">SQL Server</li>
          <li class="skill-tag">MySQL</li>
          <li class="skill-tag">Entity Framework Core</li>
          <li class="skill-tag">T-SQL</li>
        </ul>

      </div>


      <!-- FRONTEND -->
      <div class="skill-card">

        <div class="skill-card-title">
          <span class="skill-dot"></span>
          Frontend & Mobile
        </div>

        <ul class="skill-list">
          <li class="skill-tag">HTML5</li>
          <li class="skill-tag">CSS</li>
          <li class="skill-tag">JavaScript</li>
          <li class="skill-tag">React</li>
          <li class="skill-tag">Ionic</li>
        </ul>

      </div>


      <!-- GIS -->
      <div class="skill-card">

        <div class="skill-card-title">
          <span class="skill-dot"></span>
          GIS & datos geoespaciales
        </div>

        <ul class="skill-list">
          <li class="skill-tag">GIS / SIG</li>
          <li class="skill-tag">QGIS</li>
          <li class="skill-tag">ArcGIS</li>
          <li class="skill-tag">Geodatos</li>
          <li class="skill-tag">Cartografía</li>
        </ul>

      </div>


      <!-- SCRIPTING -->
      <div class="skill-card">

        <div class="skill-card-title">
          <span class="skill-dot"></span>
          Sistemas & scripting
        </div>

        <ul class="skill-list">
          <li class="skill-tag">Linux</li>
          <li class="skill-tag">Ubuntu</li>
          <li class="skill-tag">Bash</li>
          <li class="skill-tag">Terminal</li>
        </ul>

      </div>


      <!-- TOOLS -->
      <div class="skill-card">

        <div class="skill-card-title">
          <span class="skill-dot"></span>
          Herramientas
        </div>

        <ul class="skill-list">
          <li class="skill-tag">Postman</li>
          <li class="skill-tag">Swagger</li>
          <li class="skill-tag">Visual Studio</li>
          <li class="skill-tag">VS Code</li>
          <li class="skill-tag">IntelliJ IDEA</li>
        </ul>

      </div>

    </div>

  </section>


  <div class="divider"></div>


  <!-- PROJECTS -->
  <section id="projects">

    <p class="section-label">// proyectos</p>

    <h2 class="section-title">
      Lo que construí
    </h2>

    <div class="projects-grid">


      <!-- PROJECT 1 -->
      <div class="project-card">

        <div class="project-header">

          <span class="project-name">
            Pipeline CI/CD
          </span>

          <a
            href="https://github.com/ignacioroel"
            class="project-link"
            target="_blank"
          >
            ↗ ver repo
          </a>

        </div>

        <p class="project-desc">
          Pipeline de integración y entrega continua utilizando
          GitHub Actions. Automatización de distintas etapas del
          proceso, incluyendo análisis de código con SonarCloud,
          análisis de vulnerabilidades con Trivy y procesos
          relacionados con Docker.
        </p>

        <div class="project-tags">
          <span class="project-tag">
            GitHub Actions
          </span>

          <span class="project-tag">
            Docker
          </span>

          <span class="project-tag">
            Trivy
          </span>

          <span class="project-tag">
            SonarCloud
          </span>
        </div>

      </div>


      <!-- PROJECT 2 -->
      <div class="project-card">

        <div class="project-header">

          <span class="project-name">
            Portfolio DevOps
          </span>

          <a
            href="https://github.com/ignacioroel/portfolioDevOps"
            class="project-link"
            target="_blank"
          >
            ↗ ver repo
          </a>

        </div>

        <p class="project-desc">
          Portfolio personal desarrollado con HTML y CSS,
          versionado con Git y publicado mediante GitHub Pages.
          El proyecto forma parte de la práctica de Git,
          GitHub y automatización con GitHub Actions.
        </p>

        <div class="project-tags">

          <span class="project-tag">
            HTML
          </span>

          <span class="project-tag">
            CSS
          </span>

          <span class="project-tag">
            Git
          </span>

          <span class="project-tag">
            GitHub Pages
          </span>

          <span class="project-tag">
            GitHub Actions
          </span>

        </div>

      </div>


      <!-- PROJECT 3 -->
      <div class="project-card">

        <div class="project-header">

          <span class="project-name">
            Aplicación Web .NET
          </span>

          <a
            href="https://github.com/ignacioroel"
            class="project-link"
            target="_blank"
          >
            ↗ ver repo
          </a>

        </div>

        <p class="project-desc">
          Desarrollo de una aplicación web utilizando C# y
          ASP.NET Core, con Entity Framework Core para el acceso
          a datos y una arquitectura organizada en distintas
          capas. Incluye entidades, DTOs, repositorios y
          persistencia en base de datos.
        </p>

        <div class="project-tags">

          <span class="project-tag">
            C#
          </span>

          <span class="project-tag">
            .NET
          </span>

          <span class="project-tag">
            ASP.NET Core
          </span>

          <span class="project-tag">
            Entity Framework Core
          </span>

          <span class="project-tag">
            SQL
          </span>

        </div>

      </div>


      <!-- PROJECT 4 -->
      <div class="project-card">

        <div class="project-header">

          <span class="project-name">
            API REST con .NET
          </span>

          <a
            href="https://github.com/ignacioroel"
            class="project-link"
            target="_blank"
          >
            ↗ ver repo
          </a>

        </div>

        <p class="project-desc">
          Desarrollo de APIs REST utilizando ASP.NET Core,
          con separación de responsabilidades, DTOs, acceso
          a datos mediante Entity Framework Core y documentación
          e interacción de endpoints mediante Swagger / OpenAPI.
        </p>

        <div class="project-tags">

          <span class="project-tag">
            ASP.NET Core
          </span>

          <span class="project-tag">
            Web API
          </span>

          <span class="project-tag">
            Entity Framework
          </span>

          <span class="project-tag">
            Swagger
          </span>

          <span class="project-tag">
            OpenAPI
          </span>

        </div>

      </div>


      <!-- PROJECT 5 -->
      <div class="project-card">

        <div class="project-header">

          <span class="project-name">
            Aplicaciones Web y Mobile
          </span>

          <a
            href="https://github.com/ignacioroel"
            class="project-link"
            target="_blank"
          >
            ↗ ver repo
          </a>

        </div>

        <p class="project-desc">
          Desarrollo de aplicaciones utilizando JavaScript,
          React e Ionic, integrando interfaces de usuario con
          servicios y APIs para el intercambio de información
          entre frontend y backend.
        </p>

        <div class="project-tags">

          <span class="project-tag">
            JavaScript
          </span>

          <span class="project-tag">
            React
          </span>

          <span class="project-tag">
            Ionic
          </span>

          <span class="project-tag">
            APIs
          </span>

        </div>

      </div>


      <!-- PROJECT 6 -->
      <div class="project-card">

        <div class="project-header">

          <span class="project-name">
            GIS y análisis geoespacial
          </span>

          <a
            href="https://github.com/ignacioroel"
            class="project-link"
            target="_blank"
          >
            ↗ ver repo
          </a>

        </div>

        <p class="project-desc">
          Aplicación orientada al análisis y visualización de
          información territorial, integrando conocimientos de
          Geografía, Sistemas de Información Geográfica,
          cartografía y datos geoespaciales. Trabajo con QGIS,
          ArcGIS y bases de datos para el análisis territorial.
        </p>

        <div class="project-tags">

          <span class="project-tag">
            GIS / SIG
          </span>

          <span class="project-tag">
            QGIS
          </span>

          <span class="project-tag">
            ArcGIS
          </span>

          <span class="project-tag">
            Geodatos
          </span>

          <span class="project-tag">
            SQL
          </span>

        </div>

      </div>


    </div>

  </section>


  <div class="divider"></div>


  <!-- EDUCATION -->
  <section id="education">

    <p class="section-label">// educación</p>

    <h2 class="section-title">
      Formación
    </h2>

    <div class="edu-list">


      <div class="edu-item">

        <span class="edu-year">
          2011 — 2015
        </span>

        <div>

          <p class="edu-title">
            Licenciado en Geografía
          </p>

          <p class="edu-institution">
            UNILA — Universidad Federal de la Integración Latinoamericana
          </p>

        </div>

      </div>


      <div class="edu-item">

        <span class="edu-year">
          2016 — 2018
        </span>

        <div>

          <p class="edu-title">
            Magíster en Geografía
          </p>

          <p class="edu-institution">
            Universidade Federal Fluminense
          </p>

        </div>

      </div>


      <div class="edu-item">

        <span class="edu-year">
          2022 — 2025
        </span>

        <div>

          <p class="edu-title">
            Programador Web
          </p>

          <p class="edu-institution">
            ORT — Escuela de Tecnología
          </p>

        </div>

      </div>


      <div class="edu-item">

        <span class="edu-year">
          2026
        </span>

        <div>

          <p class="edu-title">
            Analista en Tecnologías de la Información
          </p>

          <p class="edu-institution">
            ORT — Escuela de Tecnología
          </p>

        </div>

      </div>


      <div class="edu-item">

        <span class="edu-year">
          2026
        </span>

        <div>

          <p class="edu-title">
            Formación en DevOps
          </p>

          <p class="edu-institution">
            ORT — Escuela de Tecnología
          </p>

        </div>

      </div>


    </div>

  </section>


  <div class="divider"></div>


  <!-- CONTACT -->
  <section id="contact">

    <p class="section-label">// contacto</p>

    <h2 class="section-title">
      Trabajemos juntos
    </h2>

    <p class="contact-desc">
      ¿Tenés una oportunidad o proyecto interesante? Escribime.
    </p>

    <div class="contact-links">


      <a
        href="mailto:ignacioroel@gmail.com"
        class="contact-link"
      >
        <span class="contact-icon">✉</span>
        ignacioroel@gmail.com
      </a>


      <a
        href="https://github.com/ignacioroel"
        class="contact-link"
        target="_blank"
      >
        <span class="contact-icon">⌥</span>
        GitHub
      </a>


      <a
        href="https://www.linkedin.com/in/ignacio-roel-586819258/"
        class="contact-link"
        target="_blank"
      >
        <span class="contact-icon">◈</span>
        LinkedIn
      </a>


    </div>

  </section>


  <!-- FOOTER -->
  <footer>

    Hecho con Git, GitHub Pages y mucho
    <span>☕</span>
    —
    <span>Ignacio Roel</span>

  </footer>


  <!-- THEME -->
  <script type="module">

    import { initTheme } from './theme.js';

    initTheme();

  </script>


</body>
</html>
