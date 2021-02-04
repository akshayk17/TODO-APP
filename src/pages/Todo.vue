<template>
  <div class="todo">
    <div class="col-100">
      <div class="container flex">
        <div class="header flex space-evenly row-100">
          <div class="col-25">
            <img class="h-50" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ahEt0qPtbcA5ubMZ5cG-Xnp75ox5p-Eh4A&usqp=CAU" alt="">
          </div>
          <div class="col-75 center">
            <h3>My Todo App</h3>
          </div>
        </div>
        <div class="inp-box row-100 center">
          <div class="container flex col-100 ">
            <div class="row-100">
              <h1>"Add Your Todo Here.."</h1>
            </div>
            <div class="row-100">
                <textarea class="h-150 col-50" v-model="taskContent" cols="30" rows="10"></textarea>
            </div>
            <div>
              <button @click="addTask" @keyup.tab="addTask">Add</button>
            </div>

          </div>
        </div>
      </div>
      <div class="row-100 flex all-tasks">
          <Card v-for="task in tasklist" :key="task.id" :task="task" @delete="deleteTask"></Card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card'
export default {
  name: 'Todo',
  components: {
    Card
  },
  data () {
    return {
      tasklist: [],
      taskContent: ''
    }
  },
  methods: {
    addTask () {
      if (this.taskContent === '') {
        alert("Empty task can't be added")
        return
      }
      const newTask = {
        taskContent: this.taskContent,
        date: (new Date()).toLocaleDateString()
      }
      this.tasklist.push(newTask)
      this.taskContent = ''
    },
    deleteTask (task) {
      this.tasklist = this.tasklist.filter(items => items.taskContent !== task.taskContent)
      console.log('Task Deleted!!!')
    }
  }
}
</script>

<style>
.todo {
  /* display: flex; */
  flex-wrap: nowrap;
  /* justify-content: space-evenly; */
}
.col-25{
  width: 25%;
}
.col-50{
  width: 50%;
}
.col-75{
  width: 75%;
}
.col-33 {
  width: 33%;
}
.col-100{
  width: 100%;
}
.row-100{
  width: 100%;
}
.h-50{
  height: 50px;
}
.h-150{
  height: 150px;
}
.flex{
  display: flex;
  justify-content: space-evenly;
}
.center{
  text-align: center;
}
.space-evenly{
  justify-content: space-evenly;
}
.header {
  background-color: aquamarine;
  width: 100%;
}
.container {
  flex-direction: column;
  justify-content: space-evenly;
}
.all-tasks {
  flex-wrap: wrap;
  max-width: 100%;
}

</style>
