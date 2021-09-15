import Nedb from "nedb"

let db = new Nedb({
  filename: 'admin-db',
  autoload: true
})


export default function Projects (req,res){
    
    switch(req.method){
        case "DELETE":
            db.remove({_id:req.query.id},{}, err=>{
                if(err)
                {
                    res.status(400).send(err)
                }

                res.status(200).send(req.query.id)
            })
        break;

        case "GET":
            db.findOne({_id:req.query.id}).exec((err,resDb)=>{
                if(err)
                {
                    res.status(400).send(err)
                }

                res.status(200).send(resDb)
            })
        break;
    }
}