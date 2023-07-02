import { DataTypes, Model } from 'sequelize';
import { sequelizeDB } from '../db/db-connection';
import { getonboardhomeinterface } from '../interface/getonboardhome.interface';



export class GetOnBoardHomeInstance extends Model<getonboardhomeinterface> {
}
GetOnBoardHomeInstance.init(
    {
        OBH_ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        NAME: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        EMAIL: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        CONTACTUS: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        ADDRESS: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        MESSAGE: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    },
    {
        sequelize: sequelizeDB,
        tableName: 'tbl_get_onboard_home',
    }
);

