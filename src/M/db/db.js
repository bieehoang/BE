import mongoose from 'mongoose';

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/db_dev');
        console.log('DB Connected');
    } catch (error) {
        console.log('Connect failed');
    }
}

export default { connect };
