/*****************************************************
 * 作者：yyh
 * 日期：13-6-29
 * 描述：
 * DataModel 用于存储游戏模型中的所有数据
 ******************************************************/

sgd.GameModel = sgd.GameModel || {};

/**
 * PlayerBasicInfo module
 * @class
 * @extends cc.Class
 */
sgd.GameModel.PlayerBasicInfo = cc.Class.extend({
    UserID: 0,
    AuthCode: null,
    Bronze: 0,
    Silver: 0,
    Treasure: 0,
    Enhance: 0,
    TotalPower: 0,
    Energy: 0,
    MaxEnergy: 0,
    LastEnergyTime: 0,
    MaxHero: 0,
    HeroLotus: 0
});

/**
 * MainCastle module
 * @class
 * @extends cc.Class
 */
sgd.GameModel.MainCastle = cc.Class.extend({
    CastleID: 0,
    Level: 0,
    HeroMaxLevel: 0,
    FactoryMaxLevel: 0,
    CastleMaxNo: 0,
    ShapeMaxNo: 0,
    HeroLotusCount: 0,
    HeroCount: 0
});

/**
 * FactoryCastle module
 * @class
 * @extends cc.Class
 */
sgd.GameModel.FactoryCastle = cc.Class.extend({
    CastleID: 0,
    CastleTypeID: 0,
    Level: 0,
    Output: 0,
    Time: 0,
    OutputTime: 0,
    CastleNo: 0,
    IsActive: 0
});

/**
 * FactoryCastleList module
 * @class
 * @extends cc.Class
 */
sgd.GameModel.FactoryCastleList = cc.Class.extend({
    _factories: [],

    count: function (){
        return this._factories.length;
    },

    add: function (factory){
        this._factories.push(factory);
    },

    getAt: function (index) {
        if (0 <= index && index < this._factories.length){
            return this._factories[index];
        }
        return null;
    },

    getByID: function (castleID) {
        for (var i = 0; i < this._factories.length; i++){
            if (this._factories[i].CastleID === castleID){
                return this._factories[i];
            }
        }
        return null;
    }
});

/**
 * CharacterSkill module
 * @class
 * @extends cc.Class
 */
sgd.GameModel.CharacterSkill = cc.Class.extend({
    SkillID: 0,
    CharacterID: 0,
    SkillType: 0,
    Name: null,
    Order: 0,
    Target: 0,
    Affect1: 0,
    Affect2: 0,
    Affect3: 0,
    AttackRandTwo: 0,
    AttackAll: 0,
    AttackFront: 0,
    AttackBack: 0
});

/**
 * CharacterSkillList module
 * @class
 * @extends cc.Class
 */
sgd.GameModel.CharacterSkillList = cc.Class.extend({
    _skills: [],

    count: function (){
        return this._skills.length;
    },

    add: function (skill){
        this._skills.push(skill);
    },

    getAt: function (index) {
        if (0 <= index && index < this._skills.length){
            return this._skills[index];
        }
        return null;
    },

    getByID: function (skillID) {
        for (var i = 0; i < this._skills.length; i++){
            if (this._skills[i].SkillID === skillID){
                return this._skills[i];
            }
        }
        return null;
    },

    getSkills: function (characterID) {
        var skills = [];
        for (var i = 0; i < this._skills.length; i++){
            if (this._skills[i].CharacterID === characterID){
                skills.push(this._skills[i]);
            }
        }
        return skills;
    }
});

/**
 * UserHero module
 * @class
 * @extends cc.Class
 */
sgd.GameModel.UserHeroSkill = cc.Class.extend({
    SkillID: 0,
    Level: 0,
    Order: 0,
    Attacked: 0
});

/**
 * UserHeroSkillList module
 * @class
 * @extends cc.Class
 */
sgd.GameModel.UserHeroSkillList = cc.Class.extend({
    _upgradeList: [], // 按出招顺序排列

    count: function (){
        return this._upgradeList.length;
    },

    add: function (skill){
        this._upgradeList.push(skill);
    },

    getAt: function (index) {
        if (0 <= index && index < this._upgradeList.length){
            return this._upgradeList[index];
        }
        return null;
    },

    getByID: function (skillID) {
        for (var i = 0; i < this._upgradeList.length; i++){
            if (this._upgradeList[i].SkillID === skillID){
                return this._upgradeList[i];
            }
        }
        return null;
    },

    getNextAttackSkill: function () {
        for (var i = 0; i < this._upgradeList.length; i++){
            if (this._upgradeList[i].Attacked === 0){
                return this._upgradeList[i];
            }
        }
        return null;
    },

    resetAttack: function () {
        for (var i = 0; i < this._upgradeList.length; i++) {
            this._upgradeList[0].Attacked = 0;
        }
    }
});

/**
 * UserHero module
 * @class
 * @extends cc.Class
 */
sgd.GameModel.UserHero = cc.Class.extend({
    HeroID: 0,
    Star: 0,
    Level: 0,
    Status: 0,
    TeamBuf: 0,
    ShapeBuf: 0,
    PositionBuf: 0,
    Position: 0,
    CharacterID: 0,
    Nation: 0,
    Type: 0,
    Physique: 0,
    PhysicalPower: 0,
    Willpower: 0,
    Defense: 0,
    Reaction: 0,
    Aggressive: 0,
    Quality: 0,
    Skills:null
});

