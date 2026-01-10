<template>
  <div>
    <h2>Select a Puzzle</h2>
    <div v-for="puzzle in puzzles" :key="puzzle.id" class="row">
      <div>
        <img :src="require(`@/assets/${puzzle.image}`)" :alt="puzzle.title" />
      </div>
      <div>
        <h2>{{ puzzle.title }}</h2>
      </div>
      <div class="play-button">
        <button @click="selectPuzzle(puzzle)">Play</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PuzzlesComponent",
  data() {
    return {
      puzzles: [
        { id: "cut-pink", image: "pink.jpg", title: "Pink Flower" },
        { id: "cut-purple", image: "purple.jpg", title: "Purple Flower" },
        { id: "cut-red", image: "red.jpg", title: "Red Flower" },
      ],
    };
  },
  methods: {
    selectPuzzle(puzzle) {
      this.$emit("puzzle-changed", puzzle.id);
    },
  },
};
</script>

<style scoped>
.row {
  display: flex;
  max-width: 90vw;
  flex-wrap: wrap;
  justify-content: space-between;
}

.row img {
  width: 100px;
}

.row .play-button {
  padding-top: 25px;
}
</style>
