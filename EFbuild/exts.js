System.register("thermite/TTeacher", ["thermite/TObject", "thermite/events/TMouseEvent", "events/CEFEvent", "util/CUtil", "util/CONST", "core/CEFTimeLine"], function (exports_1, context_1) {
    "use strict";
    var TObject_1, TMouseEvent_1, CEFEvent_1, CUtil_1, CONST_1, Event, Tween, Ease, CEFTimeLine_1, TTeacher;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (TObject_1_1) {
                TObject_1 = TObject_1_1;
            },
            function (TMouseEvent_1_1) {
                TMouseEvent_1 = TMouseEvent_1_1;
            },
            function (CEFEvent_1_1) {
                CEFEvent_1 = CEFEvent_1_1;
            },
            function (CUtil_1_1) {
                CUtil_1 = CUtil_1_1;
            },
            function (CONST_1_1) {
                CONST_1 = CONST_1_1;
            },
            function (CEFTimeLine_1_1) {
                CEFTimeLine_1 = CEFTimeLine_1_1;
            }
        ],
        execute: function () {
            Event = createjs.Event;
            Tween = createjs.Tween;
            Ease = createjs.Ease;
            TTeacher = class TTeacher extends TObject_1.TObject {
                constructor() {
                    super();
                    this.init3();
                }
                TTeacherInitialize() {
                    this.TObjectInitialize.call(this);
                    this.init3();
                }
                initialize() {
                    this.TObjectInitialize.call(this);
                    this.init3();
                }
                init3() {
                    this.traceMode = true;
                    if (this.traceMode)
                        CUtil_1.CUtil.trace("TTeacher:Constructor");
                    this.effectTimeLine = new CEFTimeLine_1.CEFTimeLine(null, null, { "useTicks": false, "loop": false, "paused": true }, this.tutorDoc);
                    this.effectTweens = new Array();
                }
                Destructor() {
                    this.removeEventListener(TMouseEvent_1.TMouseEvent.WOZCLICKED, this.doMouseClicked);
                    this.removeEventListener(TMouseEvent_1.TMouseEvent.WOZOVER, this.doMouseOver);
                    this.removeEventListener(TMouseEvent_1.TMouseEvent.WOZOUT, this.doMouseOut);
                    this.removeEventListener(TMouseEvent_1.TMouseEvent.WOZDOWN, this.doMouseDown);
                    this.removeEventListener(TMouseEvent_1.TMouseEvent.WOZUP, this.doMouseUp);
                    super.Destructor();
                }
                poseTeacher(newPose, type = CONST_1.CONST.EFFECT_FADE, dur = 500) {
                    if (this._currPose) {
                        if (this._currPose !== newPose) {
                            this.effectNewPose = newPose;
                            this.effectType = type;
                            this.effectTimeMS = dur;
                            switch (type) {
                                case CONST_1.CONST.EFFECT_FADE:
                                    this.effectAlpha = this.alpha;
                                    this.effectTweens.push(new Tween(this[this._currPose]).to({ alpha: 0 }, dur, Ease.cubicInOut));
                                    this[this.effectNewPose].visible = true;
                                    this.effectTweens.push(new Tween(this[this.effectNewPose]).to({ alpha: 1 }, dur, Ease.cubicInOut));
                                    this.effectTimeLine.addTween(...this.effectTweens);
                                    this.effectTimeLine.startTransition(this.effectFinished, this);
                                    break;
                                case CONST_1.CONST.EFFECT_SWAP:
                                    this.swapPose(this.effectNewPose);
                                    break;
                            }
                        }
                    }
                    else {
                        this.swapPose(newPose);
                    }
                }
                swapPose(newPose) {
                    this.pose1.alpha = 0;
                    this.pose2.alpha = 0;
                    this.pose3.alpha = 0;
                    this.pose1.visible = false;
                    this.pose2.visible = false;
                    this.pose3.visible = false;
                    this[newPose].alpha = 1;
                    this[newPose].visible = true;
                    this._currPose = newPose;
                }
                effectFinished() {
                    this.effectTimeLine.removeTween(...this.effectTweens);
                    this.swapPose(this.effectNewPose);
                    this.dispatchEvent(new Event(CEFEvent_1.CEFEvent.COMPLETE, false, false));
                }
                captureLogState(obj = null) {
                    obj = super.captureLogState(obj);
                    return obj;
                }
                captureXMLState() {
                    let stateVal = { controller: {} };
                    let controller = stateVal.controller;
                    return stateVal;
                }
                restoreXMLState(stateVal) {
                }
                compareXMLState(stateVal) {
                    var bTest = true;
                    return bTest;
                }
                deSerializeObj(objData) {
                    console.log("deserializing: Teacher Custom Control");
                    super.deSerializeObj(objData);
                }
            };
            exports_1("TTeacher", TTeacher);
        }
    };
});
//# sourceMappingURL=exts.js.map