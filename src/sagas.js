import { all, call, takeLatest, put } from "redux-saga/effects";

import axios from "axios";
import SC2SDK from "./utils/sc2sdk";
function* fetchSC2UserData({ access_token }) {
  //  TODO: Data caching
  try {
    const response = yield call(
      axios.post,
      "https://steemconnect.com/api/me",
      {},
      {
        headers: {
          Authorization: access_token
        }
      }
    );

    yield put({
      type: "SAVE_SC2_USER_DATA",
      data: response.data
    });
  } catch (e) {
    console.log(e);
  }
}

function* watchFetchSC2UserData() {
  yield takeLatest("FETCH_SC2_USER_DATA", fetchSC2UserData);
}

export default function* rootSaga() {
  yield all([watchFetchSC2UserData()]);
}
