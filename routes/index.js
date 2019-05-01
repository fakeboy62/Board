import express from 'express';
import sequelize from '../database/connection';

const router = express.Router();

/* GET index page. */

router.get('/', (req, res) => {               // 게시판 보여주는 미들웨어
  sequelize.models.user.findAll({
  }).then((result) => {
    res.render('index.ejs', {
      success: result
    });
  }).catch((err) => {
    console.log(err);
  });
});

router.get('/make', (req, res) => {
  res.render('make.ejs');
});

router.post('/makes', (req, res) => {     // 게시판 작성하는 
  sequelize.models.user.create({
    user_title: req.body.user_title,
    user_writer: req.body.user_writer,
    user_contents: req.body.user_contents
  }).then((result) => {
    console.log(result);
    res.redirect('/');
  }).catch((err) => {
    console.log(err);
    res.json({ success: 0 });
  });
});

router.get('/:id', (req, res) => {            // 게시물 가져오는 미들웨어
  sequelize.models.user.findOne({
    where: { id: req.params.id }
  }).then((result) => {
      console.log(result, '게시물 가져오는데 성공');
      res.render('board.ejs', {
        r: result
      });
    }).catch((err) => {
      console.log(err, '게시물 가져오는데 실패');
    });
  });

router.get('/delete/:id',(req,res)=>{             // 게시물 삭제하는 미들웨어
    sequelize.models.user.destroy({
      where:{
        id:req.params.id      
      }
    }).then((result)=>{
      res.redirect('/');
      console.log(result,"삭제 완료")
    }).catch((err)=>{
      console.log(err,"삭제 실패");
    });
});


export default router;
