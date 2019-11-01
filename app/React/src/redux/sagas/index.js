import { all } from 'redux-saga/effects'
import postIndexSagas from './posts/index'

export default function* rootSagas() {
  yield all([
      ...postIndexSagas,
  ])
}
