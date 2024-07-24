const {connect}=require('mongoose');

const Mongo_URL="mongodb+srv://abhinavreddy0002:cF1u5rvoWvonCr85@cluster0.hqz8ypm.mongodb.net"
const db_name=`cs-mern`;

async function connectDb(){
    try{
        await connect(`${Mongo_URL}/${db_name}`);
        console.log(`MongoDB connected`);
    }catch (err){
        console.log(err);
    }
}

connectDb();