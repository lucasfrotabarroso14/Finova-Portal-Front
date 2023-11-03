export interface Portfolio {
    user_id: number;
    quantidade: number;
    data_aquisicao: string;
    custo_unitario: number;
    symbol: string;
    custo_total: number;
  }
  
  export interface DefaultResponse {
    status: boolean;
    result ?: Portfolio[]
}