exports.addclass = function(req, res) {
    console.log(req.body);
    var data={ schooluserId:req.body.schooluserId,className: req.body.formvalue.className};
        var Academicdata = new Academic(data);
     
        // save model to database
        Academicdata.save(function (err, data) {
          if (err) return res.json({status: 100,message: "Error found"});
         
          res.json({status: 200,message: "ClassSaved"});
        }); 
}

exports.getAllClass=function(req, res) {
    Academic.find({schooluserId:req.params.id,isDeleted:false}, function(err, data) {
    if (!err){ 
      res.json({status: 200,data: data});
    } else {return res.json({status: 100,message: "Error found"});}
});
}

exports.deleteClass=function(req, res) {
    console.log(req.params.id);
    Academic.remove({_id:req.params.id}, function (err) {
      if (err) return res.json({status: 100,message: "Error found"});
      // deleted at most one tank document
      res.json({status: 200,message: "classRemoved"});
    });
  }

  exports.getAClass=function(req, res) {
  
    Academic.findById(req.params.id, function(err, data) {
      if (!err){ 
        res.json({status: 200,data: data});
      } else {return res.json({status: 100,message: "Error found"});}
  });
  }

  exports.updateClass=function(req, res) {
  console.log(req.body);
  
  Academic.findOneAndUpdate({_id:req.params.id}, req.body, {upsert: true}, function(err, doc) {
      if (err) return res.json({status: 100,message: "Error found"});
      // deleted at most one tank document
      res.json({status: 200,message: "AcademicUpdated"});
  });
  }

  exports.addstream=function(req, res) {
      //console.log(req.params.classId);
      //console.log(req.body);
      Academic.updateOne({'_id': req.params.classId}, {'$push': {
        'stream': {name:req.body.className}
    }}, function(err) {
       // console.log(err);
        if (err) return res.json({status: 100,message: "Error found"});
        res.json({status: 200,message: "AcademicUpdated"});
    });
  }

  exports.getstream=function(req, res) {
    Academic.find({_id:req.params.classId,isDeleted:false}, function(err, data) {
    if (!err){ 
      res.json({status: 200,data: data});
    } else {return res.json({status: 100,message: "Error found"});}
});
}

exports.addsubject=function(req, res) {
  
  console.log(req.body);
  Academic.findOneAndUpdate( {stream: {$elemMatch:{_id: req.params.streamId}}}, {$push: { 'stream.$.subjects' : {"name":req.body.subjectName}}}, function(err) {
    console.log(err);
    if (err) return res.json({status: 100,message: "Error found"});
    res.json({status: 200,message: "AcademicUpdated"});
});
}

exports.getsubject=function(req, res) {
  console.log(req.params.streamId);
  Academic.findOne({stream: {$elemMatch:{_id: req.params.streamId}}},function (err, data) {
    if (!err){ 
      res.json({status: 200,data: data});
    } else {return res.json({status: 100,message: "Error found"});}  

  })
}