export const fetchData = {
    makeRequest: function (dispatch, reqObj, loadingAction, successAction, errorAction, ignoreError) {
    const previousRequest = window.sample_app.lastRequest;
    if (previousRequest && previousRequest.search !== window.location.search) {
        previousRequest.source.cancel('Operation canceled by the user.');
    }
    // Generate new token for the request
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    window.sample_app.lastRequest = {
        search: window.location.search,
        source,
    };
    reqObj.cancelToken = source.token;
    dispatch(loadingAction(true));
    axios(reqObj)
        .then((response) => {
            if (loadingAction) dispatch(loadingAction(false));
            dispatch(successAction(response.data));
        })
        .catch((e) => {
        console.log(e);
        if(e.message && e.message === 'Operation canceled by the user.'){
            return
        } else {
            dispatch(loadingAction(false));
            let errorData = null;
            if (e.response) {
                errorData = e.response.data;
            }
            dispatch(errorAction(errorData));
        }
        });
    }
}