const router = require('express').Router();
const { User } = require('../../models');
const { Comment } = require('../../models/');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const dbCommentData = await Comment.create({
      title: req.body.commentTitle,
      comment_text: req.body.commentText,
      post_id: req.body.postId,
      user_id: req.session.user_id,
    });

    res.json(dbCommentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    console.log(req.body)
    const dbCommentData = await Comment.update(
      {
        title: req.body.commentTitle,
        comment_text: req.body.commentText,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    console.log(dbCommentData)
    if (!dbCommentData) {
      res.status(400).json({ message: "Could not update comment!" });
      return;
    }
    res.status(200).json({ message: "Comment updated successfully!" });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const dbCommentData = await Comment.destroy({ where: { id: req.params.id } });
    if (!dbCommentData) {
      res.status(400).json({ message: "Could not delete comment!" });
      return;
    }
    res.status(200).json({ message: "Comment deleted successfully!" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;