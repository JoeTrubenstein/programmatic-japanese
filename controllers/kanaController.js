var wanaKana = require('wanakana')

module.exports = {
    bindInput : function(req, res ,next) {
        var wanaKanaInput = document.createElement('input')
        wanaKana.bind(wanaKanaInput)
        return wanaKanaInput
    }
}