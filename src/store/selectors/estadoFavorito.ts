import { RootReducer } from '..'
import { Produto } from '../../App'

export const selectProdutoEstaNosFavoritos =
  (produto: Produto) => (state: RootReducer) =>
    state.favoritos.favoritos.some((p) => p.id === produto.id)
