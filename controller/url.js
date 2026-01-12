import { nanoid } from "nanoid";
import URL from "../models/url.js";

async function handelGenrateShortUrl(req,res) {
    const body = req.body;
    if (!body.url) return res.status(400).json({error: "URL is required"})
    const shortId = nanoid(8)
    await URL.create({
        shortId: shortId,
        redirectURL: body.url,
        visitHistroy:[],
    });

    return res.json({id: shortId});
}

export { handelGenrateShortUrl };