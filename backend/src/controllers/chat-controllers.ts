import { Request, Response, NextFunction } from 'express';
import User from '../models/User.js';
import { configureOpenAI } from '../config/openai-config.js';

export const generateChatCompletion = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { message } = req.body;
    const user = await User.findById(res.locals.jwtData.id);
    if (!user) {
        return res.status(401).json({ message: "User not registered" });
        // grab chats of user
        const chats = user.chats.map(({ role, content }) => ({ role, content }));
        chats.push({ content: message, role: "user" });
        user.chats.push({ content: message, role: "user" });

        // send all chats with new chat to openai api
        const config = configureOpenAI();
        // get latest responses
    }
};