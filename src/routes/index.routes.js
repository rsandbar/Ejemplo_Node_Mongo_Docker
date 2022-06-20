const {Router} = require('express')
const router = Router()

router.get('/', (req, res) =>
{
    res.send('La API está trabajando...');
});



module.exports = router

