const express = require('express')
// const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const { log } = require('../../middlewares/logger.middleware')
const { get, getStayById, addStay, updateStay, removeStay, addReview } = require('./to./stay.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', log, getStays)
router.get('/:id', getStayById)
// router.post('/', requireAuth, requireAdmin, addStay) // TODO: remove middleware
router.post('/', addStay) 
router.put('/:id', updateStay)
// router.put('/:id', requireAuth, requireAdmin, updateStay)
router.delete('/:id', removeStay)

module.exports = router