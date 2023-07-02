import { DataTypes, Model } from 'sequelize';
import { sequelizeDB } from '../db/db-connection';
import { onboardinginterface } from '../interface/onboarding.interface';



export class OnBoardingInstance extends Model<onboardinginterface> {
}
OnBoardingInstance.init(
    {
        OB_ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        FIRSTNAME: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        LASTNAME: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        EMAIL: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        ABOUT: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        BODY_FILE: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    },
    {
        sequelize: sequelizeDB,
        tableName: 'tbl_onboarding',
    }
);

