export interface IKanapHeader {
    setPage: (page: string) => void,
    page: string;
    switchScript: Function,
    isScriptActive: boolean
};

export interface IKanapSwitchScript {
    switchScript: Function,
    isScriptActive: boolean
};

export interface IKanapHome {
    setProductId: (productId: string) => void,
    setPage: (page: string) => void,
    page: string,
    isScriptActive: boolean
};

export interface IKanapProduct {
    productId: string
};