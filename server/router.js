const router = express.Router();
const controller = require('./controllers.js');

router.get('/', controller.index.get);


module.exports = router;
