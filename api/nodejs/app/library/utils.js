let setResponse = (res, success, error, data) => {
    if (success) {
        res.json({
            r: success,
            m: 'success',
            d: data
        });
    }else {
        res.json({
            r: false,
            m: error,
            d: data
        });
    }
}

module.exports = {
    setResponse: setResponse
}