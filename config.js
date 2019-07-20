const path = require('path');

module.exports = {
    port : 8080,
    secret : 'sadas@!$@#%!^#!GSDGETWT@#OI%J@#%!*#)^U#)^U!@)U',
    path : {
        controllers : { 
            api : path.resolve('./modules/controllers/api'),
        },
        model : path.resolve('./modules/models'),
        transform : path.resolve('./modules/transforms'),
        controller : path.resolve('./modules/controllers'),
    }
}