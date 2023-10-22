<template>
  <div id="app">
    <h1>OrderEz Task</h1>
    <EzCategoryDropdown
      :data="categoryData"
      :selected="selectedCategory"
      @change="handleCategoryChange"
    />
  </div>
</template>

<script>
import EzCategoryDropdown from "./components/CategoryDropdown/EzCategoryDropdown.vue";
import { fetchCategories } from "./api/categorie";
import { sortCategoryWithChildrenByName } from "./helpers/category";

export default {
  name: "App",
  components: {
    EzCategoryDropdown,
  },
  data() {
    return {
      categoryData: [],
      selectedCategory: null,
    };
  },
  methods: {
    handleCategoryChange(selectedCategory) {},
  },
  async created() {
    try {
      this.categoryData = await fetchCategories();
      this.categoryData = sortCategoryWithChildrenByName(this.categoryData);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  display: flex;
  flex-direction: column;
  align-items: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
