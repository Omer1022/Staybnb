const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const ObjectId = require('mongodb').ObjectId

async function query(filterBy) {
  try {
    const filterCriteria = _buildFilterCriteria(filterBy)
    const collection = await dbService.getCollection('stay')
    let stays = await collection.find(filterCriteria).toArray()
    return stays
  } catch (err) {
    logger.error('cannot find stays', err)
    throw err
  }
}

async function getById(stayId) {
  try {
    const collection = await dbService.getCollection('stay')
    const stay = collection.findOne({ _id: ObjectId(stayId) })
    return stay
  } catch (err) {
    logger.error(`while finding stay ${stayId}`, err)
    throw err
  }
}

async function remove(stayId) {
  try {
    const collection = await dbService.getCollection('stay')
    await collection.deleteOne({ _id: ObjectId(stayId) })
    return stayId
  } catch (err) {
    logger.error(`cannot remove stay ${stayId}`, err)
    throw err
  }
}

async function add(stay) {
  try {
    const collection = await dbService.getCollection('stay')
    const addedStay = await collection.insertOne(stay)
    stay._id = addedStay.insertedId
    return stay
  } catch (err) {
    logger.error('cannot insert stay', err)
    throw err
  }
}

async function update(stay) {
  try {
    var id = ObjectId(stay._id)

    delete stay._id
    const collection = await dbService.getCollection('stay')
    await collection.updateOne({ _id: id }, { $set: { ...stay } })

    return stay
  } catch (err) {
    logger.error(`cannot update stay ${stayId}`, err)
    throw err
  }
}

module.exports = {
  remove,
  query,
  getById,
  add,
  update,
}

function _buildFilterCriteria(filterBy = { destination: '', numOfBeds: 1, labels: ''}) {
  const { destination, numOfBeds, labels } = filterBy
  const criteria = {}
  criteria.capacity = { $gte: numOfBeds }
  if (destination) {
    criteria.address.city = { $regex: destination, $options: 'i' }
    criteria.address.country = { $regex: destination, $options: 'i' }
  }
  if (labels) criteria.labels = { $in: labels }
  return criteria
}
