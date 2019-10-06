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
        metaLayer: {
            default: null,
            type: cc.TiledLayer
        }
    },

    onEnable: function () {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = true;
    },

    onDisable: function () {
        cc.director.getCollisionManager().enabled = false;
        cc.director.getCollisionManager().enabledDebugDraw = false;
    },

    // LIFE-CYCLE CALLBACKS:
    start () {
        let metaLayer = this.metaLayer;
        let size = this.metaLayer.getLayerSize();
        for (let i = 0; i < size.width; i++) {
            for (let j = 0; j < size.height; j++) {
                let n = metaLayer.getTileGIDAt(i, j);
                console.log(n);
                if (n != 0) {
                    console.log(i, j);
                    let x = i * 16 + 8;
                    let y = 240 - (j * 16 + 8);
                    // 加碰撞盒子
                    let p = this.metaLayer.node.parent.addComponent(cc.BoxCollider);
                    p.offset.set(cc.v2(x, y));
                    p.size.width = 16;
                    p.size.height = 16;
                    console.log(p);
                }
            }
        }
    }


});
