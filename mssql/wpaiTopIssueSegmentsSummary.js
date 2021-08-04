/* eslint-disable camelcase */
const round = (number, places) => {
    let rounder = `1`

    for (let i = 0; i < places; i++) {
        rounder += `0`
    }

    return (Math.round(number * rounder) / rounder).toFixed(places)
}

module.exports = (sequelize, DataTypes) => {
    const wpaiTopIssueSegmentsSummary = sequelize.define(
        `wpaiTopIssueSegmentsSummary`,
        {
            state: {
                type: DataTypes.STRING(2),
                allowNull: false,
                primaryKey: true,
            },
            registrationaddresszip5: {
                type: DataTypes.STRING(5),
                allowNull: true,
            },
            CongressionalDistrict: {
                type: DataTypes.STRING(2),
                allowNull: true,
            },
            LegislativeDistrict: {
                type: DataTypes.STRING(3),
                allowNull: true,
            },
            SenateDistrict: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            Conservative_Ideology_Importance: {
                type: DataTypes.FLOAT,
                allowNull: false,
                get: function () {
                    return round(this.getDataValue(`Conservative_Ideology_Importance`) * 100, 2)
                },
            },
            DACA_Support: {
                type: DataTypes.FLOAT,
                allowNull: false,
                get: function () {
                    return round(this.getDataValue(`DACA_Support`) * 100, 2)
                },
            },
            Gun_Rights_Advocate: {
                type: DataTypes.FLOAT,
                allowNull: false,
                get: function () {
                    return round(this.getDataValue(`Gun_Rights_Advocate`) * 100, 2)
                },
            },
            Religiosity_High: {
                type: DataTypes.FLOAT,
                allowNull: false,
                get: function () {
                    return round(this.getDataValue(`Religiosity_High`) * 100, 2)
                },
            },
            School_Choice_Supporter: {
                type: DataTypes.FLOAT,
                allowNull: false,
                get: function () {
                    return round(this.getDataValue(`School_Choice_Supporter`) * 100, 2)
                },
            },
            Tax_Cut_Supporter: {
                type: DataTypes.FLOAT,
                allowNull: false,
                get: function () {
                    return round(this.getDataValue(`Tax_Cut_Supporter`) * 100, 2)
                },
            },
            Term_limits_important: {
                type: DataTypes.FLOAT,
                allowNull: false,
                get: function () {
                    return round(this.getDataValue(`Term_limits_important`) * 100, 2)
                },
            },
            Trump_Tribe: {
                type: DataTypes.FLOAT,
                allowNull: false,
                get: function () {
                    return round(this.getDataValue(`Trump_Tribe`) * 100, 2)
                },
            },
            Wall_Supporter: {
                type: DataTypes.FLOAT,
                allowNull: false,
                get: function () {
                    return round(this.getDataValue(`Wall_Supporter`) * 100, 2)
                },
            },
            Pro_Life_No_Exceptions: {
                type: DataTypes.FLOAT,
                allowNull: false,
                get: function () {
                    return round(this.getDataValue(`Pro_Life_No_Exceptions`) * 100, 2)
                },
            },

        },
        {
            tableName: `wpaiTopIssueSegmentsSummary`,
            timestamps: false,
            freezeTableName: true,
        },
    )
    return wpaiTopIssueSegmentsSummary
}