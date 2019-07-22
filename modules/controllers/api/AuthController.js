const Controller = require(`${config.path.controller}/Controller`);
const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validator');

module.exports = new class AuthController extends Controller {
    register(req , res) {  
        // check('username' , 'وارد کردن فیلد نام الزامیست').isEmpty();
        // check('email' , 'وارد کردن فیلد ایمیل الزامیست').isEmpty();
        // check('password' , 'وارد کردن فیلد پسورد الزامیست').isEmpty();
        // check('email' , 'فرمت ایمیل وارد شده صحیح نیست').isEmail();
        
        // if(this.showValidationErrors(req, res)) 
        //     return;

        this.model.User({
            username : req.body.username,  
            email : req.body.email,
            password : req.body.password
        }).save(err => {
            if(err) {
                if(err.code == 11000) {
                    return res.json({
                        data : 'ایمیل نمی تواند تکراری باشد',
                        success : false
                    })
                } else {
                    throw err;
                }
            }
            
            return res.json({
                data : 'کاربر با موفقیت عضو وبسایت شد',
                success : true
            });
        })
    }

    login(req , res) {
        check('email' , 'وارد کردن فیلد ایمیل الزامیست').not().isEmpty();
        check('password' , 'وارد کردن فیلد پسورد الزامیست').not().isEmpty();


        if(this.showValidationErrors(req, res)) 
            return;

        this.model.User.findOne({ email : req.body.email } , (err , user) => {
            if(err) throw err;

            if(user == null) 
                return res.status(422).json({
                    data : 'اطلاعات وارد شده صحیح نیست',
                    success : false
                });

            bcrypt.compare(req.body.password , user.password , (err , status) => {
                
                if(status == false) 
                    return res.status(422).json({
                        success : false,
                        data : 'پسورد وارد شده صحیح نمی باشد'
                    })
              

                return res.json({
                    data : user, //new UserTransform().transform(user,true),
                    success : true
                });  
            })
        })

    }
}