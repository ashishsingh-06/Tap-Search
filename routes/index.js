const express = require('express');
const router = express.Router();
const indexing = require('../controller/indexing');
let paraArray = [];

router.get('/',(req,res,next)=>{

    res.render('index.ejs',{'res':''});
    
    next();
});

router.get('/clear',(req,res,next)=>{

    paraArray = [];
    indexing.clear();
        
    res.render('index',{'res':''});
});


router.use('/index',async (req,res,next)=>{

    let para = req.body.para;
    paraArray = para.split('\r\n').filter(Boolean);
    
    paraArray.forEach(element => {
        
       indexing.indexIn(element);
       
    });   
    
    res.redirect('/');

});

router.use('/search',async (req,res,next)=>{

        let searchData = req.body.search;
        
        let result = await indexing.search(searchData);
        
    
        res.render('index',{'res':result});  
});


module.exports = router;