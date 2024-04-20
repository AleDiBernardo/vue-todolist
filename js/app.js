Vue.createApp({
  data() {
    return {
        selectedValue: "today",
        taskText: "",
      allTask: [
        {
          name: "prevTask",
          tasks: [
            {
              text: "Pulire il garage",
              isDone: false,
              stateImage: "img/done.svg",
            },
            {
              text: "Chiamare il servizio clienti",
              isDone: false,
              stateImage: "img/done.svg",
            },
            {
              text: "Organizzare le foto di vacanza",
              isDone: false,
              stateImage: "img/done.svg",
            },
          ],
        },
        {
          name: "todayTask",
          tasks: [
            
          ],
        },
        {
            name: "nextDaysTask",
            tasks: [
              
            ],
          }
      ],
    };
  },
  methods: {
    removeTask(indexItem, array) {
      // console.log(array);
      array.tasks.splice(indexItem, 1);
    },
    handleAdd(){
        if (this.taskText !== "") {
            const newTask = {
                text: this.taskText,
                isDone: false,
                stateImage: "img/done.svg"
            }
            if (this.selectedValue === "today") {
                this.allTask[1].tasks.push(newTask);
                console.log("pushato today");
            } else {
                this.allTask[2].tasks.push(newTask);
                console.log("pushato next");
            }
        } else {
            alert("il campo è vuoto");
        }
        this.taskText = "";
        this.selectedValue = "today"
    }
  },
}).mount("#app");
