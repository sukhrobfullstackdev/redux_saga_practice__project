import {takeEvery, put, call, fork, all,spawn} from 'redux-saga/effects';
import {GET_POPULAR_NEWS, GET_LATEST_NEWS, SET_LATEST_NEWS_ERROR, SET_POPULAR_NEWS_ERROR} from '../constants';
import {setLatestNews, setPopularNews} from '../actions/actionCreator';
import {getLatestNews, getPopularNews} from '../../api/index';

export function* handleLatestNews() {
    try {
        console.log("handleLatestNews");
        const {hits} = yield call(getLatestNews);
        yield put(setLatestNews(hits));
    } catch {
        yield put({type: SET_LATEST_NEWS_ERROR, payload: 'Error fetching latest news'});
    }
}

export function* handlePopularNews() {
    try {
        console.log("handlePopularNews");
        const {hits} = yield call(getPopularNews);
        // call - call(getPopularNews, ['something']) qilib massiv berolmaymiz , agar massiv berish kerak bolsaa apply ni ishlatamiz!
        yield put(setPopularNews(hits));
    } catch {
        yield put({type: SET_POPULAR_NEWS_ERROR, payload: 'Error fetching popular news'});
    }
}

export function* watchLatestSaga() {
    console.log("watchLatestSaga");
    yield takeEvery(GET_LATEST_NEWS, handleLatestNews);
}

export function* watchPopularSaga() {
    // trottle - bu qayta qayta bosganda qayta qayta zapros jonatmasdan bitta birinchi zaprosni oladi, va javobni olib kelib beradi
    // retry - bu zapros hatto bersa qayta yana zapros berib urinib ko'radi!
    console.log("watchPopularSaga");
    yield takeEvery(GET_POPULAR_NEWS, handlePopularNews);
}

export default function* rootSaga() {
    const sagas = [watchLatestSaga, watchPopularSaga];
    yield all(sagas.map(saga =>
        spawn(function* () {
            while (true) {
                try {
                    yield call(saga);
                    break;
                } catch (e) {
                    console.log(e);
                }
            }
        }))
    );
}

