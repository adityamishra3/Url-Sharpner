const shortid = require('shortid');
const Urls = require('../models/urls');
async function handleGenerateNewUrl(req,res){
    let body = req.body;
    let url = body.url;
    if(!url){ return res.status(400).json({message:"Input a url..."})}
    const shortId = shortid();
    let newUrl = new Urls({
        shortId:shortId,
        redirectURL:url,
    })
    await newUrl.save();
    return res.json({mesage: "Short Url created successfully", id: shortId});
}

async function handleRedirection(req,res){
    const id = req.params.shortId;
    let url = await Urls.findOneAndUpdate({shortId:id},{
        $push:{
            visitHistory:{
                timestamp:Date.now()
            }
        }
    },{new:true});
    if(!url){
        res.status(400).json({message: "No such url exists"});
    }
    return res.redirect(url.redirectURL);
}

async function handleGetAnalytics(req,res){
    let id = req.params.shortId;

    let url = await Urls.findOne({shortId: id});
    if(!url) res.json({message:"No such url exists"});
    let analytics = url.visitHistory.length;
    return res.json({totalClicks: analytics , analytics:url.visitHistory});
}

module.exports={
    handleGenerateNewUrl,
    handleRedirection,
    handleGetAnalytics
}