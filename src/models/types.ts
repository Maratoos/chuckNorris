export interface IJoke {
    id: string,
    value: string,
    created_at: string,
    url: string
}

export interface IState {
    jokes: IJoke[]
    isLoading: boolean,
    error: string
}

export interface IResponse {
    total: number,
    result: IJoke[]
}
