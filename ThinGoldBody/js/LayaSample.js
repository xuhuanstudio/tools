// 程序入口
var GameMain = (function () {
    function GameMain() {
        Laya.init(751, 1280);
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
        // Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL
        Laya.stage.bgColor = "#e2dfdf";
        Laya.loader.load("res/atlas/comp.atlas", Laya.Handler.create(this, this.onLoadUI));
    }
    GameMain.prototype.onLoadUI = function () {
        this.mainUI = new ui.mainViewUI();
        Laya.stage.addChild(this.mainUI);
        this.mainImg = new Laya.Sprite();
        this.mainImg.y = 350;
        Laya.stage.addChild(this.mainImg);
        this.mainUI.yesBtn.on(Laya.Event.CLICK, this, this.onLoadFont);
    };
    GameMain.prototype.onLoadFont = function () {
        if (this.mainImg.numChildren > 0) {
            this.mainImg.destroyChildren();
        }
        this.getText();
        var str = this.mainUI.inputText.text;
        for (var index = 0; index < str.length; index++) {
            var element = str[index];
            if (this.str1.indexOf(element) >= 0) {
                console.log("千字文存在 “" + element + "” 字");
                // Laya.loader.load("res/word/"+element+".png", Laya.Handler.create(this, function(){
                // }));
                var img = new Laya.Sprite();
                this.mainImg.addChild(img);
                var yy = Math.floor((index + 1) * 150 / Laya.stage.width);
                img.loadImage("res/word/" + element + ".jpg", index * 150 - yy * (Math.floor(Laya.stage.width / 150) * 150), yy * 150, 150, 150);
            }
            else {
                console.log("千字文不存在 “" + element + "” 字");
            }
        }
    };
    GameMain.prototype.getText = function () {
        this.str1 = new strText().text;
    };
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=LayaSample.js.map