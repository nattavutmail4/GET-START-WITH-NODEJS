const router = require('express').Router();
const {
    getAllTutorials,
    searchbyid,
    createTutorials,
    updateTutorials,
    deletetutorials
} = require('../controllers/tutorials.controllers');

const { checkToken } = require('../middleware/auth');

router.get('/',getAllTutorials);
router.get('/:id',searchbyid);
router.post('/',createTutorials);
router.patch('/:id',updateTutorials);
router.delete('/:id',checkToken,deletetutorials);


module.exports = router;