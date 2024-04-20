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
          tasks: [],
        },
        {
          name: "nextDaysTask",
          tasks: [],
        },
      ],
    };
  },
  created() {

    const todayTask = localStorage.getItem(`${this.allTask[1].name}`);
    const nextDaysTask = localStorage.getItem(`${this.allTask[2].name}`);
    const prevTask = localStorage.getItem(`${this.allTask[0].name}`);

    //Se presenti carica i dati del localStorage
    if (prevTask) {
      this.allTask[0].tasks = JSON.parse(prevTask);
    }
    if (todayTask) {
      this.allTask[1].tasks = JSON.parse(todayTask);
    }
    if (nextDaysTask) {
      this.allTask[2].tasks = JSON.parse(nextDaysTask);
    }
  },
  methods: {
    removeTask(indexItem, array) {
      // console.log(array);
      array.tasks.splice(indexItem, 1);
      console.log(array.name);
      localStorage.setItem(`${array.name}`, JSON.stringify(array.tasks));
    },
    handleAdd() {
        let arrIndex = 0;
      if (this.taskText !== "") {
        const newTask = {
          text: this.taskText,
          isDone: false,
          stateImage: "img/done.svg",
        };

        this.selectedValue === "today" ? arrIndex = 1 : arrIndex = 2;
        

        //Pusho il nuovo task
        this.allTask[arrIndex].tasks.push(newTask);
        //Salvo/aggiorno lo stato dell'array in local storage
          localStorage.setItem(
            `${this.allTask[arrIndex].name}`,
            JSON.stringify(this.allTask[arrIndex].tasks)
          );
      } else {
        alert("il campo è vuoto");
      }

      //Reset dei valori
      this.taskText = "";
      this.selectedValue = "today";
    },
  },
}).mount("#app");
