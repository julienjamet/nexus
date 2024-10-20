export interface IKanapHeader {
    setPage: (page: string) => void,
    switchScript: Function,
    isScriptActive: boolean
};

export interface IKanapSwitchScript {
    switchScript: Function,
    isScriptActive: boolean
};