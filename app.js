

const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
app.use(express.static('public'))
app.set('view engine', 'ejs')
var moment=require('moment')

app.use(express.urlencoded({ extended: true }));
/* auto refresh ............... */
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));
 
 
const connectLivereload = require("connect-livereload");
app.use(connectLivereload());
 
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});
/* update delete date */
var methodOverride = require('method-override')
app.use(methodOverride('_method'))
/**************** */ 

mongoose.connect("mongodb+srv://mouhallouche47:123mohck56@cluster01.d5t6loj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01")
.then(() => {
  app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });
 })
 .catch((err) => {
   console.log(err);
 });


const Info=require("./models/infoSchema")

/*.................. */
app.get('/',(req, res) => {
  res.render('moh')
  
  })



    



 app.get("/bb.html",  (req, res) => {
    //  res.render('bb')
    Info.find()
    .then((resalte)=>{
    console.log(resalte)
  
    
    res.render('bb',{arr: resalte , moment :moment})
  
    }).catch((err)=>{
     console.log(err)
    })
  
  
 })

//  app.post("/bb.html",  (req, res) => {
//   console.log(req.body);

//   Info.create(req.body)
//   .then(()=>{
//     res.redirect("/")
//   } )
//   .catch( (err ) => {
//     console.log(err);
//   });
// });

app.post("/bb.html",   (req, res) => {
  console.log(req.body);
  const article =    new Info(req.body);

  article
    .save()
    .then( result => {
      res.redirect("/");
    })
    .catch( err => {
      console.log(err);
    });
});
 


//serachr

app.post("/serach", (req, res) => {
 console.log(req.body.searchTx)
 Info.find({firstname:req.body.searchTx}).then((resallte)=>{
  console.log(resallte)
  res.render("serachr",{arr:resallte,moment:moment})
 }).catch((err)=>{
  console.log(err)
 })
});
 
//



app.put("/upd/:id", (req, res) => {
  console.log(req.body)
  Info.updateOne({_id: req.params.id}, req.body)
    .then(() => {
      res.redirect("/");
  })
  .catch((err)=>{
    console.log(err)
  })
}); 


 

     app.get("/upd/:id",(req,res)=>{
      Info.findById(req.params.id)
      .then((reslatt)=>{
        console.log("/////////////////////////////")
        console.log(reslatt)
    res.render("upd",{obj:reslatt })
    
    })
    .catch((err)=>{
      console.log(err)
     
        })
    
      } );
      app.get("/views/:id",(req, res) => {
        Info.findById(req.params.id)
        .then((reslatt)=>{
          console.log(".............................")
          console.log(reslatt)
          res.render("view",{obb:reslatt,moment:moment})
        })
        .catch((err)=>{
        console.log(err)
       
          })
           });






           /*put */
           app.put("/upd/:id", (req, res) => {
            console.log(req.body);
            Info.findByIdAndUpdate()({_id: req.params.id}, req.body)
              .then((pp) => {
                res.redirect("/");
            })
            .catch((err)=>{
              console.log(err)
            })
          }); 
 ///delete 
 app.delete("/delete/:id", (req, res) => {
  console.log(req.body);
  Info.deleteOne({ _id: req.params.id }).then((result) => {
    res.redirect("/");
    })
  
    .catch((err )=>{
      console.log(err)
    })
  }); 

 
 
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

/******* */
// const mongoose = require('mongoose');


 