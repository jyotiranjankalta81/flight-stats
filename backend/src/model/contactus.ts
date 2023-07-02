import { DataTypes, Model } from 'sequelize';
import { sequelizeDB } from '../db/db-connection';
import { contactusinterface } from '../interface/contactus.interface';



export class ContactusInstance extends Model<contactusinterface> {
}
ContactusInstance.init(
    {
        CONTACTUS_ID: {
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
        PHONE: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        EMAIL: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        MESSAGE: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize: sequelizeDB,
        tableName: 'tbl_contactus',
    }
);

