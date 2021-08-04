/* eslint-disable camelcase */
/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  const dtInfogroupVoterFile = sequelize.define(`dtInfogroupVoterFile`, {
    RNC_RegID: {
      type: DataTypes.STRING(40),
      allowNull: false,
      primaryKey: true,
    },
    HouseholdMemberNumber: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    MatchLevel: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    lemsmatchcode: {
      type: DataTypes.STRING(18),
      allowNull: true,
    },
    individualid: {
      type: DataTypes.STRING(12),
      allowNull: true,
    },
    familyid: {
      type: DataTypes.STRING(12),
      allowNull: true,
    },
    locationid: {
      type: DataTypes.STRING(12),
      allowNull: true,
    },
    firstname: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    middleinitial: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    lastname: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    lastnamesuffix: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    titlecode: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    gender: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    age: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    birthdate: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    birthdate_dd: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    housenumber: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    streetpredirectional: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    streetname: {
      type: DataTypes.STRING(28),
      allowNull: true,
    },
    streetsuffix: {
      type: DataTypes.STRING(4),
      allowNull: true,
    },
    streetpostdirectional: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    unittype: {
      type: DataTypes.STRING(4),
      allowNull: true,
    },
    unitnumber: {
      type: DataTypes.STRING(8),
      allowNull: true,
    },
    routetype: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    routenumber: {
      type: DataTypes.STRING(3),
      allowNull: true,
    },
    addresstype: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING(13),
      allowNull: true,
    },
    consumer_state: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    postalstate: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    zipcode: {
      type: DataTypes.STRING(5),
      allowNull: true,
    },
    zipfour: {
      type: DataTypes.STRING(4),
      allowNull: true,
    },
    zipfourmatchlevel: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    carrierroute: {
      type: DataTypes.STRING(4),
      allowNull: true,
    },
    deliverypoint: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    deliverypointcheckdigit: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    standardizedname: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    standardizedaddress: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    standardizedcitystzip: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    nameaddresssource: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    census_state_code_2010: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    census_county_code_2010: {
      type: DataTypes.STRING(3),
      allowNull: true,
    },
    census_tract_code_2010: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    census_block_group_code_2010: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    demographicindicator: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    uspsdeliveryservicetype: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    lengthofresidence: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    locationtype: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    occupancycount: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    deliveryunitsizeraw: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    householdarrivaldate: {
      type: DataTypes.STRING(4),
      allowNull: true,
    },
    areacode: {
      type: DataTypes.STRING(3),
      allowNull: true,
    },
    phonenumber: {
      type: DataTypes.STRING(7),
      allowNull: true,
    },
    secondaryphone: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    timezone: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_age0_3: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_age4_7: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_age8_12: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_age13_17: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_markettargetage0_5: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_markettargetage0_11: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_markettargetage0_17: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_markettargetage6_11: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_markettargetage12_17female: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_markettargetage12_17male: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_markettargetage12_17: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_markettargetage18_24female: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_markettargetage18_24male: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_markettargetage18_34female: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_markettargetage18_34male: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_markettargetage18_44female: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_markettargetage18_44male: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_markettargetage25_34female: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_markettargetage25_34male: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_markettargetage35_44female: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_markettargetage35_44male: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_markettargetage35_54female: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_markettargetage35_54male: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_markettargetage45_54female: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_markettargetage45_54male: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_markettargetage50plus: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_markettargetage55_64female: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_markettargetage55_64male: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_markettargetage65plus: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_householdsize1_2: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_householdsize3plus: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_spouseindicator_HoH: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_spouseindicator: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    refreshdate: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    IND_numberoftradelines: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_creditcard_travel_and_entertainment: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_creditcard_bank: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_creditcard_premium_bank: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_creditcard_retail: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_creditcard_oil: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_creditcard_specialy_retail: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_creditcard_upscale_retail: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_creditcard_finance: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_creditcard_holder: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_bank_card_recency_date: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    IND_politicalparty: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_maritalstatus: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_dropindicator: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_donotmailflag: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_workathomeflag: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_businessfilehitflag: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_fulfillmentflag: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_countryoforigin: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    IND_vendorethnicity: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    IND_vendorethnicgroup: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_vendorlanguage: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    IND_vendorreligion: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_vendorassimilationcode: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_householdmembercount: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_numberofadults: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_presenceofchildren: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_numberofchildren: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_childrenbygender: {
      type: DataTypes.STRING(18),
      allowNull: true,
    },
    HH_childrenbymonth: {
      type: DataTypes.STRING(18),
      allowNull: true,
    },
    HH_child1_dob: {
      type: DataTypes.STRING(8),
      allowNull: true,
    },
    HH_child1_gender: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_child2_dob: {
      type: DataTypes.STRING(8),
      allowNull: true,
    },
    HH_child2_gender: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_child3_dob: {
      type: DataTypes.STRING(8),
      allowNull: true,
    },
    HH_child3_gender: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_child4_dob: {
      type: DataTypes.STRING(8),
      allowNull: true,
    },
    HH_child4_gender: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_child5_dob: {
      type: DataTypes.STRING(8),
      allowNull: true,
    },
    HH_child5_gender: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_numberofsurnames: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_income: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_purchasingpowerincome: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_mailabilityscorebyte1: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_mailabilityscorebyte2: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_heavy_internet_user: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    HH_findincome: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    HH_sesi: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    HH_wealthfinder: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_dmhightechhousehold: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_expendableincomerank: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_hohagecode: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_agedatasource: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_phhchild: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    HH_phhw65p: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    HH_pop05: {
      type: DataTypes.STRING(8),
      allowNull: true,
    },
    HH_medag18p: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    HH_phhsz3p: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    HH_phhmarrd: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    HH_phhspchld: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    HH_phhd25km: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    HH_phhd50kp: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    HH_phhd150k: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    HH_medhhd: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    HH_ppoverty: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    HH_p2auto: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    HH_pcolgrad: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    HH_meanschlraw: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    HH_psuis: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    HH_medvalue: {
      type: DataTypes.STRING(9),
      allowNull: true,
    },
    HH_phv300kp: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    HH_phv75km: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    HH_medrentp: {
      type: DataTypes.STRING(9),
      allowNull: true,
    },
    HH_mdoicost: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    HH_pownrocc: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    HH_pprofsnl: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    HH_pwhitcol: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    HH_pbluecol: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    HH_punemply: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    HH_phhblack: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    HH_phhasian: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    HH_phhspnsh: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    HH_ownrent: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_homeownersource: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_findc: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_homeequityestimate: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_femaleoccupation: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    HH_maleoccupation: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    HH_grandparentinhouse: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_mailresponsivecurrent: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_mailresponsiveever: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_mailresponsiverecent: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_catowner: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_dogowner: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_mailorderbuyerflag: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_donorcode: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_donor_health: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_donor_political: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_donor_religious: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_donor_environmental: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_stocksorbonds: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_books_music_interest: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_car_buff: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_childrens_products_interest: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_collectibles_interest: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_computer_owner: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_electronics_interest: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_fashion_jewelry_interest: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_gardening_horticulture_interest: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_golfer: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_gourmet_food_wine_interest: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_handcrafts_sewing_interest: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_health_fitness_interest: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_high_ticket_mail_order_buyer: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_home_decorating_interest: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_home_workshop_interest: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_investments_interest: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_opportunist: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_outdoor_enthusiast: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_pet_owner: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_photography_enthusiast: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_stamps_coins_collector: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_travel_entertainment_interest: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_hunting: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_fishing: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_boatingsailing: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_foreigntravel: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_gambling: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_dietingweightloss: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_cooking: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_camping: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_diabetes: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_asthma: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_arthritisrheumatism: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_anginaheartdisease: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_emphysema: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_osteoporosis: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_highbloodpressure: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_highcholesterol: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_physicalhandicap: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_allergies: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_hearingdifficulty: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_migraines: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_alzheimers: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_bladdercontroldifficulty: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_frequentheadaches: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_magazine_subscriber: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_ppir: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_internetusage: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    HH_potentialinvestorconsumer: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    HH_subfamilyindicator: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_activeconsumer: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lor_mid: {
      type: DataTypes.STRING(7),
      allowNull: true,
    },
    HH_find_mid: {
      type: DataTypes.STRING(7),
      allowNull: true,
    },
    HH_congressionaldistrict: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    HH_msacode2000: {
      type: DataTypes.STRING(5),
      allowNull: true,
    },
    HH_micrometroindicators: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_csacode: {
      type: DataTypes.STRING(3),
      allowNull: true,
    },
    HH_effective_phone_date: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    HH_telephone_acquisition_date: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    HH_multi_source_indicator: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_general_apparel: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_apparel_accessories: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_apparel_kids: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_apparel_mens: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_apparel_mens_fashions: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_apparel_womens: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_apparel_womens_fashions: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_automotive: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_auto_racing: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_trucks: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_aviation: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_bargain_seekers: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_beauty_cosmetic: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_bible: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_birds: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_business_items: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_home_office_products: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_internet_buying: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_catalogs: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_collectibles: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_stamps_coins: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_college: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_computers: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_cooking: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_gormet: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_general_crafts: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_crocheting: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_knitting: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_needlepoint: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_quilting: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_sewing: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_culture_arts: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_current_events: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_do_it_yourselfer: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_charitable_donor: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_ego_personalized_products: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_electionics: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_horses: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_african_american_ethnic_products: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_asian_ethnic_products: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_hispanic_ethnic_products: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_children_family: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_credit_card_user: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_money_making: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_personal_finance: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_stocks_bonds: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_foreign_travel: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_gambling: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_games: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_gardening: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_gift_giver: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_general_health: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_dieting: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_fitness_exercise: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_high_ticket: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_history: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_american_history: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_hobbies: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_home_decorating: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_humor: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_inspirational: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_internet: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_internet_access: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_hightech: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_motorcycles: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_music: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_ocean: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_outdoors: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_boating_sailing: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_camping_hiking: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_fishing: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_hunting_fishing: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_hunting: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_pets: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_cats: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_dogs: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_photography: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_photo_processing: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_politically_conservative: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_liberal: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_publications: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_publish_books: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_magazine_subscriber: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_books_nonfiction: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_books_science_fiction: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_rural_farming: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_science: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_seniors: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_general_sports: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_baseball: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_basketball: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_football: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_golf: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_hockey: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_skiing: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_soccer: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_tennis: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_stationery: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_sweepstakes: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_tobacco: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_general_travel: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_travel_cruises: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_travel_rv: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_travel_us: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_movies: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_lhi_wildlife: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_general_apparel: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_apparel_mens: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_apparel_womens: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_apparel_accessories: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_apparel_mens_fashions: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_apparel_womens_fashions: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_apparel_kids: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_children_family: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_publish_books: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_publications: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_books_nonfiction: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_books_science_fiction: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_music: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_electionics: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_automotive: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_computers: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_cooking: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_gormet: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_general_crafts: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_crocheting: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_knitting: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_needlepoint: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_quilting: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_sewing: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_home_decorating: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_dieting: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_internet: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_hightech: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_internet_access: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_culture_arts: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_general_travel: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_travel_cruises: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_travel_rv: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_travel_us: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_charitable_donor: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_wildlife: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_fitness_exercise: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_general_health: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_gambling: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_golf: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_do_it_yourselfer: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_personal_finance: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_magazine_subscriber: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_gardening: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_outdoors: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_hunting_fishing: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_boating_sailing: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_camping_hiking: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_fishing: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_hunting: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_pets: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_cats: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_dogs: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_photography: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_photo_processing: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_collectibles: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_money_making: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_sweepstakes: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_african_american_ethnic_products: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_american_history: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_baseball: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_basketball: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_bible: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_birds: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_business_items: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_college: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_current_events: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_personalized_products: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_horses: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_football: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_gift_giver: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_hispanic_ethnic_products: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_hobbies: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_hockey: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_humor: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_inspirational: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_motorcycles: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_ocean: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_rural_farming: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_general_sports: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_stationery: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_movies: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_seniors: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_aviation: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_credit_card_user: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_beauty_cosmetic: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_asian_ethnic_products: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_science: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_tobacco: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_bargain_seekers: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_catalogs: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_auto_racing: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_trucks: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_home_office_products: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_politically_conservative: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_games: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_history: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_internet_buying: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_liberal: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_skiing: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_soccer: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    IND_lhi_tennis: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_csi_raw_score: {
      type: DataTypes.STRING(3),
      allowNull: true,
    },
    HH_ppi: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    HH_unmarried_partner_household: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    HH_income_public_assistance: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    HH_household_with_retirement_income: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    HH_population_density: {
      type: DataTypes.STRING(9),
      allowNull: true,
    },
    HH_high_school_graduate_only_age_25_plus: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    HH_self_employed: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    HH_seasonal_vacant_hu: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    HH_total_work_16_plus_use_public_trans: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    HH_work_private_vehicle: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    HH_emailpresenceflag: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_second_property_ind: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_second_property_total_value: {
      type: DataTypes.STRING(5),
      allowNull: true,
    },
    HH_actualhomevalue: {
      type: DataTypes.STRING(5),
      allowNull: true,
    },
    HH_tw_greenmodel: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_highvaluesecurityinvestor: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_highereducation: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_highvaluestockinvestor: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_heavyinvestmenttraders: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_physicalfitnessclubs: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_highriskinvestor: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_lowriskinvestor: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_frequentbusinesstraveler: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_frequentflyer: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_annuities: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_lifeinsurance: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_luxurycarbuyer: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_cruise: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_timeshareowner: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_impulsebuyer: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_luxuryhotel: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_pbsdonor: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_shopaholics: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_avidthemeparkvisitor: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_safetysecurityconscious: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_foreigntravelvacation: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_conservative: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_leaningconservative: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_liberal: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_leaningliberal: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_nascar: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_religiousdonor: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_heavypayperviewmovie: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_heavypayperviewsports: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_babyproduct: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_gardenmaintenance: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_opinionleader: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_heavyfamilyrestaurantvisitor: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_dogproduct: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_dietproduct: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_organicfood: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_heavyvitamin: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_heavycouponuser: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_catproducts: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_creditcardrewards: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_highendsportingequipment: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_homeimprovement: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_highendelectronicsbuyer: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_avidgamer: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_rentalcar: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_avidcellphoneuser: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_countryclubmember: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_professionaltaxpreparation: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_onsitetaxpreparationservice: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_classicalmusicconcerts: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_rockmusicconcerts: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_countrymusicconcerts: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_livetheater: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_heavybookbuyer: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_freshwaterfishing: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_saltwaterfishing: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_hunting: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_allterrainvehicle: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_powerboating: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_outdooractivities: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_adventureseekers: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_lowendsportingequipment: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_professionalbaseballsportsfans: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_professionalbasketballsportsfans: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_professionalfootballsportsfans: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_soccersportsfans: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_collegebasketballsportsfans: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_collegefootballsportsfans: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_golfsportsfans: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_tennissportsfans: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_professionalwrestlingsportsfans: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_internationallongdistance: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_heavyfrozendinner: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_cookfromscratch: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_cookforfun: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_winelover: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_online_purchase_personal_model: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_online_purchase_business_model: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_online_travel_plan_model: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_blog_writing_model: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_voice_over_internet_model: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_wifi_outside_of_home_model: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_wifi_in_home_model: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_wholesale_club_model: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_auto_club_model: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_diy_auto_maintenance_model: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_online_gaming_activity_model: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_online_investment_trading_model: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_online_bill_payment_model: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_online_tv_download_model: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_mobile_internet_access_model: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_social_media_network_model: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_specialty_organic_food_store_model: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_home_office_model: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_business_banking_model: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_moderate_economy_hotel_model: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_ereader_model: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_cell_phone_only_model: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_alternative_medicine_model: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_non_religious_donor_model: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_major_home_remodeling_model: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_avid_smart_phone_users: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_health_insurance: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_satellite_tv: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_on_line_music_download: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_adult_education: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_pilates_yoga: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_fast_food: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_hybrid_cars: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_censushomevalue: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_veteranflag: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_boat_hull_type: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_boat_length: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    HH_boat_propulsion_code: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_boxnumber: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    HH_boxtype: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_pensionflag: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_household_status_code: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_revolver_to_transactor: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    HH_hhsglhfc: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    HH_vperhh: {
      type: DataTypes.STRING(4),
      allowNull: true,
    },
    HH_wtravltm: {
      type: DataTypes.STRING(4),
      allowNull: true,
    },
    HH_whomepct: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    HH_city_std: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    HH_vendor_lat: {
      type: DataTypes.STRING(9),
      allowNull: true,
    },
    HH_vendor_long: {
      type: DataTypes.STRING(9),
      allowNull: true,
    },
    HH_vendor_mvl: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_heavy_online_buyer: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_high_end_appparel: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_heavy_catalog_buyer: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_gift_buyers: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_camping: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_sports_fanatics: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_financial_planner: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_work_health_insurance: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_comprehensive_auto_insurance: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_small_business_insurance: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_heavy_snack_eaters: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_heavy_domestic_travelers: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_new_vehicle_buyer: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_suv_buyer: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_minivan_buyer: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_auto_loan: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_education_loan: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_real_estate_investment: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_fantasy_sports: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_tw_hockey_buyer: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    HH_infopersona_cluster: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    HH_infopersona_supercluster: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
  }, {
    tableName: `dtInfogroupVoterFile`, timestamps: false, freezeTableName: true,
  })
  return dtInfogroupVoterFile
}
