const router = require('express').Router();
const Conection = require('../models/conection');

// creating user

// login user

router.post('/conection', async(req, res)=> {
  try {
    const { userID, followersID} = req.body;
    let  conection = await new Conection ;
    conection.userID=userID
     conection.followersID=followersID
    await conection.save();
    res.status(200).json(conection);
  } catch (e) {
      res.status(400).json(e.message)
  }
})

router.get('/conection/:id', async(req, res)=> {
  try {
    const userID = req.params.id;
    let  conection = await  Conection.find({userID}) ;
    res.status(200).json(conection);
  } catch (e) {
      res.status(400).json(e.message)
  }
})


router.get('/follower/:id', async(req, res)=> {
  try {
    const followersID = req.params.id;
    let  conection = await  Conection.find({followersID}) ;
    res.status(200).json(conection);
  } catch (e) {
      res.status(400).json(e.message)
  }
})


router.delete('/conection/:id', async(req, res)=> {
  try {
    const id = req.params.id;
    let  conection = await  Conection.deleteOne({_id:id}) ;
    res.status(200).json(conection);
  } catch (e) {
      res.status(400).json(e.message)
  }
})

router.patch('/conection/:id', async(req, res)=> {
  try {
    const id = req.params.id;
    let  conection = await  Conection.updateOne({_id:id},{status:"accepted"}) ;
    
    res.status(200).json(conection);
  } catch (e) {
      res.status(400).json(e.message)
  }
})


module.exports = router
