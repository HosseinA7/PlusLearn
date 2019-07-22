// Model
const User = require(`${config.path.model}/user`);
const {
    check,
    validationResult
} = require('express-validator');

module.exports = class Controller {
    constructor() {
        this.model = {
            User
        }
    }

    showValidationErrors(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array()
            });
        }
    }
    // showValidationErrors(req , res , callback) {
    //     let errors = validationResult(req);
    //     if(errors) {
    //         console.log(errors);

    //         res.status(422).json({
    //             message : errors.array(error => {
    //                 return {
    //                     'field' : error.param,
    //                     'message' : error.msg
    //                 }
    //             }),
    //             success : false
    //         });
    //         return true;
    //     }
    //     return false
    // }


    escapeAndTrim(req, items) {
        items.split(' ').forEach(item => {
            req.sanitize(item).escape();
            req.sanitize(item).trim();
        });
    }
}