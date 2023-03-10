const express=require("express")
const bodyParser=require("body-parser")
const fs=require("fs")
const app=express()
app.use(bodyParser.json())

let fileupload = require("express-fileupload");
app.use(fileupload({useTempFiles:true}));
// const formatXml = require("xml-formatter")
const { XMLParser, XMLBuilder, XMLValidator} = require("fast-xml-parser");

const parser = new XMLParser();

const options = {
    ignoreAttributes : false
};

const builder = new XMLBuilder(options);
const compareObjects=require('./modules/compareObjects')




app.post('/',(req,res)=>{
    if(!req.files)
    {
        res.send("File was not found");
        return;
    }
    


    let xml1file=fs.readFileSync(req.files.xml1.tempFilePath, function(err, data) {
        return data
    });
    let xml1file2=fs.readFileSync(req.files.xml2.tempFilePath, function(err, data) {
        return data
        
    });
    let jObj = parser.parse(xml1file);
    let jObj2 = parser.parse(xml1file2);
    let finishedObj=compareObjects(jObj,jObj2)
    // console.log(finishedObj)
    let xmlDataStr = builder.build(finishedObj);
    fs.writeFile('./final.xml',xmlDataStr,(err)=>{
        if(err){
            console.log(err)

        }
    })
    // fs.writeFile("./final.xml", formatXml(xmlDataStr, {collapseContent: true}), function(err, result) {
    //     if (err) {
    //       console.log("err")
    //     } else {
    //       console.log("Xml file successfully updated.")
    //     }
    //   })
    res.send(xmlDataStr)

})


app.listen(5000,()=>{
    console.log('listening')
})