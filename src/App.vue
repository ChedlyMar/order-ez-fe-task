<template>
  <div id="app">
    <h1>OrderEz Task</h1>
    <h2 v-if="loadingCategories">Loading ...</h2>
    <div v-else>
      <EzCategoryDropdown
        :data="categoryData"
        :selected="selectedCategory"
        @change="handleCategoryChange"
      />
    </div>
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
      loadingCategories: false,
    };
  },
  methods: {
    handleCategoryChange(selectedCategory) {
      this.selectedCategory = selectedCategory.name;
      console.log("selectedCategory: ", this.selectedCategory);
    },
  },
  async created() {
    try {
      this.loadingCategories = true;
      this.categoryData = sortCategoryWithChildrenByName(
        await fetchCategories()
      );
    } catch (error) {
      console.log(error);
    } finally {
      this.loadingCategories = false;
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
