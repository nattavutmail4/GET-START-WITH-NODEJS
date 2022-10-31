const conn   = require('../config/database');
const moment = require('moment');

const getAllTutorials = (request,response)=>{
    try {
        return response.status(200).json({
            message:"Welcom tutorials"
        });
    } catch (error) {
        return response.status(500).json({
           error:error.message
        })
    }
}

const searchbyid = (request,response)=>{
    try {
        return  response.status(200).json({
             message:"Search by tutorials"
        });
    } catch (error) {
        response.error(error);
       
    }
}


const createTutorials = (request,response)=>{
    try {
        return  response.status(201).json({
            message:"Create succes"
        })
    } catch (error) {
        return response.status(500).json({
            error:error.message
        })
    }
}


const updateTutorials = (request,response)=>{
    try {
        return  response.status(200).json({
            message:"update success"
        })
    } catch (error) {
        return response.status(500).json({
            error:error.message
        })
    }
}

const deletetutorials = (request,response)=>{

}
module.exports = {
     getAllTutorials,
     searchbyid,
     createTutorials,
     updateTutorials,
     deletetutorials
}