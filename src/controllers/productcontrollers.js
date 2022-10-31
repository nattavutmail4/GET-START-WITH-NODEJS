const db = require('../config/database')
const moment = require('moment');

const  getAllPorudcts = async(request,response)=>{
    try {
        const res  = await db.query('SELECT * FROM products ',(error,results,fields)=>{
            if(!error){
                 response.status('200').json({
                    count:results.length,
                    response:results
                })
            }else{
                response.status(404).json({error:error})
            }
        })
        return res;
    }catch (error) {
        return response.status(500).json({
           error:error.message
        })
    }
}

const SearchproductById = async(request,response,next)=>{
    try {
        if(request.params.id){
            const query = 'SELECT * FROM products WHERE p_id = ?';
            db.query(await query,request.params.id,(error,result,fields)=>{
                if(!error){
                    let countdata = result.length;
                    if(countdata != 0){
                        let resp  = JSON.parse(JSON.stringify(result)); 
                        const data = {
                            count:result.length,
                            response:{
                                result: resp,
                            }
                        }
                        return response.status(200).json({data})
                    }else{
                        return response.status(404).json({})
                    }
                    
                }else{
                    return response.status(500).json({
                        error:error
                   });
                }
            }) 
        }
    } catch (error) {
        return response.status(500).json({
             error:error
        });
    }
}

const CreateProduct = async (request,response,next)=>{
    try {
        const {p_code,p_name,p_title,p_img,price} = (request.body)

        if(p_code != '' &&p_name!='' && p_title !='' && p_img !='' &&price!=''){
                db.query(await 'INSERT INTO products SET ?',{
                    p_code:p_code,
                    p_name:p_name,
                    p_title:p_title,
                    p_img:p_img,
                    price:price,
                    created_at:moment(new Date()).format('YYYY-MM-DD HH:m:s', true)

                },(error,result,fields)=>{
                    if(!error){
                        return response.status(201).json({
                            message:"Create product successfuly"
                        });
                        
                    }else{
                        return response.status(404).json({
                            error:error
                        });
                    }
                })
        }else{
            return response.status(401).json({})
        }
    } catch (error) {
        return response.status(500).json({message:''+ error})
    }
}


const UpdateProduct = async(request,response,next)=>{
   try {
       const  id = request.params.id;
       const {p_code,p_name,p_title,p_img,price} = (request.body)
       const updated_at = moment(new Date()).format('YYYY-MM-DD HH:m:s', true)

       db.query(await `UPDATE products SET p_code = ?, p_name = ?, 
         p_title = ? ,p_img =?,price=? ,updated_at=? WHERE p_id = ?
       `,[p_code,p_name,p_title,p_img,price,updated_at,id],
       (error,results,fields)=>{
            if(!error){
                return response.status(200).json({
                    message:'Update succesfuly',
                    result:results
                });
            }else{
                return response.status(404).json({
                    message:"Update false" + error,
                });
            }
       })


   } catch (error) {
        return response.status(500).json({message:""+error});
   }
}


const DeleteProduct = async (request,response,next)=>{
    try {
        const id =  request.params.id
        db.query(await 'DELETE FROM products where p_id = ' + id ,(error,result,fields)=>{
            if(!error){
                 return response.status(200).json({
                      message:"Delete succesfuly",
                      result:result
                 });
            }else{
                return response.status(404).json({
                     message:"Error is " + error
                });
            }
        })
    } catch (error) {
        return response.status(500).json({
             message:"Error is " + error
        })
    }    
}

module.exports = {
    getAllPorudcts,
    SearchproductById,
    CreateProduct,
    UpdateProduct,
    DeleteProduct
}