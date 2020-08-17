/* function: get category name from products */
export const getCategoryName = (p, id) => {
  let categories = [];
  let name = id;
  if (p.length > 0) {
    categories = p[0].categoryPath;
    for (var i = 0; i < categories.length; i++) {
      if (categories[i].id === id) {
        name = categories[i].name;
      }
    }
  }
  return name;
}
