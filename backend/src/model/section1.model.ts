import { DataTypes, Model } from 'sequelize';
import { sequelizeDB } from '../db/db-connection';
import { section1interface } from '../interface/section1.interface';



export class Section1Instance extends Model<section1interface> {
}
Section1Instance.init(
    {
        SE_ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        IMAGE: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        TITLE: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        CONTENT: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        NAME: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        ADDED_BY: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        sequelize: sequelizeDB,
        tableName: 'tbl_section1',
    }
);

