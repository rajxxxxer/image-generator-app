import axios from "axios";
import userModel from "../models/user.js";
import FormData from "form-data";

export const generateImage = async (req, res) => {
    try {
        const { userId, prompt } = req.body;

        if (!userId || !prompt) {
            return res.status(400).json({ success: false, message: 'Missing details' });
        }

        const user = await userModel.findById(userId);

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        if (user.credit <= 0) {
            return res.status(403).json({ success: false, message: 'Insufficient credits', bal: user.credit });
        }

        const formdata = new FormData();
        formdata.append('prompt', prompt);

        const response = await axios.post(
            'https://clipdrop-api.co/text-to-image/v1',
            formdata,
            {
                headers: {
                    'x-api-key': process.env.CLIPDROP_API,
                    ...formdata.getHeaders()
                },
                responseType: 'arraybuffer'
            }
        );

        const base64Image = Buffer.from(response.data, 'binary').toString('base64');
        const resultImg = `data:image/png;base64,${base64Image}`;

        // Deduct one credit
        await userModel.findByIdAndUpdate(user._id, { credit: user.credit - 1 });

        return res.status(200).json({
            success: true,
            image: resultImg,
            remainingCredits: user.credit - 1
        });
        

    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ success: false, message: 'Server error', error: err.message });
    }
};
