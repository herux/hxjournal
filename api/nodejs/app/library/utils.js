let setResponse = (res, success, error, data) => {
    let adata = {
        data,
        pagination: {

        }
    }
    if (success) {
        res.json({
            r: success,
            m: 'success',
            d: adata
        });
    }else {
        res.json({
            r: false,
            m: error,
            d: adata
        });
    }
}

module.exports = {
    setResponse: setResponse
}