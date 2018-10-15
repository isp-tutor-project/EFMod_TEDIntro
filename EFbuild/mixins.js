var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_TEDIntro;
    (function (EFMod_TEDIntro) {
        class CONST {
        }
        CONST.TUTORCONTAINER = "STutorContainer";
        CONST.NAVNONE = 0;
        CONST.NAVBACK = 1;
        CONST.NAVNEXT = 2;
        CONST.NAVBOTH = 3;
        CONST.NEXTSCENE = "nextbutton";
        CONST.PREVSCENE = "prevbutton";
        CONST.HIDE = false;
        CONST.SHOW = true;
        CONST.NAVSCENE = "SCENE";
        CONST.NAVTUTOR = "TUTOR";
        CONST.MOUSE_MOVE = "mousemove";
        CONST.MOUSE_DOWN = "mousedown";
        CONST.MOUSE_UP = "mouseup";
        CONST.MOUSE_CLICK = "click";
        CONST.DOUBLE_CLICK = "dblclick";
        CONST.ALL = null;
        CONST.CLICK = "click";
        CONST.CHANGED = "changed";
        CONST.FTRS_ALL = null;
        CONST.VAR_FTR = "varsel";
        CONST.FTR_PRE = "FTR_PRE";
        CONST.FTR_DEV = "FTR_DEV";
        CONST.YELLOW = "#FFFF5488";
        CONST.BLUE = "#B6FFFF88";
        CONST.GREEN = "#54FF0088";
        CONST.RED = "#FF005488";
        CONST.NONE = "";
        EFMod_TEDIntro.CONST = CONST;
    })(EFMod_TEDIntro = EFTut_Suppl.EFMod_TEDIntro || (EFTut_Suppl.EFMod_TEDIntro = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_TEDIntro;
    (function (EFMod_TEDIntro) {
        class $Common {
            $preCreateScene() { }
            $onCreateScene() { }
            $preEnterScene() { }
            $onEnterScene() { }
            $preExitScene() { }
            $onExitScene() { }
            $preShowScene() { }
            $preHideScene() { }
            $demoInitScene() { }
            $logScene() { }
            $rewindScene() { }
            $resolveTemplate(templID) { }
            $handleEvent() { }
            $nodePreEnter(nodeId) { }
            $nodePreExit(nodeId) { }
            $nodeAction(actionId) { }
            $nodeConstraint(constrainId) {
                let result = false;
                return result;
            }
            $cuePoints(id) { }
            $timedEvents(id) { }
            $queryFinished() {
                let stateComplete = false;
                return stateComplete;
            }
            $canGoBack() {
                let stateComplete = true;
                return stateComplete;
            }
            $updateNav() {
                if (!this.$queryFinished())
                    this.enableNext(false);
                else
                    this.enableNext(true);
                if (!this.$canGoBack())
                    this.enableBack(false);
                else
                    this.enableBack(true);
            }
        }
        EFMod_TEDIntro.$Common = $Common;
    })(EFMod_TEDIntro = EFTut_Suppl.EFMod_TEDIntro || (EFTut_Suppl.EFMod_TEDIntro = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_TEDIntro;
    (function (EFMod_TEDIntro) {
        class Globals {
            constructor() {
                this.$var1 = "valname2";
            }
        }
        EFMod_TEDIntro.Globals = Globals;
    })(EFMod_TEDIntro = EFTut_Suppl.EFMod_TEDIntro || (EFTut_Suppl.EFMod_TEDIntro = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_TEDIntro;
    (function (EFMod_TEDIntro) {
        class SNavigator {
            $preCreateScene() {
                this.setNavMode(EFMod_TEDIntro.CONST.NAVNONE, EFMod_TEDIntro.CONST.NAVSCENE);
                this.addFeature(EFMod_TEDIntro.CONST.FTR_DEV);
            }
            $onEnterScene() {
            }
            $preEnterScene() {
            }
            $preExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (cueID) {
                    case "$start":
                        console.log("executing CuePoint START");
                        break;
                    case "$end":
                        console.log("executing CuePoint END");
                        break;
                }
            }
            $timedEvents(id) {
            }
        }
        EFMod_TEDIntro.SNavigator = SNavigator;
    })(EFMod_TEDIntro = EFTut_Suppl.EFMod_TEDIntro || (EFTut_Suppl.EFMod_TEDIntro = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_TEDIntro;
    (function (EFMod_TEDIntro) {
        class SScene1 {
            $onCreateScene() {
                this.setSceneValue("complete", false);
                this.STeacher.poseTeacher("pose1");
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.setNavMode(EFMod_TEDIntro.CONST.NAVNEXT, EFMod_TEDIntro.CONST.NAVSCENE);
            }
            $preExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                this.setNavMode(EFMod_TEDIntro.CONST.NAVNEXT, EFMod_TEDIntro.CONST.NAVSCENE);
                                this.setSceneValue("complete", false);
                                this.STextBox1.setContentByIndex(1);
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                    case "track2":
                        switch (cueID) {
                            case "$start":
                                this.setNavMode(EFMod_TEDIntro.CONST.NAVBOTH, EFMod_TEDIntro.CONST.NAVSCENE);
                                this.setSceneValue("complete", false);
                                this.STextBox1.setContentByIndex(2);
                                this.STeacher.poseTeacher("pose2");
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                    case "track3":
                        switch (cueID) {
                            case "$start":
                                this.setSceneValue("complete", false);
                                this.STextBox1.setContentByIndex(3);
                                this.STeacher.poseTeacher("pose3");
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                    case "track4":
                        switch (cueID) {
                            case "$start":
                                this.setSceneValue("complete", false);
                                this.STextBox1.setContentByIndex(4);
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track5":
                        switch (cueID) {
                            case "$start":
                                this.STeacher.poseTeacher("pose2");
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                    case "track6":
                        switch (cueID) {
                            case "$start":
                                this.setSceneValue("complete", false);
                                this.STextBox1.setContentByIndex(5);
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track7":
                        switch (cueID) {
                            case "$start":
                                this.STextBox1.showSpan("s2");
                                this.STeacher.poseTeacher("pose1");
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                    case "track8":
                        switch (cueID) {
                            case "$start":
                                this.setSceneValue("complete", false);
                                this.STextBox1.setContentByIndex(6);
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track9":
                        switch (cueID) {
                            case "$start":
                                this.STeacher.poseTeacher("pose3");
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track10":
                        switch (cueID) {
                            case "$start":
                                this.STeacher.poseTeacher("pose1");
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                    case "track11":
                        switch (cueID) {
                            case "$start":
                                this.setSceneValue("complete", false);
                                this.STextBox1.setContentByIndex(7);
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track12":
                        switch (cueID) {
                            case "$start":
                                this.STextBox1.setContentByIndex(8);
                                this.STeacher.poseTeacher("pose2");
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                    case "track13":
                        switch (cueID) {
                            case "$start":
                                this.setSceneValue("complete", false);
                                this.STextBox1.setContentByIndex(9);
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                }
            }
            $queryFinished() {
                let result = this.getSceneValue("complete");
                return result;
            }
            $onAction(target) {
                switch (target) {
                }
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_TEDIntro.SScene1 = SScene1;
    })(EFMod_TEDIntro = EFTut_Suppl.EFMod_TEDIntro || (EFTut_Suppl.EFMod_TEDIntro = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_TEDIntro;
    (function (EFMod_TEDIntro) {
        class SSceneEnd {
            $preCreateScene() {
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.setNavMode(EFMod_TEDIntro.CONST.NAVNONE, EFMod_TEDIntro.CONST.NAVSCENE);
            }
            $preShowScene() {
            }
            $preHideScene() {
            }
            $onExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
            }
            $handleEvent(compID) {
                console.log(compID);
            }
            $nodePreEnter(nodeId) {
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                }
            }
            $timedEvents(id) {
            }
            $queryFinished() {
                let result = false;
                return result;
            }
            $onAction(target) {
                switch (target) {
                }
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_TEDIntro.SSceneEnd = SSceneEnd;
    })(EFMod_TEDIntro = EFTut_Suppl.EFMod_TEDIntro || (EFTut_Suppl.EFMod_TEDIntro = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_TEDIntro;
    (function (EFMod_TEDIntro) {
        class SSceneStart {
            $preCreateScene() {
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.setNavMode(EFMod_TEDIntro.CONST.NAVNONE, EFMod_TEDIntro.CONST.NAVSCENE);
            }
            $preShowScene() {
            }
            $preHideScene() {
            }
            $onExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
            }
            $handleEvent(compID) {
                console.log(compID);
            }
            $nodePreEnter(nodeId) {
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                }
            }
            $timedEvents(id) {
            }
            $queryFinished() {
                let result = false;
                return result;
            }
            $onAction(target) {
                switch (target) {
                    case "Sstart":
                        this.nextTrack("$onAction:" + this.graphState);
                        break;
                }
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_TEDIntro.SSceneStart = SSceneStart;
    })(EFMod_TEDIntro = EFTut_Suppl.EFMod_TEDIntro || (EFTut_Suppl.EFMod_TEDIntro = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
//# sourceMappingURL=mixins.js.map