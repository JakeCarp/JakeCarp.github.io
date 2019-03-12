<template>
  <div onclick="isHidden = !isHidden" class="card">
    <h3 class="card-header">project.name</h3>
    <img class="card-img-top" src="project.img" alt="">
    <b-button v-b-modal.{{project.name}}>View Project</b-button>
  </div>
</template>
<script>
  export default {
    name: 'Project',
    props: [project],
    data() {
      return {
        isHidden: true
      }
    },
  }
</script>