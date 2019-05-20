let mongoose=require('mongoose');
mongoose.connect('mongodb://test:test123@104.128.80.5:27017/test',{useNewUrlParser:true})
let db = mongoose.connection;
db.on('error',(error)=>{
    console.log(error)
})

db.on('disconnected', function () {
    console.log('数据库连接断开');
})
//定义Schema
let blogSchema=mongoose.Schema({
    title:String,
    author:String,
    content:String,
    comments:[{content:String,date:Date}],
    date:{type:Date,default:Date.Now},
    meta:{
        votes:Number,
        favs:Number
    }
})

let Blog=db.model('blog',blogSchema)


// let blog=new Blog({
//     title:'关于年终奖翻倍的通知2',
// })

db.on('open',async ()=>{
    console.log('数据库连接成功')

   let res= await Blog.create({
        title:'关于年终奖翻倍的通知2',
    })
    console.log(res)
})
