import { DataTypes, Model } from 'sequelize';
import { sequelizeDB } from '../db/db-connection';
import { subscribeinterface } from '../interface/subscribe.interface';



export class SubscribeInstance extends Model<subscribeinterface> {
}
SubscribeInstance.init(
    {
        SB_ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        EMAIL: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize: sequelizeDB,
        tableName: 'tbl_subscribe',
    }
);

