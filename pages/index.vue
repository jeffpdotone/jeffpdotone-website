<template>
  <main>
    <the-header />
    <section
      id="about"
      class="section-shell intro-grid"
    >
      <p class="section-kicker">
        About
      </p>
      <div>
        <h2 class="section-title">
          Engineering products that hold up in the real world.
        </h2><div class="prose-copy">
          <p>I’ve spent more than a decade working on production software across SaaS, e-commerce, enterprise applications, integrations, mobile products, and front-end systems.</p>
          <p>I enjoy turning difficult technical problems into dependable, useful products—from modernizing a connected-building platform to integrating commerce systems and building interactive experiences. That same curiosity now has me exploring independent game development with Godot.</p>
        </div>
      </div>
    </section>
    <section
      id="work"
      class="section-shell"
    >
      <div class="section-heading">
        <div>
          <p class="section-kicker">
            Selected work
          </p><h2 class="section-title">
            Products, platforms, and integrations.
          </h2>
        </div><p>Representative work drawn from my professional experience.</p>
      </div>
      <div class="project-grid">
        <article
          v-for="project in projects"
          :key="project.title"
          class="project-card"
        >
          <p class="project-type">
            {{ project.type }}
          </p><h3>{{ project.title }}</h3><p class="project-summary">
            {{ project.summary }}
          </p>
          <div>
            <p class="card-label">
              My contribution
            </p><p>{{ project.contribution }}</p>
          </div>
          <ul
            class="tag-list"
            :aria-label="`${project.title} technologies`"
          >
            <li
              v-for="tech in project.technologies"
              :key="tech"
            >
              {{ tech }}
            </li>
          </ul>
        </article>
      </div>
    </section>
    <section
      id="experience"
      class="section-shell"
    >
      <div class="section-heading">
        <div>
          <p class="section-kicker">
            Experience
          </p><h2 class="section-title">
            More than a decade in production.
          </h2>
        </div><p>Building, modernizing, and maintaining software since 2012.</p>
      </div><work-experiences />
    </section>
    <section
      id="skills"
      class="section-shell"
    >
      <div class="section-heading">
        <div>
          <p class="section-kicker">
            Capabilities
          </p><h2 class="section-title">
            A product-minded technical toolkit.
          </h2>
        </div>
      </div><work-skills />
    </section>
    <section
      id="games"
      class="section-shell game-panel"
    >
      <div class="game-intro">
        <p class="section-kicker">
          Game development
        </p><h2 class="section-title">
          Applying software engineering to interactive worlds.
        </h2>
        <div class="prose-copy">
          <p>I’m expanding beyond web products into independent game development with Godot. It’s an active area of learning where I bring the same approach I use in production software: thoughtful architecture, iterative problem-solving, and care for the player experience.</p><p class="muted-note">
            More projects and playable experiments will be added as they’re ready to share.
          </p>
        </div>
      </div>
      <article class="game-project">
        <div class="game-shot">
          <img
            src="/godot-math-game.png"
            alt="Portrait gameplay from a Godot mobile math game prototype showing an addition challenge, two answer gates, a character, and touch controls"
          >
        </div>
        <div class="game-details">
          <p class="project-type">
            Godot prototype · In development
          </p>
          <h3>Mobile Math Game Prototype</h3>
          <p>A portrait mobile game experiment where the player moves a character toward the correct answer to an arithmetic challenge.</p>
          <div>
            <p class="card-label">
              What I’m building
            </p>
            <p>A touch-first interactive learning experience combining character movement, arithmetic choice gates, score and progress UI, and an on-screen joystick.</p>
          </div>
          <ul
            class="tag-list"
            aria-label="Mobile Math Game Prototype technologies"
          >
            <li>Godot</li>
            <li>Mobile controls</li>
            <li>Gameplay UI</li>
            <li>3D gameplay</li>
          </ul>
        </div>
      </article>
    </section>
    <section
      id="contact"
      class="section-shell contact-panel"
    >
      <div>
        <p class="section-kicker">
          Open to opportunities
        </p><h2 class="section-title">
          Let’s build something great.
        </h2><p>I’m open to software engineering opportunities where I can take meaningful technical ownership, work on challenging products, and keep growing as an engineer.</p>
      </div><div>
        <p class="roles-label">
          Especially interested in
        </p><ul class="role-list">
          <li>Senior Software Engineer</li><li>Senior Frontend Engineer</li><li>Full-Stack / Product Engineer</li><li>SaaS &amp; e-commerce</li><li>Platform &amp; integration engineering</li>
        </ul><a
          class="button button-primary contact-button"
          href="mailto:hi@jeffp.one"
        >Let’s Talk <span aria-hidden="true">↗</span></a>
      </div>
    </section>
    <footer class="site-footer">
      <p>Jefferson Paltera · Senior Software Engineer</p><div>
        <a href="mailto:hi@jeffp.one">Email</a><a
          href="https://github.com/jeffpdotone"
          target="_blank"
          rel="noopener noreferrer"
        >GitHub</a>
      </div>
    </footer>
  </main>
</template>

<script setup lang="ts">
const projects = [
  { type: 'Enterprise SaaS', title: 'Smart-building platform', summary: 'A production platform that turns live building and equipment data into usable operational interfaces for facility teams.', contribution: 'Led the front-end modernization, introduced Vue and Nuxt, built MQTT-powered real-time data integrations, and helped the team adopt the new architecture.', technologies: ['Vue', 'Nuxt', 'JavaScript', 'MQTT', 'IoT'] },
  { type: 'Commerce & integrations', title: 'Headless commerce systems', summary: 'Customer-facing storefronts connected to commerce platforms, NetSuite, and other business systems.', contribution: 'Owned projects from architecture through deployment and support, including custom storefronts, backend integrations, and cloud infrastructure.', technologies: ['Vue', 'React', 'Node.js', 'Shopify', 'BigCommerce', 'NetSuite'] },
  { type: 'Interactive web', title: 'Rich-media advertising', summary: 'Custom HTML5 campaign experiences built for broad device and advertising-platform compatibility.', contribution: 'Translated campaign concepts into production experiences using gyroscope, shake, camera, and QR interactions; owned optimization and integration.', technologies: ['JavaScript', 'HTML5', 'Device APIs', 'Mobile Web'] },
]
useHead({ title: 'Jefferson Paltera | Senior Software Engineer', meta: [{ name: 'description', content: 'Senior Software Engineer with 10+ years building production web applications, SaaS products, e-commerce systems, and integrations.' }], link: [{ rel: 'preconnect', href: 'https://fonts.googleapis.com' }, { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }, { href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@500;600;700&display=swap', rel: 'stylesheet' }], bodyAttrs: { class: 'portfolio-body' } })
</script>
