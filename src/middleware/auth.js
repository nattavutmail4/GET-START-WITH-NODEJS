const { verify, decode } = require('jsonwebtoken');

const checkToken = (request,response,next)=>{
    try {
        let token = req.get('authorization');
        if(token){
            token = token.slice(7);
            verify(token, "aa123",(err, decoded)=>{
				if(err){
					res.json({
						success: 0,
						message: 'Invalid token'
					})
				}else{
					next()
				}
			});
        }else{
           return response.status(401).json(
            {
                 message:"Access denied unauthorized user !!"
            }
           )
        }

    } catch (error) {
       console.log(error)
    }
   
}

module.exports = checkToken