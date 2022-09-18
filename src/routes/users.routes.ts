import express from 'express';
import UsersController from '../controllers/users.controller';
import { UsersMockRepository } from '../repositories/users-mock-repository';

const repository = new UsersMockRepository();
const controller = new UsersController(repository);

const router = express.Router();

router.post('', (req, res) => {
    try {
        return res.json(controller.addItem(req.body));
    } catch (error) {
        res.status(500).json(error);
    }
} );

router.get('', (_, res) => {
    return res.json(controller.getAllItems());
} );

router.get('/:id', (req, res) => {
    try {
        return res.json(controller.getItemById(req.params.id));
    } catch (error) {
        res.status(500).json(error);
    }
} );

router.put('/:id', (req, res) => {
    try {
        return res.json(controller.updateItem(req.params.id, req.body));
    } catch (error) {
        res.status(500).json(error);
    }
} );

router.delete('/:id', (req, res) => {
    try {
        return res.json(controller.deleteItem(req.params.id));
    } catch (error) {
        res.status(500).json(error);
    }
} );

router.get('/find/:firstName', (req, res) => {
    try {
        return res.json(controller.findUserByFirstName(req.params.firstName));
    } catch (error) {
        res.status(500).json(error);
    }
});

export default router;
