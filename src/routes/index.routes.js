const {Router} = require('express')
const router = Router()

router.get('/', (req, res) =>
{
    res.send('La API está trabajando correctamente...');
});



module.exports = router

