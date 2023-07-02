import { DataTypes, Model } from 'sequelize';
import { sequelizeDB } from '../db/db-connection';
import { UserAttributes } from '../interface/auth.interface';



export class UserInstance extends Model<UserAttributes> { }
UserInstance.init(
    {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        USERROLE: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue:0,
        },
        USERNAME: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        EMAIL: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        PASSWORD: {
            type: DataTypes.TEXT(),
            allowNull: false,
        },
        EMAILSTATUS: {
            type: DataTypes.BOOLEAN(),
            allowNull: false,
        },
        ISDELETED: {
            type: DataTypes.BOOLEAN(),
            allowNull: false,
        },

    },
    {
        sequelize: sequelizeDB,
        tableName: 'tbl_user',
    }
);

