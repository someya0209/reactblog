import { all } from 'redux-saga/effects'
import postIndexSagas from './posts/index'
import postAddSagas from './posts/add'

export default function* rootSagas() {
  yield all([
      ...postIndexSagas,
      ...postAddSagas,
  ])
}
