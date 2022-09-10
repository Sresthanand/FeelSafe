const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');

const authRoutes=require('./routes/auth');
const uri="mongodb+srv://admin:admin@feelsafe.3dx9i.mongodb.net/feelsafe?retryWrites=true&w=majority";

const app=express();

app.use(cors());
app.use(express.json());
mongoose.connect(uri,{useNewUrlParser: true,useUnifiedTopology: true}).then(() => {
    console.log('connected to mongo');
});

app.use(authRoutes);

app.listen(process.env.PORT||8080,() => {
    console.log("Server running");
});