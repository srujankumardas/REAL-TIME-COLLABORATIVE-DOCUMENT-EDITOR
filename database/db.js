import mongoose  from 'mongoose';

const Connection = async (username = 'usercode', password = 'codeforinterview') => {
    const URL = `mongodb://${username}:${password}@ac-b2mqfos-shard-00-00.h2sldao.mongodb.net:27017,ac-b2mqfos-shard-00-01.h2sldao.mongodb.net:27017,ac-b2mqfos-shard-00-02.h2sldao.mongodb.net:27017/Project 0?ssl=true&replicaSet=atlas-h6wp98-shard-0&authSource=admin&retryWrites=true&w=majority&appName=google-docs-clone`;

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {   
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;