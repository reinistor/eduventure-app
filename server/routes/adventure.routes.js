import express from 'express';

import{
    createAdventure,
    deleteAdventure, 
    getAllAdventures,
    getAdventureDetail,
    updateAdventure
} from '../controllers/adventure.controller.js'
    
const router= express.Router();

router.route('/').get(getAllAdventures);
router.route('/:id').get(getAdventureDetail);
router.route('/').post(createAdventure);
router.route('/:id').patch(updateAdventure); //update
router.route('/:id').delete(deleteAdventure);

export default router;