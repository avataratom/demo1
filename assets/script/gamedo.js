// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        backgroundPrefab: {
            default:null,
            type: cc.Prefab
        },
        actor: {
            default: null,
            type: cc.Node
        },
        camera: {
            default: null,
            type: cc.Node
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        //this.backgroundPool = [];
        this.block=0;
    },

    start() {
        // spawn star
        //this.spawnNewStar();
    },

    update(dt) {
        if(this.actor.x>192){
            var w_pos = this.actor.convertToWorldSpaceAR(cc.v2(0, 0));
            var c_pos = this.camera.parent.convertToNodeSpaceAR(w_pos);
            this.camera.x=c_pos.x;

        }
        if(this.actor.x>this.block*384){
            this.block++;
            var newBackground  = null;
            newBackground = cc.instantiate(this.backgroundPrefab);
            this.node.addChild(newBackground);
            newBackground.setPosition(cc.v2(192+this.block*384,120));
        }


    },


});
