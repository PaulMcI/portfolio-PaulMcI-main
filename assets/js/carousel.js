const { createApp } = Vue;

createApp({
  data() {
    return {
      items: [
        { title: "Card 1", description: "Description 1", image: "./assets/images/em_1.jpg" },
        { title: "Card 2", description: "Description 2", image: "./assets/images/em_3.jpg" },
        { title: "Card 3", description: "Description 3", image: "./assets/images/em_2.jpg" },
      ],
      activeIndex: 0,
    };
  },
  methods: {
    nextSlide() {
      this.activeIndex = (this.activeIndex + 1) % this.items.length;
    },
    prevSlide() {
      this.activeIndex =
        (this.activeIndex - 1 + this.items.length) % this.items.length;
    },
  },
}).mount("#app");
