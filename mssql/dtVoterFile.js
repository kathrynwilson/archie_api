/* eslint-disable camelcase */
/* jshint indent: 2 */
const round = (number, places) => {
  let rounder = `1`
  for (let i = 0; i < places; i++) {
    rounder += `0`
  }
  return (Math.round(number * rounder) / rounder).toFixed(places)
}

// 1-Voted. 2-Absentee/Mail.
// 3-R primary ballot. 4=R Absentee/Mail.
// 5-D primary ballot. 6-D Absentee/Mail.
// 7-Early. 8-R Early.
// 9-D Early. 0-Did not vote. NA/NULL-Unknown. (edited)

function pctToText (input) {
  let output = ``
  input = round(input * 100, 1)
  if (input > 0 && input <= 20) {
    output = `Very Low`
  }
  if (input > 21 && input <= 40) {
    output = `Low`
  }
  if (input > 41 && input <= 60) {
    output = `Moderate`
  }
  if (input > 61 && input <= 80) {
    output = `High`
  }
  if (input > 81 && input <= 100) {
    output = `Very High`
  }
  return output

}


function voterHistoryGetter (input) {
  let output = ``
  switch (input) {
    case `1`:
      output = `[1] Voted`
      break
    case `2`:
      output = `[2] Absentee/Mail`
      break
    case `3`:
      output = `[3] Primary Ballot`
      break
    case `4`:
      output = `[4] Absentee/Mail`
      break
    case `5`:
      output = `[5] Primary Ballot`
      break
    case `6`:
      output = `[6] D Absentee Ballot`
      break
    case `7`:
      output = `[7] Early`
      break
    case `8`:
      output = `[8] R Early`
      break
    case `9`:
      output = `[9] D Early`
      break
    case `0`:
      output = `[0] Didn't Vote`
      break
    default:
      output = ``
  }
  return output
}
module.exports = (sequelize, DataTypes) => {
  const dtVoterFile = sequelize.define(
    `dtVoterFile`,
    {
      DT_ID: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      DT_RegID: {
        type: DataTypes.STRING(40),
        allowNull: false,
        primaryKey: true,
      },
      StateVoterID: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      JurisdictionVoterID: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      SourceID: {
        type: DataTypes.STRING(12),
        allowNull: true,
      },
      StateKey: {
        type: DataTypes.STRING(2),
        allowNull: true,
      },
      State: {
        type: DataTypes.STRING(2),
        allowNull: true,
      },
      NamePrefix: {
        type: DataTypes.STRING(4),
        allowNull: true,
      },
      FirstName: {
        type: DataTypes.STRING(15),
        allowNull: true,
        ascii: true,
      },
      MiddleName: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      LastName: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      NameSuffix: {
        type: DataTypes.STRING(4),
        allowNull: true,
      },
      Sex: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      BirthYear: {
        type: DataTypes.STRING(4),
        allowNull: true,
      },
      BirthMonth: {
        type: DataTypes.STRING(2),
        allowNull: true,
      },
      BirthDay: {
        type: DataTypes.STRING(2),
        allowNull: true,
      },
      AgeRange: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      CongressionalAgeRange: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      RegisteredParty: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      DTCalcParty: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      RegisteredParty_RollUp: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      SelfReportedDemographic: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      ModeledEthnicity: {
        type: DataTypes.STRING(125),
        allowNull: true,
      },
      ModeledReligion: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      ModeledEthnicGroup: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      Race: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      Juriscode: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      Jurisname: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      CountyFIPS: {
        type: DataTypes.STRING(3),
        allowNull: true,
      },
      CountyName: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      CountyNumber: {
        type: DataTypes.STRING(3),
        allowNull: true,
      },
      Town: {
        type: DataTypes.STRING(3),
        allowNull: true,
      },
      Ward: {
        type: DataTypes.STRING(3),
        allowNull: true,
      },
      PrecinctNumber: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      BallotBox: {
        type: DataTypes.STRING(3),
        allowNull: true,
      },
      PrecinctName: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      CongressionalDistrict: {
        type: DataTypes.STRING(2),
        allowNull: true,
      },
      SenateDistrict: {
        type: DataTypes.STRING(3),
        allowNull: true,
      },
      SenateDistrict_Proper: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      LegislativeDistrict: {
        type: DataTypes.STRING(3),
        allowNull: true,
      },
      LegislativeDistrict_Subdivision: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      LegislativeDistrict_Proper: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      DMA: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      DMA_Number: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      CommunityType: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      CensusBlock: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      HouseHoldID: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      HouseHoldMemberID: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      RegistrationAddress1: {
        type: DataTypes.STRING(64),
        allowNull: true,
      },
      RegistrationAddress2: {
        type: DataTypes.STRING(64),
        allowNull: true,
      },
      RegistrationAddressHouseNumber: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      RegistrationAddressHouseSuffix: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      RegistrationAddressStreetPrefix: {
        type: DataTypes.STRING(2),
        allowNull: true,
      },
      RegistrationAddressStreetName: {
        type: DataTypes.STRING(28),
        allowNull: true,
      },
      RegistrationAddressStreetType: {
        type: DataTypes.STRING(4),
        allowNull: true,
      },
      RegistrationAddressStreetPost: {
        type: DataTypes.STRING(2),
        allowNull: true,
      },
      RegistrationAddressUnitType: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      RegistrationAddressUnitNumber: {
        type: DataTypes.STRING(8),
        allowNull: true,
      },
      RegistrationAddressCity: {
        type: DataTypes.STRING(28),
        allowNull: true,
      },
      RegistrationAddressState: {
        type: DataTypes.STRING(2),
        allowNull: true,
      },
      RegistrationAddressZip5: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      RegistrationAddressZip4: {
        type: DataTypes.STRING(4),
        allowNull: true,
      },
      RegistrationAddressLatitude: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      RegistrationAddressLongitude: {
        type: DataTypes.STRING(11),
        allowNull: true,
      },
      RegistrationAddressGeoCodeLevel: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      RegistrationAddress_LastCleanse: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      RegistrationAddress_LastGeoCode: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      RegistrationAddress_LastChangeOfAddress: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      ChangeOfAddress: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      ChangeOfAddressDate: {
        type: DataTypes.STRING(6),
        allowNull: true,
      },
      ChangeOfAddressType: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      MailingAddress1: {
        type: DataTypes.STRING(64),
        allowNull: true,
      },
      MailingAddress2: {
        type: DataTypes.STRING(64),
        allowNull: true,
      },
      MailingAddressHouseNumber: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      MailingAddressHouseSuffix: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      MailingAddressStreetPrefix: {
        type: DataTypes.STRING(2),
        allowNull: true,
      },
      MailingAddressStreetName: {
        type: DataTypes.STRING(28),
        allowNull: true,
      },
      MailingAddressStreetType: {
        type: DataTypes.STRING(4),
        allowNull: true,
      },
      MailingAddressStreetPost: {
        type: DataTypes.STRING(2),
        allowNull: true,
      },
      MailingAddressUnitType: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      MailingAddressUnitNumber: {
        type: DataTypes.STRING(8),
        allowNull: true,
      },
      MailingAddressCity: {
        type: DataTypes.STRING(28),
        allowNull: true,
      },
      MailingAddressState: {
        type: DataTypes.STRING(2),
        allowNull: true,
      },
      MailingAddressZip5: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      MailingAddressZip4: {
        type: DataTypes.STRING(4),
        allowNull: true,
      },
      MailingAddressSortCodeRoute: {
        type: DataTypes.STRING(9),
        allowNull: true,
      },
      MailingAddressDeliveryPoint_Code: {
        type: DataTypes.STRING(2),
        allowNull: true,
      },
      MailingAddressDeliveryPoint_CheckDigit: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      MailingAddressLineOfTravel: {
        type: DataTypes.STRING(7),
        allowNull: true,
      },
      MailingAddressLineOfTravelOrder: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      MailingAddressDeliveryPointVerificationStatus: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      MailingAddress_LastCleanse: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      MailingAddress_LastChangeOfAddress: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      LandLine_AreaCode: {
        type: DataTypes.STRING(3),
        allowNull: true,
      },
      LandLine_Number: {
        type: DataTypes.STRING(7),
        allowNull: true,
      },
      LandLine_SourceCode: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      LandLine_MatchLevel: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      LandLine_ReliabilityCode: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      LandLine_FTC_DoNotCall: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      LandLine_AppendDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      CellPhone_AreaCode: {
        type: DataTypes.STRING(3),
        allowNull: true,
      },
      CellPhone_Number: {
        type: DataTypes.STRING(7),
        allowNull: true,
      },
      CellPhone_SourceCode: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      CellPhone_MatchLevel: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      CellPhone_ReliabilityCode: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      CellPhone_FTC_DoNotCall: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      CellPhone_AppendDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      LastActiveDate: {
        type: DataTypes.STRING(8),
        allowNull: true,
      },
      RegistrationDate: {
        type: DataTypes.STRING(8),
        allowNull: true,
      },
      VoterStatus: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      PermanentAbsenteeFlag: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      // 1-Voted. 2-Absentee/Mail.
      // 3-R primary ballot. 4=R Absentee/Mail.
      // 5-D primary ballot. 6-D Absentee/Mail.
      // 7-Early. 8-R Early.
      // 9-D Early. 0-Did not vote. NA/NULL-Unknown. (edited)
      VH20G: {
        type: DataTypes.STRING(1),
        allowNull: true,
        get: function () {
          return voterHistoryGetter(this.getDataValue(`VH20G`))
        },
      },
      VH20P: {
        type: DataTypes.STRING(1),
        allowNull: true,
        get: function () {
          return voterHistoryGetter(this.getDataValue(`VH20P`))
        },
      },
      VH20PP: {
        type: DataTypes.STRING(1),
        allowNull: true,
        get: function () {
          return voterHistoryGetter(this.getDataValue(`VH20PP`))
        },
      },
      VH19G: {
        type: DataTypes.STRING(1),
        allowNull: true,
        get: function () {
          return voterHistoryGetter(this.getDataValue(`VH19G`))
        },
      },
      VH19P: {
        type: DataTypes.STRING(1),
        allowNull: true,
        get: function () {
          return voterHistoryGetter(this.getDataValue(`VH19P`))
        },
      },
      VH18G: {
        type: DataTypes.STRING(1),
        allowNull: true,
        get: function () {
          return voterHistoryGetter(this.getDataValue(`VH18G`))
        },
      },
      VH18P: {
        type: DataTypes.STRING(1),
        allowNull: true,
        get: function () {
          return voterHistoryGetter(this.getDataValue(`VH18P`))
        },
      },
      VH17G: {
        type: DataTypes.STRING(1),
        allowNull: true,
        get: function () {
          return voterHistoryGetter(this.getDataValue(`VH17G`))
        },
      },
      VH17P: {
        type: DataTypes.STRING(1),
        allowNull: true,
        get: function () {
          return voterHistoryGetter(this.getDataValue(`VH17P`))
        },
      },
      VH16G: {
        type: DataTypes.STRING(1),
        allowNull: true,
        get: function () {
          return voterHistoryGetter(this.getDataValue(`VH16G`))
        },
      },
      VH16P: {
        type: DataTypes.STRING(1),
        allowNull: true,
        get: function () {
          return voterHistoryGetter(this.getDataValue(`VH16P`))
        },
      },
      VH16PP: {
        type: DataTypes.STRING(1),
        get: function () {
          return voterHistoryGetter(this.getDataValue(`VH16PP`))
        },
        allowNull: true,
      },
      VH15G: {
        type: DataTypes.STRING(1),
        allowNull: true,
        get: function () {
          return voterHistoryGetter(this.getDataValue(`VH15G`))
        },
      },
      VH15P: {
        type: DataTypes.STRING(1),
        allowNull: true,
        get: function () {
          return voterHistoryGetter(this.getDataValue(`VH15P`))
        },
      },
      VH14G: {
        type: DataTypes.STRING(1),
        allowNull: true,
        get: function () {
          return voterHistoryGetter(this.getDataValue(`VH14G`))
        },
      },
      VH14P: {
        type: DataTypes.STRING(1),
        allowNull: true,
        get: function () {
          return voterHistoryGetter(this.getDataValue(`VH14P`))
        },
      },
      VH13G: {
        type: DataTypes.STRING(1),
        allowNull: true,
        get: function () {
          return voterHistoryGetter(this.getDataValue(`VH13G`))
        },
      },
      VH13P: {
        type: DataTypes.STRING(1),
        allowNull: true,
        get: function () {
          return voterHistoryGetter(this.getDataValue(`VH13P`))
        },
      },
      VH12G: {
        type: DataTypes.STRING(1),
        allowNull: true,
        get: function () {
          return voterHistoryGetter(this.getDataValue(`VH12G`))
        },
      },
      VH12P: {
        type: DataTypes.STRING(1),
        allowNull: true,
        get: function () {
          return voterHistoryGetter(this.getDataValue(`VH12P`))
        },
      },
      VH12PP: {
        type: DataTypes.STRING(1),
        allowNull: true,
        get: function () {
          return voterHistoryGetter(this.getDataValue(`VH12PP`))
        },
      },
      VH11G: {
        type: DataTypes.STRING(1),
        allowNull: true,
        get: function () {
          return voterHistoryGetter(this.getDataValue(`VH11G`))
        },
      },
      VH11P: {
        type: DataTypes.STRING(1),
        allowNull: true,
        get: function () {
          return voterHistoryGetter(this.getDataValue(`VH11P`))
        },
      },
      VH10G: {
        type: DataTypes.STRING(1),
        allowNull: true,
        get: function () {
          return voterHistoryGetter(this.getDataValue(`VH10G`))
        },
      },
      VH10P: {
        type: DataTypes.STRING(1),
        allowNull: true,
        get: function () {
          return voterHistoryGetter(this.getDataValue(`VH10P`))
        },
      },
      VH09G: {
        type: DataTypes.STRING(1),
        allowNull: true,
        get: function () {
          return voterHistoryGetter(this.getDataValue(`VH09G`))
        },
      },
      VH09P: {
        type: DataTypes.STRING(1),
        allowNull: true,
        get: function () {
          return voterHistoryGetter(this.getDataValue(`VH09P`))
        },
      },
      VH08G: {
        type: DataTypes.STRING(1),
        allowNull: true,
        get: function () {
          return voterHistoryGetter(this.getDataValue(`VH08G`))
        },
      },
      VH08P: {
        type: DataTypes.STRING(1),
        allowNull: true,
        get: function () {
          return voterHistoryGetter(this.getDataValue(`VH08P`))
        },
      },
      VH08PP: {
        type: DataTypes.STRING(1),
        allowNull: true,
        get: function () {
          return voterHistoryGetter(this.getDataValue(`VH08PP`))
        },
      },
      VH07G: {
        type: DataTypes.STRING(1),
        allowNull: true,
        get: function () {
          return voterHistoryGetter(this.getDataValue(`VH07G`))
        },
      },
      VH07P: {
        type: DataTypes.STRING(1),
        allowNull: true,
        get: function () {
          return voterHistoryGetter(this.getDataValue(`VH07P`))
        },
      },
      VH06G: {
        type: DataTypes.STRING(1),
        allowNull: true,
        get: function () {
          return voterHistoryGetter(this.getDataValue(`VH06G`))
        },
      },
      VH06P: {
        type: DataTypes.STRING(1),
        allowNull: true,
        get: function () {
          return voterHistoryGetter(this.getDataValue(`VH06P`))
        },
      },
      VH05G: {
        type: DataTypes.STRING(1),
        allowNull: true,
        get: function () {
          return voterHistoryGetter(this.getDataValue(`VH05G`))
        },
      },
      VH05P: {
        type: DataTypes.STRING(1),
        allowNull: true,
        get: function () {
          return voterHistoryGetter(this.getDataValue(`VH05P`))
        },
      },
      VH04G: {
        type: DataTypes.STRING(1),
        allowNull: true,
        get: function () {
          return voterHistoryGetter(this.getDataValue(`VH04G`))
        },
      },
      VH04P: {
        type: DataTypes.STRING(1),
        allowNull: true,
        get: function () {
          return voterHistoryGetter(this.getDataValue(`VH04P`))
        },
      },
      VH04PP: {
        type: DataTypes.STRING(1),
        allowNull: true,
        get: function () {
          return voterHistoryGetter(this.getDataValue(`VH04PP`))
        },
      },
      VH03G: {
        type: DataTypes.STRING(1),
        allowNull: true,
        get: function () {
          return voterHistoryGetter(this.getDataValue(`VH03G`))
        },
      },
      VH03P: {
        type: DataTypes.STRING(1),
        allowNull: true,
        get: function () {
          return voterHistoryGetter(this.getDataValue(`VH03P`))
        },
      },
      VH02G: {
        type: DataTypes.STRING(1),
        allowNull: true,
        get: function () {
          return voterHistoryGetter(this.getDataValue(`VH02G`))
        },
      },
      VH02P: {
        type: DataTypes.STRING(1),
        allowNull: true,
        get: function () {
          return voterHistoryGetter(this.getDataValue(`VH02P`))
        },
      },
      SocialConservativeFlag: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        get: function () {
          if (this.getDataValue(`SocialConservativeFlag`) == `1`) {
            return true
          } else {
            return false
          }
        },
      },
      VeteransFlag: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        get: function () {
          if (this.getDataValue(`VeteransFlag`) == `1`) {
            return true
          } else {
            return false
          }
        },
      },
      SportsmenFlag: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        get: function () {
          if (this.getDataValue(`SportsmenFlag`) == `1`) {
            return true
          } else {
            return false
          }
        },
      },
      SecondAmendmentSupporterFlag: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        get: function () {
          if (this.getDataValue(`SecondAmendmentSupporterFlag`) == `1`) {
            return true
          } else {
            return false
          }
        },
      },
      ProLifeFlag: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        get: function () {
          if (this.getDataValue(`ProLifeFlag`) == `1`) {
            return true
          } else {
            return false
          }
        },
      },
      ProChoiceFlag: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        get: function () {
          if (this.getDataValue(`ProChoiceFlag`) == `1`) {
            return true
          } else {
            return false
          }
        },
      },
      FiscalConservativeFlag: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        get: function () {
          if (this.getDataValue(`FiscalConservativeFlag`) == `1`) {
            return true
          } else {
            return false
          }
        },
      },
      StateGOPSupporterFlag: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        get: function () {
          if (this.getDataValue(`StateGOPSupporterFlag`) == `1`) {
            return true
          } else {
            return false
          }
        },
      },
      FederalGOPSupporterFlag: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        get: function () {
          if (this.getDataValue(`FederalGOPSupporterFlag`) == `1`) {
            return true
          } else {
            return false
          }
        },
      },
      StateDemocratSupporterFlag: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        get: function () {
          if (this.getDataValue(`StateDemocratSupporterFlag`) == `1`) {
            return true
          } else {
            return false
          }
        },
      },
      FederalDemocratSupporterFlag: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        get: function () {
          if (this.getDataValue(`FederalDemocratSupporterFlag`) == `1`) {
            return true
          } else {
            return false
          }
        },
      },
      LiberalIdeologyFlag: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        get: function () {
          if (this.getDataValue(`LiberalIdeologyFlag`) == `1`) {
            return true
          } else {
            return false
          }
        },
      },
      GOPPartyFlag: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        get: function () {
          if (this.getDataValue(`GOPPartyFlag`) == `1`) {
            return true
          } else {
            return false
          }
        },
      },
      DemocraticPartyFlag: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        get: function () {
          if (this.getDataValue(`DemocraticPartyFlag`) == `1`) {
            return true
          } else {
            return false
          }
        },
      },
      IndependentPartyFlag: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        get: function () {
          if (this.getDataValue(`IndependentPartyFlag`) == `1`) {
            return true
          } else {
            return false
          }
        },
      },
      FarmFlag: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        get: function () {
          if (this.getDataValue(`FarmFlag`) == `1`) {
            return true
          } else {
            return false
          }
        },
      },
      VolunteerFlag: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        get: function () {
          if (this.getDataValue(`VolunteerFlag`) == `1`) {
            return true
          } else {
            return false
          }
        },
      },
      PG29: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      PG30: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      PG31: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      PG32: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      PG33: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      PG34: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      PG35: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      PG36: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      PG37: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      PG38: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      PG39: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      RepublicanPartyScore: {
        type: DataTypes.STRING(50),
        allowNull: true,
        get: function () {
          // return round(this.getDataValue(`RepublicanPartyScore`) * 100, 2)
          return pctToText(this.getDataValue(`RepublicanPartyScore`))
        },
      },
      DemocraticPartyScore: {
        type: DataTypes.STRING(50),
        allowNull: true,
        get: function () {
          return pctToText(this.getDataValue(`DemocraticPartyScore`))
        },
      },
      RepublicanBallotScore: {
        type: DataTypes.STRING(50),
        allowNull: true,
        get: function () {
          return pctToText(this.getDataValue(`RepublicanBallotScore`))
        },
      },
      DemocraticBallotScore: {
        type: DataTypes.STRING(50),
        allowNull: true,
        get: function () {
          return pctToText(this.getDataValue(`DemocraticBallotScore`))
        },
      },
      TurnoutGeneralScore: {
        type: DataTypes.STRING(50),
        allowNull: true,
        get: function () {
          return pctToText(this.getDataValue(`TurnoutGeneralScore`))
        },
      },
      HealthcareOpenMarket: {
        type: DataTypes.STRING(50),
        allowNull: true,
        get: function () {
          return pctToText(this.getDataValue(`HealthcareOpenMarket`))
        },
      },
      HealthcareGovernmentRun: {
        type: DataTypes.STRING(50),
        allowNull: true,
        get: function () {
          return pctToText(this.getDataValue(`HealthcareGovernmentRun`))
        },
      },
      StrongImmigrationPoliciesSupport: {
        type: DataTypes.STRING(50),
        allowNull: true,
        get: function () {
          return pctToText(
            this.getDataValue(`StrongImmigrationPoliciesSupport`),
          )
        },
      },
      StrongImmigrationPoliciesOppose: {
        type: DataTypes.STRING(50),
        allowNull: true,
        get: function () {
          return pctToText(
            this.getDataValue(`StrongImmigrationPoliciesOppose`),
          )
        },
      },
      EconomyApprove: {
        type: DataTypes.STRING(50),
        allowNull: true,
        get: function () {
          return pctToText(this.getDataValue(`EconomyApprove`))
        },
      },
      EconomyDisapprove: {
        type: DataTypes.STRING(50),
        allowNull: true,
        get: function () {
          return pctToText(this.getDataValue(`EconomyDisapprove`))
        },
      },
      HouseholdIncome: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      Education: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      LastUpdate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      tableName: `dtVoterFile`,
      timestamps: false,
      freezeTableName: true,
    },
  )
  return dtVoterFile
}
