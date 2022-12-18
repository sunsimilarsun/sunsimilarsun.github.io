// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: cyan; icon-glyph: magic;
let widget = new ListWidget()

//背景设置
//let gradient = new LinearGradient()
//gradient.colors = [new Color("#e3f2fd",1), new Color("#e3f2fd",0.8)]
//gradient.locations = [0, 1]
//widget.backgroundGradient = gradient

//let weeks = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六")
//let day = new Date().getDay()
//let date = (new Date().getMonth() + 1) + '月' + new Date().getDate() + '日·' + weeks[day]
//let text01 = widget.addText(date)
//text01.font = Font.boldSystemFont(16)
//text01.textColor = Color.black()

//widget.addSpacer(5)

let text02 = widget.addText('' + getDistanceSpecifiedTime('2021/12/25') + '')
text02.font = Font.boldSystemFont(51)
text02.textColor = new Color('#DC143C')
text02.centerAlignText();

widget.addSpacer(5)

let text03 = widget.addText('距考试')
text03.font = Font.lightSystemFont(14)
text03.textColor = new Color('#999999')
text03.centerAlignText();

//widget.addSpacer(5)

Script.setWidget(widget)
Script.complete()


function getDistanceSpecifiedTime(dateTime) {
    // 指定日期和时间
    var EndTime = new Date(dateTime);
    // 当前系统时间
    var NowTime = new Date();
    var t = EndTime.getTime() - NowTime.getTime();
    var d = Math.floor(t / 1000 / 60 / 60 / 24);
    var h = Math.floor(t / 1000 / 60 / 60 % 24);
    var m = Math.floor(t / 1000 / 60 % 60);
    var s = Math.floor(t / 1000 % 60);
    return d;
}