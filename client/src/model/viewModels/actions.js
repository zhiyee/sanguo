/**
 * Created with JetBrains WebStorm.
 * User: zz
 * Date: 13-11-3
 * Time: 下午10:32
 * To change this template use File | Settings | File Templates.
 */
sgd.viewModels = sgd.viewModels || {};
sgd.viewModels.actions = sgd.viewModels.actions || {};
sgd.viewModels.actions.heros = sgd.viewModels.actions.heros || {};
sgd.viewModels.actions.heros.standby = function(hero_id){
    return {
        plist:'s_action_hero_'+hero_id+'_plist',
        frames:{
            row:1,
            col_count:8
        },
        interval:1/6
    };
}
