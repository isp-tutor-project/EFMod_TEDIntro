

namespace EFTut_Suppl.EFMod_TEDIntro {

    export class SScene1 {

        // This is a special signature to avoid the typescript error "because <type> has no index signature."
        // on syntax like => this[<element name>]
        // 
        [key: string]: any;

        
        //***********************************************
        // Tutor graph methods
        //
        
        public $onCreateScene() { 
            this.STeacher.poseTeacher("pose1");
        }

        public $onEnterScene() {
        }
        
        public $preEnterScene() {
        }

        public $preExitScene() {
        }

        public $demoInitScene() {
        }

        public $logScene() {
        }

        public $rewindScene() {
        }

        public $resolveTemplate(templID:string) { 
        
            return this["$"+templID];
        }


        //***********************************************
        // Scene graph methods
        //
        public $nodePreEnter(nodeId:string) {            
        }

        public $nodePreExit(nodeId:string) {
        }

        public $nodeAction(actionId:string) : void {
            
            switch(actionId) {
            }
        }
        
        public $nodeConstraint(constrainId:string) : boolean {

            let result:boolean = false;

            return result;
        }

        // Track methods.
        // 
        public $cuePoints(trackID:string, cueID:string) {

            switch(trackID) {

                case "track1":
                    switch(cueID) {
                        
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
                    switch(cueID) {
                        
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
                    switch(cueID) {
                        
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
                    switch(cueID) {
                        
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
                    switch(cueID) {
                        
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
                    switch(cueID) {
                        
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
                    switch(cueID) {
                        
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
                    switch(cueID) {
                        
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
                    switch(cueID) {
                        
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
                    switch(cueID) {
                        
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
                    switch(cueID) {
                        
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
                    switch(cueID) {
                        
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
                    switch(cueID) {
                        
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

        public $timedEvents(id:string) {
        }
    }
}