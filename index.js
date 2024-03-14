import express from 'express';
const app=express();
app.use(express.json());



app.get("/order",(req,res)=>{

  
  const menu=req.query.menu;
  const quantity=req.query.quantity;
  const price=req.query.price;
  const {user,country,age}=req.headers;
  
  const total=parseInt(price)*parseInt(quantity); 
  
    res.json({
      message:`You order ${menu} and quantity is ${quantity} price-${price}`,
      bill:`Total bill ${total}`,
      detail:`Hello i am ${user} from ${country} and age is ${age}`
      
    })

app.get("/food/:type",(req,res)=>{
 

  const {type}=req.params;
  if(type=="veg"){
    return res.json({
      message:"You ordered veg food"
    })
  }
  else{
    return res.json({
      message:"You ordered non-veg food"
    })
  }

})

})

app.post("/user",(req,res)=>{
  const {name,age,city}=req.body;

  res.json({
    details:`My Name is ${name} an age is ${age} from ${city}`
  })
})








app.listen(5000,()=>{
    console.log("Your Server is Running on 5000 localhost");
})
