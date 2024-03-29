const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/user', userRoutes);
router.use('/post', blogRoutes);
router.use('/comment', commentRoutes);

module.exports = router;
