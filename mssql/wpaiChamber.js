/* eslint-disable camelcase */
const round = (number, places) => {
    let rounder = `1`

    for (let i = 0; i < places; i++) {
        rounder += `0`
    }

    return (Math.round(number * rounder) / rounder).toFixed(places)
}

module.exports = (sequelize, DataTypes) => {
    const wpaiChamber = sequelize.define(
        `wpaiChamber`,
        {
            rnc_regid: {
                type: DataTypes.STRING(40),
                allowNull: false,
                primaryKey: true,
            },
            ChamberYes: {
                type: DataTypes.FLOAT,
                allowNull: true,
                get: function () {
                    return round(this.getDataValue(`ChamberYes`) * 100, 2)
                },
            },
            ChamberNo: {
                type: DataTypes.FLOAT,
                allowNull: true,
                get: function () {
                    return round(this.getDataValue(`ChamberNo`) * 100, 2)
                },
            },
            FreeEnterpriseYes: {
                type: DataTypes.FLOAT,
                allowNull: true,
                get: function () {
                    return round(this.getDataValue(`FreeEnterpriseYes`) * 100, 2)
                },
            },
            FreeEnterpriseNo: {
                type: DataTypes.FLOAT,
                allowNull: true,
                get: function () {
                    return round(this.getDataValue(`FreeEnterpriseNo`) * 100, 2)
                },
            },
            RBallot: {
                type: DataTypes.FLOAT,
                allowNull: true,
                get: function () {
                    return round(this.getDataValue(`RBallot`) * 100, 2)
                },
            },
            DBallot: {
                type: DataTypes.FLOAT,
                allowNull: true,
                get: function () {
                    return round(this.getDataValue(`DBallot`) * 100, 2)
                },
            },
            Turnout: {
                type: DataTypes.FLOAT,
                allowNull: true,
                get: function () {
                    return round(this.getDataValue(`Turnout`) * 100, 2)
                },
            },
            NetR: {
                type: DataTypes.FLOAT,
                allowNull: true,
                get: function () {
                    return round(this.getDataValue(`NetR`) * 100, 2)
                },
            },
            NetC: {
                type: DataTypes.FLOAT,
                allowNull: true,
                get: function () {
                    return round(this.getDataValue(`NetC`) * 100, 2)
                },
            },
            LikelyR: {
                type: DataTypes.STRING,
                allowNull: true,

            },
            LeanR: {
                type: DataTypes.STRING,
                allowNull: true,

            },
            LeanD: {
                type: DataTypes.STRING,
                allowNull: true,

            },
            LikelyD: {
                type: DataTypes.STRING,
                allowNull: true,

            },
            RTurnout_Targets: {
                type: DataTypes.STRING,
                allowNull: true,

            },
            DTurnout_Targets: {
                type: DataTypes.STRING,
                allowNull: true,

            },
            ChamberSupp: {
                type: DataTypes.BOOLEAN,
                allowNull: true,

            },
            ChamberBroad: {
                type: DataTypes.BOOLEAN,
                allowNull: true,

            },
            ChamberMobilization: {
                type: DataTypes.STRING,
                allowNull: true,

            },
            ChamberPersuasion: {
                type: DataTypes.STRING,
                allowNull: true,

            },
            ChamberMobilizationBroad: {
                type: DataTypes.STRING,
                allowNull: true,

            },
            ChamberPersuasionBroad: {
                type: DataTypes.STRING,
                allowNull: true,

            },
            NetF: {
                type: DataTypes.FLOAT,
                allowNull: true,
                get: function () {
                    return round(this.getDataValue(`NetF`) * 100, 2)
                },
            },



        },
        {
            tableName: `wpaiChamber`,
            timestamps: false,
            freezeTableName: true,
        },
    )
    return wpaiChamber
}