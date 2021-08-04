/* eslint-disable camelcase */
/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  const wpaiNationalFlags = sequelize.define(
    `wpaiNationalFlags`,
    {
      rnc_regid: {
        type: DataTypes.STRING(40),
        allowNull: false,
        primaryKey: true,
      },
      RegistrationAddressZip5: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      CountyFIPS: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      VF_CountyName: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      PrecinctNumber: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      PrecinctName: {
        type: DataTypes.STRING(60),
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
      DMA: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },

      ActiveVoter: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Turnout: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      state: {
        type: DataTypes.STRING(2),
        allowNull: true,
      },
      Population_Density_IBE_Model_PersonicxPopulationDensity_2: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      rural: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      suburban: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      urban: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      voterstatus: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      rnccalcparty: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      onlineact: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      offlineact: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      CordCutter: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      TrumpApprove: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      TrumpTaxApproval: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      CongressTaxApproval: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      GenericBallot_R: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      GenericBallot_Swing: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      GenericBallot_D: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Sports_Radio: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Conservative_Radio: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Christian_Radio: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Country_Radio: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Media_Cable_Viewer: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Media_Satellite_Viewer: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Media_Delayed_Viewer: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Media_StreamingVideo_Viewer: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Media_PremiumVideo_Viewer: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Media_StreamingMusic_Listener: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Priv_Pol_RaceResent_High: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Priv_Pol_RaceResent_Mid: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Priv_Pol_RaceResent_Low: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Priv_Pol_McConnellFav: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Priv_Pol_McConnellUnfav: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Priv_Pol_RyanFav: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Priv_Pol_RyanUnfav: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Typ_AmericaFirst: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Typ_CompCons: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Typ_CultureWar: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Typ_DisenchantEstab: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Typ_EstabTrumper: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Typ_EvangActivist: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Typ_FreeMarketCons: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Typ_ModGlobalist: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Typ_RedTeamChristian: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Typ_Rollup_Conservative: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Typ_Rollup_Swing_Christian: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Typ_Rollup_Moderate: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Pol_Know_Engaged: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Pol_Know_Aware: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Pol_Know_Ignorant: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Pol_Tribe_Trump: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Pol_Tribe_Ideo: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Pol_Endorse_Cons: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Pol_Endorse_Estab: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Pol_Trump_Fav: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Pol_Trump_Unfav: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Pol_Cruz_Fav: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Pol_Cruz_Unfav: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Pol_Paul_Fav: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Pol_Paul_Unfav: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Pol_NRA_VeryFav: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Pol_NRA_NotVeryFav: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Pol_Relig_High: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Pol_Relig_Mid: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Pol_Relig_Low: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Pol_Pop_Populist: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Pol_Pop_Unmotivated: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_Climate_Reg: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_Climate_NonReg: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_Climate_Skeptic: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_CorpWelfare_IDX_FreeMarket: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_CorpWelfare_IDX_Crony: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_ExIm_Support: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_ExIm_Oppose: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_AgSubs_Support: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_AgSubs_Oppose: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_GreenSubs_Support: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_GreenSubs_Oppose: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_ManufactureSubs_Support: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_ManufactureSubs_Oppose: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_OilSubs_Support: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_OilSubs_Oppose: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_DebtCeil_Clean: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_DebtCeil_Conditions: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_DebtCeil_NoIncr: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_Shutdown_Shut: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_Shutdown_Open: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_Guns_IDX_Defender: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_Guns_IDX_Grabber: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_Hcare_OCareSympathizer: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_Hcare_MedicaidProtect: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_Hcare_InsuranceMandate: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_Imm_IDX_Hawk: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_Imm_IDX_Amnesty: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_Imm_DACASupport: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_Imm_DACAOppose: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_Imm_WallSupport: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_Imm_WallOppose: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_Imm_DeportSupport: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_Imm_DeportOppose: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_Infra_BuildRoads: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_Infra_NoRoads: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_Infra_GasTaxHike: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_Infra_GasTaxFight: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_Abort_NoExceptions: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_Abort_Exceptions: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_Abort_ProChoice: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_Pot_Legal: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_Pot_Medical: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_Pot_Illegal: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_Marriage_Trad: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_Marriage_Gay: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_NatSec_Isolation: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_NatSec_Doves: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_NatSec_BigStick: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_NatSec_Warriors: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_Islama_Phobic: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_Islama_Tolerant: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_Privacy_Snowden: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_Privacy_1984: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_Regs_Deregulate: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_Regs_RegSympathy: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_SchoolChoice_Support: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_SchoolChoice_Oppose: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_Spend_DeficitHawk: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_Spend_DefenseSpend: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_Spend_EntitlementSpend: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_Tax_IDX_Cutters: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_Tax_IDX_HikeSympathizers: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_TermLimits_HighPriority: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_TermLimits_LowPriority: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_Trade_FreeTrade: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_Trade_Protectionist: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_HistoryDefenders: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Iss_HistoryDeniers: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      reformers: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      priority: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      pro_Sentencing: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      pro_Reentry: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      CleoGenelecOld: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      CleoPrimaryOld: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      AbortAngryWomensHealth: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      AbortAngryKillingBabiesBig: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      AbortAngryKillingBabiesCons: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      AngryAtRacistImm: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      AngryImmConsCalledRacist: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      ChristianityUnderAttackAngry: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      ChristianityUnderAttackAttackers: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      AngryAboutEverydaySexism: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      EmbarrassedByPartyOften: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      RacismWhitesFaceMore: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      RacismMinoritiesFaceMore: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      DisengagedR: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      GOPDownshifters: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      DemDownshifters: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      PersuasionTargets: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      SwingWomen: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      AAGrowth: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      HispGrowth: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      MillennialPersuasion: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      GOPGOTV: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      StateVoterId: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      Establishment_Moderate: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Evangelical_Activist: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Evangelical_Traditionalist: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Libertarian_Leaner: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Old_Guard_Conservative: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Tea_Party_Conservative: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Protect_Second_Amendment: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Stop_Executive_Amnesty: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Stop_Refugee_Resettlement: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      v1_Likely_Supporters: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      v1_Turnout_Targets: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      WomenBetter_Agree_partisan: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      WomenBetter_Agree: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      cleogenmatch: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      CleoGen: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      CleoPrimScores: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      CleoGenelecPre: {
        type: DataTypes.BOOLEAN,
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
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Last_Modfd_Dtm: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      Crtd_Dtm: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.literal(`CURRENT_TIMESTAMP`),
      },
    },
    {
      updatedAt: `Last_Modfd_Dtm`,
      createdAt: `Crtd_Dtm`,
      freezeTableName: true,
      timestamps: false,
      tableName: `wpaiNationalFlags`,
    },
  )
  return wpaiNationalFlags
}
