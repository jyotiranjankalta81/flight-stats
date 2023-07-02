import { DataTypes, Model } from 'sequelize';
import { sequelizeDB } from '../db/db-connection';
import { section2interface } from '../interface/section2.interface';



export class Section2Instance extends Model<section2interface> {
}
Section2Instance.init(
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
        tableName: 'tbl_section2',
    }
);

