/* function: get category name from products */
export const getCategoryName = (categories, id) => {

  let subCategories = [];
  let name = id;

  /*loop thru main categories */
  if (categories.length > 0) {
    for (var i = 0; i < categories.length; i++) {
      if (categories[i].id === id) {
        name = categories[i].name;
      } else {
        /*loop subcategories */
        subCategories = categories[i].subCategories;
        if (subCategories.length > 0) {
          for (var j = 0; j < subCategories.length; j++) {
            if (subCategories[j].id === id) {
              name = subCategories[j].name;
            }
          }
        }
      }
    }
  }
  return name;
}
