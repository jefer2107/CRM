import Nedb from "nedb"

let db = new Nedb({
  filename: 'admin-db',
  autoload: true
})

export default function Projects(req, res) {
  switch(req.method){
    case "GET":
      db.find({}).sort({projeto:1}).exec((err, resDb)=>{
        if(err)
        {
          res.status(400).send(err)
        }

        res.status(200).send(resDb)
      })
      
      break;
    
    case "POST":
      db.insert(req.body,(err, resDb)=>{
        if(err)
        {
          res.status(400).send(err)
        }
        res.status(200).send(resDb)
      })

      break;
  }
}
