<template>
  <section id="projects">
    <h2 class="section-title">{{ $t("projects.sectionName") }}</h2>
    <!-- Filtro -->
    <div class="filter">
      <ul>
        <PillButton v-for="(technology,i) in technologies" :key="`tech-${i}`" :text="technology" />
      </ul>
    </div>
    <!-- Elenco progetti -->
    <Project v-for="(project,i) in filteredProjects" :key="`proj-${i}`" :project="project" />
    <p v-if="filteredProjects.length == 0" class="info-message">Nessun progetto corrispondente al filtro inserito.</p>
  </section>
</template>

<script>
import Project from "./ProjectCard.vue"
import PillButton from "./PillButton.vue"
import state from "../store"

export default {
  components: {
    Project,
    PillButton
  },
  data() {
    return {
      //active: false,
      technologies: ['Bootstrap', 'Javascript', 'Laravel', 'MySQL', 'Vue.js', '.NET'] // [TODO] da rendere dinamica
    }
  },
  computed: {
    projects() {
      return this.$t('projects.projectsList') // attinge dai file locale delle lingue
    },
    filteredProjects() {
      if(this.technologyFilter.length == 0) {
        return this.projects
      } else {
        let filteredArray = []

        this.projects.forEach(project => {

          let check = true

          this.technologyFilter.forEach(tech => {
            if(!project.technologies.includes(tech)) {
              check = false
            }
          });

          if(check) {
            filteredArray.push(project)
          }
        })

        return filteredArray
      }
    },
    technologyFilter() {
      return state.technologyFilter
    }
  },
  watch: {
    technologyFilter() {
      // here
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/style.scss";

#projects {
  counter-increment: section;

  .section-title {
    // margin: 10px 0 20px 0;

    &::before {
      content: "03.";
    }
  }

  .filter {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 80px;

    ul {
      display: contents;
    }
  }

  .info-message {
    color: $text;
    font-size: 18px;
    @include font_default;
    line-height: 26px;
    text-align: center;
  }
}

@media screen and (max-width: 768px) {
  
  #projects {

    .filter {
      margin-bottom: 40px;
    }
  }
}
</style>