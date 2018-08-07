declare namespace EFTut_Suppl.EFMOD_TEDINTRO {
    class CONST {
        static readonly TUTORCONTAINER: string;
        static readonly NEXTSCENE: string;
        static readonly PREVSCENE: string;
        static readonly NAVSCENE: string;
        static readonly NAVTUTOR: string;
        static readonly MOUSE_MOVE: string;
        static readonly MOUSE_DOWN: string;
        static readonly MOUSE_UP: string;
        static readonly MOUSE_CLICK: string;
        static readonly DOUBLE_CLICK: string;
        static readonly CLICK: string;
    }
}
declare namespace EFTut_Suppl.EFMOD_TEDINTRO {
    class $Common {
        [key: string]: any;
        $onCreateScene(): void;
        $preEnterScene(): void;
        $onEnterScene(): void;
        $preExitScene(): void;
        $onExitScene(): void;
        $demoInitScene(): void;
        $logScene(): void;
        $rewindScene(): void;
        $resolveTemplate(templID: string): void;
        $nodePreEnter(nodeId: string): void;
        $nodePreExit(nodeId: string): void;
        $nodeAction(actionId: string): void;
        $nodeConstraint(constrainId: string): boolean;
        $cuePoints(id: string): void;
        $timedEvents(id: string): void;
    }
}
declare namespace EFTut_Suppl.EFMOD_TEDINTRO {
    class Globals {
        $var1: string;
        [key: string]: any;
    }
}
declare namespace EFTut_Suppl.EFMOD_TEDINTRO {
    class SNavigator {
        [key: string]: any;
        $onCreateScene(): void;
        $onEnterScene(): void;
        $preEnterScene(): void;
        $preExitScene(): void;
        $demoInitScene(): void;
        $logScene(): void;
        $rewindScene(): void;
        $resolveTemplate(templID: string): any;
        $nodePreEnter(nodeId: string): void;
        $nodePreExit(nodeId: string): void;
        $nodeAction(actionId: string): void;
        $nodeConstraint(constrainId: string): boolean;
        $cuePoints(trackID: string, cueID: string): void;
        $timedEvents(id: string): void;
    }
}
declare namespace EFTut_Suppl.EFMOD_TEDINTRO {
    class SScene1 {
        $var1: string;
        [key: string]: any;
        $onCreateScene(): void;
        $onEnterScene(): void;
        $preEnterScene(): void;
        $preExitScene(): void;
        $demoInitScene(): void;
        $logScene(): void;
        $rewindScene(): void;
        $resolveTemplate(templID: string): any;
        $nodePreEnter(nodeId: string): void;
        $nodePreExit(nodeId: string): void;
        $nodeAction(actionId: string): void;
        $nodeConstraint(constrainId: string): boolean;
        $cuePoints(trackID: string, cueID: string): void;
        $timedEvents(id: string): void;
    }
}