/**
 * UserHeroList module
 * @class
 * @extends cc.Class
 */
sgd.GameModel.UserHeroList = cc.Class.extend({
    _userHeroes: [],

    count: function (){
        return this._userHeroes.length;
    },

    add: function (userHero){
        this._userHeroes.push(userHero);
    },

    getAt: function (index) {
        if (0 <= index && index < this._userHeroes.length){
            return this._userHeroes[index];
        }
        return null;
    },

    getByID: function (heroID) {
        for (var i = 0; i < this._userHeroes.length; i++){
            if (this._userHeroes[i].HeroID === heroID){
                return this._userHeroes[i];
            }
        }
        return null;
    },

    delAt: function (index) {
        if (0 <= index && index < this._userHeroes.length){
            this._userHeroes.splice(index, 1);
        }
    },

    delByID: function (heroID) {
        for (var i = 0; i < this._userHeroes.length; i++) {
            if (this._userHeroes[i].HeroID == heroID) {
                this._userHeroes.splice(i, 1);
                break;
            }
        }
    }
});

/**
 * AttackShape module
 * @class
 * @extends cc.Class
 */
sgd.GameModel.AttackShape = cc.Class.extend({
    ShapeID: 0,
    ShapeType: 0,
    Name: null,
    ShapeBuff: 1,
    ShapeNo: 0,
    Comment: null
});

/**
 * AttackShapeList module
 * @class
 * @extends cc.Class
 */
sgd.GameModel.AttackShapeList = cc.Class.extend({
    _upgradeList: [],

    count: function (){
        return this._upgradeList.length;
    },

    add: function (shape){
        this._upgradeList.push(shape);
    },

    getAt: function (index) {
        if (0 <= index && index < this._upgradeList.length){
            return this._upgradeList[index];
        }
        return null;
    },

    getByID: function (shapeID) {
        for (var i = 0; i < this._upgradeList.length; i++){
            if (this._upgradeList[i].ShapeID === shapeID){
                return this._upgradeList[i];
            }
        }
        return null;
    },

    resetAttack: function () {
        for (var i = 0; i < this._upgradeList.length; i++) {
            this._upgradeList[0].Attacked = 0;
        }
    }
});

/**
 * PositionBuff module
 * @class
 * @extends cc.Class
 */
sgd.GameModel.PositionBuff = cc.Class.extend({
    ShapeID: 0,
    PositionNo: 0,
    PlusPP: 1,
    PlusWP: 1
});

/**
 * PositionBuffList module
 * @class
 * @extends cc.Class
 */
sgd.GameModel.PositionBuffList = cc.Class.extend({
    _upgradeList: [],

    count: function (){
        return this._upgradeList.length;
    },

    add: function (shape){
        this._upgradeList.push(shape);
    },

    getByID: function (shapeID, pos) {
        for (var i = 0; i < this._upgradeList.length; i++){
            if (this._upgradeList[i].ShapeID === shapeID && this._upgradeList[i].PositionNo === pos){
                return this._upgradeList[i];
            }
        }
        return null;
    }
});

/**
 * UserShape module
 * @class
 * @extends cc.Class
 */
sgd.GameModel.UserShape = cc.Class.extend({
    ShapeID: 0,
    PosA: -1,
    PosB: -1,
    PosC: -1,
    PosD: -1,
    PosE: -1,
    PosF: -1,
    PosG: -1
});

/**
 * UpgradeLimited module
 * @class
 * @extends cc.Class
 */
sgd.GameModel.UpgradeLimited = cc.Class.extend({
    Level: 0,
    Bronze: 0,
    Silver: 0,
    Treasure: 0,
    Energy: 0,
    MainCastleLevel: 0
});

/**
 * UpgradeLimitedList module
 * @class
 * @extends cc.Class
 */
sgd.GameModel.UpgradeLimitedList = cc.Class.extend({
    _upgradeList: [],

    count: function (){
        return this._upgradeList.length;
    },

    add: function (upgrade){
        this._upgradeList.push(upgrade);
    },

    getByLevel: function (level) {
        for (var i = 0; i < this._upgradeList.length; i++){
            if (this._upgradeList[i].Level === level){
                return this._upgradeList[i];
            }
        }
        return null;
    }
});

/**
 * UpgradeUnlimited module
 * @class
 * @extends cc.Class
 */
sgd.GameModel.UpgradeUnlimited = cc.Class.extend({
    Level: 0,
    Bronze: 0,
    Silver: 0,
    Treasure: 0,
    Energy: 0
});

/**
 * UpgradeUnlimitedList module
 * @class
 * @extends cc.Class
 */
sgd.GameModel.UpgradeUnlimitedList = cc.Class.extend({
    _upgradeList: [],

    count: function (){
        return this._upgradeList.length;
    },

    add: function (upgrade){
        this._upgradeList.push(upgrade);
    },

    getByLevel: function (level) {
        for (var i = 0; i < this._upgradeList.length; i++){
            if (this._upgradeList[i].Level === level){
                return this._upgradeList[i];
            }
        }
        return null;
    }
});




/**
 * get a singleton Data Model
 * @function
 * @return {sgd.DataModel}
 */
sgd.GameModel.getInstance = function () {
    if (!this._instance) {
        this._instance = new sgd.DataModel();
    }
    return this._instance;
};

sgd.GameModel._instance = null;
