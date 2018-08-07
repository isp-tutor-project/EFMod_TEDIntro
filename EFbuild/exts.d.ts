/// <reference path="../../dist/TutorEngineOne.d.ts" />
declare module "thermite/TTeacher" {
    import { TObject } from "thermite/TObject";
    export class TTeacher extends TObject {
        protected STeacherHead: TObject;
        protected STeacher1: TObject;
        protected STeacher2: TObject;
        protected STeacher3: TObject;
        constructor();
        TTeacherInitialize(): void;
        initialize(): void;
        private init3;
        Destructor(): void;
        poseTeacher(newPose: string, type?: string, dur?: number): void;
        private swapPose;
        private effectFinished;
        captureLogState(obj?: any): Object;
        captureXMLState(): any;
        restoreXMLState(stateVal: any): void;
        compareXMLState(stateVal: any): boolean;
        deSerializeObj(objData: any): void;
    }
}
