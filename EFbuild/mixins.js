var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_TEDIntro;
    (function (EFMod_TEDIntro) {
        class CONST {
        }
        CONST.TUTORCONTAINER = "STutorContainer";
        CONST.NEXTSCENE = "nextbutton";
        CONST.PREVSCENE = "prevbutton";
        CONST.NAVSCENE = "SCENE";
        CONST.NAVTUTOR = "TUTOR";
        CONST.MOUSE_MOVE = "mousemove";
        CONST.MOUSE_DOWN = "mousedown";
        CONST.MOUSE_UP = "mouseup";
        CONST.MOUSE_CLICK = "click";
        CONST.DOUBLE_CLICK = "dblclick";
        CONST.CLICK = "click";
        EFMod_TEDIntro.CONST = CONST;
    })(EFMod_TEDIntro = EFTut_Suppl.EFMod_TEDIntro || (EFTut_Suppl.EFMod_TEDIntro = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_TEDIntro;
    (function (EFMod_TEDIntro) {
        class $Common {
            $onCreateScene() { }
            $preEnterScene() { }
            $onEnterScene() { }
            $preExitScene() { }
            $onExitScene() { }
            $demoInitScene() { }
            $logScene() { }
            $rewindScene() { }
            $resolveTemplate(templID) { }
            $nodePreEnter(nodeId) { }
            $nodePreExit(nodeId) { }
            $nodeAction(actionId) { }
            $nodeConstraint(constrainId) {
                let result = false;
                return result;
            }
            $cuePoints(id) { }
            $timedEvents(id) { }
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
            $onCreateScene() {
                console.log("$Navigator created");
                this.connectNavButton(EFMod_TEDIntro.CONST.NEXTSCENE, "Snext");
                this.connectNavButton(EFMod_TEDIntro.CONST.PREVSCENE, "Sback");
                this.setNavigationTarget(EFMod_TEDIntro.CONST.NAVSCENE);
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
                    case "ENTER1":
                        this.setButtonBehavior('incrAnimation');
                        this.fComplete = false;
                        this.updateNav();
                        break;
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
                    case "a":
                        console.log("executing CuePoint 1");
                        break;
                    case "b":
                        console.log("executing CuePoint 2");
                        break;
                    case "z":
                        console.log("executing CuePoint 3");
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
            constructor() {
                this.$var1 = "valname2";
            }
            $onCreateScene() {
                this.STeacher.poseTeacher("pose1");
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
                    case "ENTER1":
                        this.setButtonBehavior('incrAnimation');
                        this.fComplete = false;
                        this.updateNav();
                        break;
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
                                console.log(`Start Cue: ${trackID}`);
                                this.STextBox1.setContentByIndex(1);
                                break;
                            case "$end":
                                console.log("executing CuePoint END");
                                break;
                        }
                        break;
                    case "track2":
                        switch (cueID) {
                            case "$start":
                                console.log(`Start Cue: ${trackID}`);
                                this.STextBox1.setContentByIndex(2);
                                this.STeacher.poseTeacher("pose2");
                                break;
                            case "$end":
                                console.log("executing CuePoint END");
                                break;
                        }
                        break;
                    case "track3":
                        switch (cueID) {
                            case "$start":
                                console.log(`Start Cue: ${trackID}`);
                                this.STextBox1.setContentByIndex(3);
                                this.STeacher.poseTeacher("pose3");
                                break;
                            case "$end":
                                console.log("executing CuePoint END");
                                break;
                        }
                        break;
                    case "track4":
                        switch (cueID) {
                            case "$start":
                                console.log(`Start Cue: ${trackID}`);
                                this.STextBox1.setContentByIndex(4);
                                break;
                            case "$end":
                                console.log("executing CuePoint END");
                                break;
                        }
                        break;
                    case "track5":
                        switch (cueID) {
                            case "$start":
                                console.log(`Start Cue: ${trackID}`);
                                this.STeacher.poseTeacher("pose2");
                                break;
                            case "$end":
                                console.log("executing CuePoint END");
                                break;
                        }
                        break;
                    case "track6":
                        switch (cueID) {
                            case "$start":
                                console.log(`Start Cue: ${trackID}`);
                                this.STextBox1.setContentByIndex(5);
                                break;
                            case "$end":
                                console.log("executing CuePoint END");
                                break;
                        }
                        break;
                    case "track7":
                        switch (cueID) {
                            case "$start":
                                console.log(`Start Cue: ${trackID}`);
                                this.STextBox1.showSpan("s2");
                                this.STeacher.poseTeacher("pose1");
                                break;
                            case "$end":
                                console.log("executing CuePoint END");
                                break;
                        }
                        break;
                    case "track8":
                        switch (cueID) {
                            case "$start":
                                console.log(`Start Cue: ${trackID}`);
                                this.STextBox1.setContentByIndex(6);
                                break;
                            case "$end":
                                console.log("executing CuePoint END");
                                break;
                        }
                        break;
                    case "track9":
                        switch (cueID) {
                            case "$start":
                                console.log(`Start Cue: ${trackID}`);
                                this.STeacher.poseTeacher("pose3");
                                break;
                            case "$end":
                                console.log("executing CuePoint END");
                                break;
                        }
                        break;
                    case "track10":
                        switch (cueID) {
                            case "$start":
                                console.log(`Start Cue: ${trackID}`);
                                this.STeacher.poseTeacher("pose1");
                                break;
                            case "$end":
                                console.log("executing CuePoint END");
                                break;
                        }
                        break;
                    case "track11":
                        switch (cueID) {
                            case "$start":
                                console.log(`Start Cue: ${trackID}`);
                                this.STextBox1.setContentByIndex(7);
                                break;
                            case "$end":
                                console.log("executing CuePoint END");
                                break;
                        }
                        break;
                    case "track12":
                        switch (cueID) {
                            case "$start":
                                console.log(`Start Cue: ${trackID}`);
                                this.STextBox1.setContentByIndex(8);
                                this.STeacher.poseTeacher("pose2");
                                break;
                            case "$end":
                                console.log("executing CuePoint END");
                                break;
                        }
                        break;
                    case "track13":
                        switch (cueID) {
                            case "$start":
                                console.log(`Start Cue: ${trackID}`);
                                this.STextBox1.setContentByIndex(9);
                                break;
                            case "$end":
                                console.log("executing CuePoint END");
                                break;
                        }
                        break;
                }
            }
            $timedEvents(id) {
            }
        }
        EFMod_TEDIntro.SScene1 = SScene1;
    })(EFMod_TEDIntro = EFTut_Suppl.EFMod_TEDIntro || (EFTut_Suppl.EFMod_TEDIntro = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
//# sourceMappingURL=mixins.js.map