/**
 * @export
 * @param {object} config.json
 * @return {array}
 */
module.exports = (config) => {
  const dependeciesList = new Array()
  Object.keys(config.entry).forEach(key => {
    config.entry[key].forEach(el => dependeciesList.push(el))
  })
  return dependeciesList
};
