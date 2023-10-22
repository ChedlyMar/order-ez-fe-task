<template>
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
          <ez-option class="parent" :option="option">
            {{ option.name }}
          </ez-option>

          <ul v-if="option.children && option.children.length">
            <li v-for="child in option.children" :key="child.id">
              <ez-option :option="child">{{ child.name }}</ez-option>
            </li>
          </ul>
        </li>
      </ul>
    </template>
  </ez-select>
</template>

<script>
import EzSelect, { EzOption } from "@/components/Select";

export default {
  name: "EzCategoryDropdown",
  components: {
    EzSelect,
    EzOption,
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
    selected: {
      type: [Number, String],
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

<style scoped lang="scss">
:deep() .ez-select__display-container {
  height: 36px;
}
.ez-select__dropdown {
  li ul .ez-option {
    padding-left: 24px;
  }
}
</style>
