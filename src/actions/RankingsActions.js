import _ from 'lodash';
import {
    FETCHING_RANKS,
    RANKINGS_FETCH_SUCCESS,
    FETCHING_ERROR
} from './types';

export const fetchRankings = () => {
    return (dispatch) => {
        dispatch({ type: FETCHING_RANKS });
        fetch('http://www.api.moraspirit.com/api/v1/points/2018')
            .then((response) => response.json())
            .then((responseJson) => {
                // todo: check if this needs to  be changed to responseJson[1]
                if (responseJson[0]) {
                    let orderedRankings = _.chain(responseJson[0])
                        .sortBy(function (x) { return x.rank })
                        .reverse()
                        .value();
                    bindRank(orderedRankings);
                    dispatch({ type: RANKINGS_FETCH_SUCCESS, payload: orderedRankings });
                }
            })
            .catch((error) => {
                console.log(error);
                dispatch({ type: FETCHING_ERROR });
            });
    };
};


function bindRank(data) {
    var rank = 1;
    var rankboost = 0;
    for (var i = 0; i < data.length - 1; i++) {
        data[i].rank = rank;
        if (data[i].points > data[i + 1].points) {
            rank += (rankboost + 1);
            rankboost = 0;
        }
        else {
            rankboost++;
        }
    }
    data[data.length - 1].rank = rank;
    return data;
}