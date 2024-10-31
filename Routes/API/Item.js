// pages/api/items.js
import dbConnect from '../../../Database/MongoDB';
import Item from '../../../Model/Item';

export default async function handler(req, res) {
  await dbConnect();

  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case 'GET':
        try {
            const items = await Item.find({});
            res.status(200).json({ success: true, data: items });
        } catch (error) {
            res.status(400).json({ success: false });
        }
        break;
    case 'POST':
        try {
            const item = await Item.create(req.body);
            res.status(201).json({ success: true, data: item });
        } catch (error) {
            res.status(400).json({ success: false });
        }
        break;
    case 'PUT':
        try {
            const item = await Item.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
            });
            if (!item) {
            return res.status(400).json({ success: false });
            }
            res.status(200).json({ success: true, data: item });
        } catch (error) {
            res.status(400).json({ success: false });
        }
        break;

    case 'DELETE':
        try {
            const deletedItem = await Item.deleteOne({ _id: id });
            if (!deletedItem) {
            return res.status(400).json({ success: false });
            }
            res.status(200).json({ success: true, data: {} });
        } catch (error) {
            res.status(400).json({ success: false });
        }
        break;
    default:
        res.status(400).json({ success: false });
        break;
  }
}