import Animal from '../../models/Animal.js';

export default async (req, res, next) => {
    const query = {};

    if (req.params.name) {
        query.name = req.params.name
    }

    const animals = await Animal.find(query);

    res.status(200).json(animals);
}
