import Mongoose from 'mongoose';
import logger from '../core/logger/app-logger'
import config from '../core/config/config.dev'

Mongoose.Promise = global.Promise;

const connectToDb = async () => {
    try {
        await Mongoose.connect(`mongodb://wanderlist:oP1uDSBxw5HzwhSbVjeTw7xWgWwtQReKlJE2SeMY5IKpIKwzrNzb3GoiNlh176tIvzkynQwn1hvBC651oLed0Q==@wanderlist.documents.azure.com:10255/?ssl=true&replicaSet=globaldb`, { useMongoClient: true });
        logger.info('Connected to mongo!!!');
    }
    catch (err) {
        logger.error('Could not connect to MongoDB');
    }
}

export default connectToDb;