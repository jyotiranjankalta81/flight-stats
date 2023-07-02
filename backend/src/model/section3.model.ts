import { DataTypes, Model } from 'sequelize';
import { sequelizeDB } from '../db/db-connection';
import { section3interface } from '../interface/section3.interface';



export class Section3Instance extends Model<section3interface> {
}
Section3Instance.init(
    {
        SE_ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        HEADING: {
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
        tableName: 'tbl_section3',
    }
);

