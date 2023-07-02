import { DataTypes, Model } from 'sequelize';
import { sequelizeDB } from '../db/db-connection';
import { reviewinterface } from '../interface/review.interface';



export class CustomerReviewsInstance extends Model<reviewinterface> {
}
CustomerReviewsInstance.init(
    {
        RE_ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        IMAGE: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        CONTENT: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        NAME: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        DESIGNATION: {
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
        tableName: 'tbl_reviews',
    }
);

