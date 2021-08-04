/* eslint-disable camelcase */
/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  const wpaiNationalFlagsSummary = sequelize.define(
    `wpaiNationalFlagsSummary`,
    {
      state: {
        type: DataTypes.STRING(2),
        allowNull: true,
      },
      Total: {
        type: DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true,
      },
      CountyFIPS: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      PrecinctNumber: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      RegistrationAddressZip5: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      CongressionalDistrict: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      SenateDistrict: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      LegislativeDistrict: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      onlineact: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      offlineact: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      CordCutter: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      TrumpApprove: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      TrumpTaxApproval: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      CongressTaxApproval: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      GenericBallot_R: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      GenericBallot_Swing: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      GenericBallot_D: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Sports_Radio: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Conservative_Radio: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Christian_Radio: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Country_Radio: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Media_Cable_Viewer: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Media_Satellite_Viewer: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Media_Delayed_Viewer: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Media_StreamingVideo_Viewer: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Media_PremiumVideo_Viewer: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Media_StreamingMusic_Listener: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Priv_Pol_RaceResent_High: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Priv_Pol_RaceResent_Mid: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Priv_Pol_RaceResent_Low: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Priv_Pol_McConnellFav: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Priv_Pol_McConnellUnfav: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Priv_Pol_RyanFav: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Priv_Pol_RyanUnfav: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Typ_AmericaFirst: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Typ_CompCons: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Typ_CultureWar: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Typ_DisenchantEstab: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Typ_EstabTrumper: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Typ_EvangActivist: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Typ_FreeMarketCons: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Typ_ModGlobalist: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Typ_RedTeamChristian: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Pol_Know_Engaged: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Pol_Know_Aware: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Pol_Know_Ignorant: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Pol_Tribe_Trump: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Pol_Tribe_Ideo: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Pol_Endorse_Cons: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Pol_Endorse_Estab: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Pol_Trump_Fav: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Pol_Trump_Unfav: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Pol_Cruz_Fav: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Pol_Cruz_Unfav: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Pol_Paul_Fav: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Pol_Paul_Unfav: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Pol_NRA_VeryFav: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Pol_NRA_NotVeryFav: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Pol_Relig_High: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Pol_Relig_Mid: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Pol_Relig_Low: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Pol_Pop_Populist: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Pol_Pop_Unmotivated: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_Climate_Reg: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_Climate_NonReg: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_Climate_Skeptic: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_CorpWelfare_IDX_FreeMarket: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_CorpWelfare_IDX_Crony: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_ExIm_Support: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_ExIm_Oppose: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_AgSubs_Support: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_AgSubs_Oppose: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_GreenSubs_Support: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_GreenSubs_Oppose: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_ManufactureSubs_Support: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_ManufactureSubs_Oppose: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_OilSubs_Support: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_OilSubs_Oppose: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_DebtCeil_Clean: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_DebtCeil_Conditions: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_DebtCeil_NoIncr: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_Shutdown_Shut: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_Shutdown_Open: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_Guns_IDX_Defender: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_Guns_IDX_Grabber: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_Hcare_OCareSympathizer: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_Hcare_MedicaidProtect: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_Hcare_InsuranceMandate: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_Imm_IDX_Hawk: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_Imm_IDX_Amnesty: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_Imm_DACASupport: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_Imm_DACAOppose: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_Imm_WallSupport: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_Imm_WallOppose: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_Imm_DeportSupport: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_Imm_DeportOppose: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_Infra_BuildRoads: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_Infra_NoRoads: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_Infra_GasTaxHike: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_Infra_GasTaxFight: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_Abort_NoExceptions: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_Abort_Exceptions: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_Abort_ProChoice: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_Pot_Legal: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_Pot_Medical: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_Pot_Illegal: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_Marriage_Trad: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_Marriage_Gay: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_NatSec_Isolation: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_NatSec_Doves: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_NatSec_BigStick: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_NatSec_Warriors: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_Islama_Phobic: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_Islama_Tolerant: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_Privacy_Snowden: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_Privacy_1984: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_Regs_Deregulate: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_Regs_RegSympathy: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_SchoolChoice_Support: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_SchoolChoice_Oppose: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_Spend_DeficitHawk: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_Spend_DefenseSpend: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_Spend_EntitlementSpend: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_Tax_IDX_Cutters: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_Tax_IDX_HikeSympathizers: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_TermLimits_HighPriority: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_TermLimits_LowPriority: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_Trade_FreeTrade: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_Trade_Protectionist: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_HistoryDefenders: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iss_HistoryDeniers: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      reformers: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      priority: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      pro_Sentencing: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      pro_Reentry: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      CleoGenelecOld: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      CleoPrimaryOld: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      AbortAngryWomensHealth: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      AbortAngryKillingBabiesBig: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      AbortAngryKillingBabiesCons: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      AngryAtRacistImm: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      AngryImmConsCalledRacist: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      ChristianityUnderAttackAngry: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      ChristianityUnderAttackAttackers: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      AngryAboutEverydaySexism: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      EmbarrassedByPartyOften: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      RacismWhitesFaceMore: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      RacismMinoritiesFaceMore: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      DisengagedR: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      GOPDownshifters: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      DemDownshifters: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      PersuasionTargets: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      SwingWomen: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      AAGrowth: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      HispGrowth: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      MillennialPersuasion: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      GOPGOTV: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Establishment_Moderate: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Evangelical_Activist: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Evangelical_Traditionalist: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Libertarian_Leaner: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Old_Guard_Conservative: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Protect_Second_Amendment: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Stop_Executive_Amnesty: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Stop_Refugee_Resettlement: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Tea_Party_Conservative: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      v1_Likely_Supporters: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      v1_Turnout_Targets: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      WomenBetter_Agree_partisan: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      WomenBetter_Agree: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      cleogenmatch: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      CleoGen: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      CleoPrimScores: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      CleoGenelecPre: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      CleoPrimary: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      CleoGenelec: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      ProLife: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      updatedAt: `Last_Modfd_Dtm`,
      createdAt: `Crtd_Dtm`,
      freezeTableName: true,
      tableName: `wpaiNationalFlagsSummary`,
      timestamps: false,
    },
  )
  return wpaiNationalFlagsSummary
}
