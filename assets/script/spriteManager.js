// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

var Item = cc.Class({
    name: 'Item',
    properties: {
        spritePrefab:{
            default: null,
            type: cc.Prefab
        },
        vector:cc.v2(0, 0),
    }
});

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },

        items:{
            default:[],
            type:[Item]
        },
        frogPrefab:{
            default:null,
            type:cc.Prefab
        },
        opossumPrefab:{
            default:null,
            type:cc.Prefab
        }




    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        for (var i = 0; i < this.items.length; ++i) {
            var item = cc.instantiate(this.items[i].spritePrefab);
            this.node.addChild(item);
            item.setPosition(this.items[i].vector);
        }
    },

    // update (dt) {},
});
