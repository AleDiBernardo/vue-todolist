Vue.createApp({
  data() {
    return {
      prevTask: [
        {
          text: "Comprare l'olio",
          isDone: false,
          stateImage: "img/done.svg",
        },
        {
          text: "Completare puzzle",
          isDone: false,
          stateImage: "img/done.svg",
        },
        {
          text: "Boh",
          isDone: false,
          stateImage: "img/done.svg",
        },
      ],
    };
  },
  methods: {
    removeTask(indexItem){
        this.prevTask.splice(indexItem,1)
    }
  },
}).mount("#app");
