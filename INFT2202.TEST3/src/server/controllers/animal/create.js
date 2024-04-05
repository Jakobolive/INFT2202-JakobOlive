import Animal from '../../models/Animal.js';

export default async (req, res, next) => 
{
    const { name, sound, heads, legs } = req.body;
    if (
           (name == undefined || name === "")
        || (sound == undefined || sound === "")
        || (heads == undefined || heads === "")
        || (legs == undefined || legs === "")
    ) {
        return res.status(400).json({ error: 'You must supply an animal name, sound, heads, and legs.' });
    }

    const exists = await Animal.find({ name });
    if (exists.length) {
        return res.status(400).json({ error: 'That animal already exists' });
    }

    const animal = await Animal.create({
        name,
        sound,
        heads,
        legs
    })

    res.status(200).json(animal);
}
