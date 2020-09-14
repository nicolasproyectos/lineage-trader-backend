const { Router } = require('express');
const {getWeapons,getArmors,getSets} = require('../controllers/items');
const router = Router();


router.get('/weapons', getWeapons);
router.get('/setss', getSets);
router.get('/armors', getArmors);

module.exports = router;
