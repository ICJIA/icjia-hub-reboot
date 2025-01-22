export const format = (item) => {
  console.log(item, 'item')
  const data = item.attributes

  return {
    ...data,
    categories: applyIfExists(formatCategories, data.categories),
    date: applyIfExists(formatDate, data.date),
    // timeperiod: applyIfExists(formatTimeperiod, data.timeperiod),
  }
}

const applyIfExists = (func, value) => (value ? func(value) : undefined);

const formatCategories = (categories) =>
  categories.map(capitalize).join(", ");

const formatDate = (date) => date?.slice(0, 10) || "";

const formatTimeperiod = ({ yearmin, yearmax, yeartype }) =>
  `${yearmin}-${yearmax} (${yeartype})`;

const capitalize = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);
