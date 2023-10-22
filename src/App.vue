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
    handleCategoryChange(selectedCategory) {
      this.selectedCategory = selectedCategory.name;
      console.log(selectedCategory.name);
    },
  },
  async created() {
    try {
      this.categoryData = sortCategoryWithChildrenByName(
        await fetchCategories()
      );
      // this.selectedCategory = this.categoryData[0].children[0].name;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Manrope&family=Rubik:wght@500&family=Work+Sans&display=swap");

#app {
  font-family: Manrope, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  display: flex;
  flex-direction: column;
  align-items: center;
  color: #252631;
  font-size: 14px;
  margin-top: 60px;
}
</style>
