import { DataTypes } from "sequelize";
import { sequelize } from "../conection/dbconection.js";

export const Product = sequelize.define('Product', {
    productID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    productName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    SupplierID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        default: 1,
    },
    CategoryID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        default: 1,
    },
    QuantityPerUnit: {
        type: DataTypes.STRING,
        allowNull: false,
        default: "N/A",
    },
    UnitPrice: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        default: 0.00,
    },
    UnitsInStock: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        default: 0,
    },
    UnitsOnOrder: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        default: 0,
    },
    ReorderLevel: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        default: 0,
    },
    Discontinued: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: 0,
    },
}, {
    tableName: 'products',
    timestamps: false,
});