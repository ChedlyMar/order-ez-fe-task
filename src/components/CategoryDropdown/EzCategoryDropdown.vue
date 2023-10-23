<template>
  <!--
    USE OBJECT TO PASS PROPS IF WE HAVE 3 OR MORE --NOT MANDATORY
   -->
  <ez-select
    ref="select"
    class="input-group"
    :name="name"
    :disabled="disabled"
    :isFullWidth="isFullWidth"
    :value="selected"
    :selected="selected"
    :label="label"
    :options="data"
    @change="onChange"
  >
    <template v-slot:display>
      <ul>
        <li v-for="option in data" :key="option.id">
          <ez-option :disabled="true" :option="option">
            {{ option.name }}
          </ez-option>

          <ul v-if="option.children && option.children.length">
            <li
              v-for="child in option.children"
              :key="child.id"
              @click="onChange(child)"
            >
              <ez-option :option="child">{{ child.name }}</ez-option>
            </li>
          </ul>
        </li>
      </ul>
    </template>
  </ez-select>
</template>

<script>
/*
  BE MORE EXPLICITE IN IMPORTS
  import EzSelect from "@/components/Select";
  import EzOption from "@/components/Select";
*/
import EzSelect, { EzOption } from "@/components/Select";

export default {
  name: "EzCategoryDropdown",
  components: {
    EzSelect,
    EzOption,
  },
  props: {
    /*
      CHANGE data TO categories OR categoryList
    */
    data: {
      type: Array,
      required: true,
    },
    selected: {
      type: [Number, String],
      /*
        DEFINE DEFAULT VALUE WITH NON REQUIRED PROPS
      */
      required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    isFullWidth: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      required: false,
    },
    isParentDisabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
    },
  },
  methods: {
    onChange(value) {
      this.$emit("change", value);
    },
    reset() {
      this.$refs.select.reset();
    },
  },
};
</script>
