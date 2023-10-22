export const sortCategoryWithChildrenByName = (categoryList) => {
  // Filter and sort the main category list
  const sortedCategoryList = categoryList
    .filter((category) => category.children && category.children.length > 0)
    .sort((categoryA, categoryB) => categoryA.name.localeCompare(categoryB.name));

  // Sort children within each parent by name
  const sortedCategoryListWithChildren = sortedCategoryList.map((parent) => ({
    ...parent,
    children: parent.children
      ? parent.children.sort((childA, childB) => childA.name.localeCompare(childB.name))
      : parent.children,
  }));

  return sortedCategoryListWithChildren;
};
