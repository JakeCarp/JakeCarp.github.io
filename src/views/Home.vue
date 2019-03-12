<template>
  <div class="home container-fluid">
    <div class="projects" v-for="project in projects">

    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Project from '@/components/Project'

  export default {
    name: 'home',
    computed: {
      projects() {
        return this.$store.state.projects
      }
    },
    components: {
      HelloWorld
    }
  }
</script>