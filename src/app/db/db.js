import mongoose from 'mongoose';

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/db_dev');
        console.log('DB Connected');
    } catch (error) {
        console.log('Connect failed');
    }
}

export default { connect };
