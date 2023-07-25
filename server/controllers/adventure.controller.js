import Adventure from '../mongodb/models/adventure.js';
import User from '../mongodb/models/user.js';

import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import {v2 as cloudinary} from 'cloudinary';

dotenv.config();
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});




//CRUD - Functionalitati pentru CREATE, READ, UPDATE, DELETE 

const getAllAdventures = async(req,res)=>{
    const { _end, _order, _start , _sort,title_like="",adventureType=""} =req.query;
    const query ={};

    if(adventureType!== ''){
        query.adventureType=adventureType;
    }

    if(title_like){
        query.title={$regex:title_like, $options:'i'};
    }

    try{
        const count= await Adventure.countDocuments({query});

        const adventures = await Adventure
            .find(query)
            .limit(_end)
            .skip(_start)
            .sort({[_sort]:_order})

        res.header('x-total-count',count);
        res.header('Access-Cnotrol-Expose-Headers','x-total-count');
        

        

        res.status(200).json(adventures);
    }
    catch (error){
        res.status(500).json({message:error.message});
    }
};

const getAdventureDetail = async(req,res)=>{
    const {id} =req.params;
    const adventureExists = await Adventure.findOne({ _id: id }).populate('creator');
    if(adventureExists) {
        res.status(200).json(adventureExists) 
}
    else {
        res.status(404).json({message: 'Adventure not found'});
    }
};

const createAdventure = async(req,res)=>{
    try {
        const {title, 
            description, 
            adventureType, 
            location,
             points, 
             photo, 
             email,
            } = req.body; //frontend ->backend

        //Start new session
        const session=await mongoose.startSession();
        session.startTransaction();
    
        const user= await User.findOne({email}).session(session);
        if(!user) throw new Error('User not found');
    
        const photoUrl = await cloudinary.uploader.upload(photo);
    
        const newAdventure = await Adventure.create({
            title,description,adventureType,location,points,photo: photoUrl.url, creator: user._id,   
         });
        user.allAdventures.push(newAdventure._id);
        await user.save({session});
    
        await session.commitTransaction();
    
        res.status(200).json({message: 'Adventure created!'});
    }
     catch (error) {
        res.status(500).json({message: error.message})
    }
};

const updateAdventure = async(req,res)=>{
    try {
        const {id} =req.params;
        const {title,description,adventureType,location, points, photo}=req.body;
        const photoUrl=await cloudinary.uploader.upload(photo);
        await Adventure.findByIdAndUpdate({_id:id},{title,description,adventureType,location,points,photo:photoUrl.url||photo})

        res.status(200).json({message:'Adventure updated!'})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

const deleteAdventure = async(req,res)=>{
    try {
        const {id} = req.params; 
   
        const adventureToDelete= await Adventure.findById({_id:id}).populate('creator');

        if(!adventureToDelete) throw new Error('Adventure not found!');

        const session=await mongoose.startSession();
        session.startTransaction();

        await Adventure.deleteOne({ _id: id }, { session })
        adventureToDelete.creator.allAdventures.pull(adventureToDelete);

        await adventureToDelete.creator.save({session});

        await session.commitTransaction();

        res.status(200).json({message: 'Adventure deleted succesfully'});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};


export{
    getAllAdventures,
    getAdventureDetail,
    createAdventure,
    updateAdventure,
    deleteAdventure,
}