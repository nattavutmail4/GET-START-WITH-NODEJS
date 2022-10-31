const router = require('express').Router();
const {
    getAllPorudcts,
    SearchproductById,
    CreateProduct,
    UpdateProduct,
    DeleteProduct
}=require('../controllers/productcontrollers');
router.get('/',getAllPorudcts);
router.get('/:id',SearchproductById);
router.post('/',CreateProduct);
router.patch('/:id',UpdateProduct);
router.delete('/:id',DeleteProduct);
module.exports = router;