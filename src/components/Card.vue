<template>
  <div :class="`card col-25 h-150 flex ${status}`">
    <div>
      Task: {{task.taskContent}}
    </div>
    <div>
      Date: {{task.date}}
    </div>
    <div class="flex buttons">
      <button @click="deleteCard" id="btn-delete">Delete</button>
      <button v-if="!isTaskCompleted" @click='changeStatus' id="btn-success">Completed</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object
    }
  },
  data () {
    return {
      status: 'not-completed'
    }
  },
  computed: {
    isTaskCompleted: function () {
      if (this.status === 'not-completed') {
        return false
      }
      return true
    }
  },
  methods: {
    deleteCard () {
      this.$emit('delete', this.task)
    },
    changeStatus () {
      if (this.status === 'not-completed') {
        this.status = 'completed'
      } else {
        this.status = 'not-completed'
      }
    }
  }
}
</script>

<style>
.card {
  padding: 20px;
  border-radius: 4px;
  box-shadow: 10px 10px 10px rgb(175, 170, 170);
  flex-direction: column;
}

button{
  justify-content: space-evenly;
  height: 40px;
  width: 100px;
  border-radius: 4px;
}
#btn-delete{
  background-color: rgb(247, 2, 2);
}
#btn-success{
  background-color: rgb(66, 214, 66);
}
.not-completed {
  background-color: rgb(226, 247, 247);
}

.completed {
  background-color: rgb(120, 236, 145);
}

</style>
