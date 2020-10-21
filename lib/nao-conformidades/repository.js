const { getCollection, ObjectId } = require('../database');

const COLLECTION_NAME = 'naoConformidades';

const naoConformidadesRepository = (() => {
  const find = (filter = {}, options = {}) => getCollection(COLLECTION_NAME).find(filter, options);
  const findOne = (filter = {}) => {
    if(filter._id) {
      filter._id = ObjectId(filter._id);
    }
    return getCollection(COLLECTION_NAME).findOne(filter);
  }
  const insertOne = (naoConformidade) => getCollection(COLLECTION_NAME).insertOne(naoConformidade);
  
  return {
    find,
    findOne,
    insertOne
  };
})();

module.exports = naoConformidadesRepository;
