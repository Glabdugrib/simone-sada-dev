<template>
  <section id="projects">
    <h2 class="section-title">My projects</h2>
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
      technologies: ['Vue', 'Scss', 'Laravel', 'React', 'Kiba', 'Cane', 'Gatto', 'Squalo'] // [TODO] da rendere dinamica
    }
  },
  computed: {
    projects() {
      return this.$t('projects') // attinge dai file locale delle lingue
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
  // width: 100%;
  counter-increment: section;

  .section-title {
  //   margin: 10px 0 20px 0;
  //   font-size: 30px;
  //   font-weight: 600;
  //   line-height: 36px;
  //   color: $lightest-slate;
  //   display: flex;
  //   align-items: center;

  &::before {
    content: "03.";
  //     display: block;
  //     font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
  //     color: $highlight;
  //     font-weight: 400;
  //     font-size: 24px;
  //     margin-right: 10px;
  }

  //   &::after {
  //     content: "";
  //     display: block;
  //     // width: 300px;
  //     flex-grow: 1;
  //     height: 1px;
  //     margin-left: 20px;
  //     background-color: rgba($color: $light-slate, $alpha: 0.3);
  //   }
  }

  .filter {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 50px;

    ul {
      display: contents;
    }
  }

  .info-message {
    color: $light-slate;
    font-size: 14px;
  }
}
</style>