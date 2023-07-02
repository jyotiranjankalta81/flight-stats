import { DataTypes, Model } from 'sequelize';
import { sequelizeDB } from '../db/db-connection';
import { getstartedinterface } from '../interface/getstarted.interface';



export class GetStartedInstance extends Model<getstartedinterface> {
}
GetStartedInstance.init(
    {
        GS_ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        FIRSTNAME: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        LASTNAME: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        EMAIL: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        PHONE: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize: sequelizeDB,
        tableName: 'tbl_getstarted',
    }
);

