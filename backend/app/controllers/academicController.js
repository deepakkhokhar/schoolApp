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

exports.addyear = function(req, res) {
  console.log(req.body);
  var data={ schooluserId:req.body.schooluserId,yearName: req.body.formvalue.yearName};
      var Academicyeardata = new Academicyear(data);
   
      // save model to database
      Academicyeardata.save(function (err, data) {
        if (err) return res.json({status: 100,message: "Error found"});
       
        res.json({status: 200,message: "YearSaved"});
      }); 
}

exports.getyear=function(req, res) {
  Academicyear.find({schooluserId:req.params.id,isDeleted:false}, function(err, data) {
  if (!err){ 
    res.json({status: 200,data: data});
  } else {return res.json({status: 100,message: "Error found"});}
});
}

exports.deleteyear=function(req, res) {
  console.log(req.params.id);
  Academicyear.remove({_id:req.params.id}, function (err) {
    if (err) return res.json({status: 100,message: "Error found"});
    // deleted at most one tank document
    res.json({status: 200,message: "yearRemoved"});
  });
}

exports.getAYear=function(req, res) {
  
  Academicyear.findById(req.params.id, function(err, data) {
    if (!err){ 
      res.json({status: 200,data: data});
    } else {return res.json({status: 100,message: "Error found"});}
});
}

exports.updateYear=function(req, res) {
  console.log(req.body);
  
  Academicyear.findOneAndUpdate({_id:req.params.id}, req.body, {upsert: true}, function(err, doc) {
      if (err) return res.json({status: 100,message: "Error found"});
      // deleted at most one tank document
      res.json({status: 200,message: "AcademicYearUpdated"});
  });
  }

  exports.addterms = function(req, res) {
    console.log(req.body);
    var data={ schooluserId:req.body.schooluserId,frommonth: req.body.formvalue.frommonth,tomonth: req.body.formvalue.tomonth};
        var Academictermdata = new Academicterm(data);
     
        // save model to database
        Academictermdata.save(function (err, data) {
          if (err) return res.json({status: 100,message: "Error found"});
         
          res.json({status: 200,message: "TermSaved"});
        }); 
  }

  exports.getterm=function(req, res) {
    Academicterm.find({schooluserId:req.params.id,isDeleted:false}, function(err, data) {
    if (!err){ 
      res.json({status: 200,data: data});
    } else {return res.json({status: 100,message: "Error found"});}
  });
  }

  exports.deleteterm=function(req, res) {
    console.log(req.params.id);
    Academicterm.remove({_id:req.params.id}, function (err) {
      if (err) return res.json({status: 100,message: "Error found"});
      // deleted at most one tank document
      res.json({status: 200,message: "termRemoved"});
    });
  }

  exports.getATerm=function(req, res) {
  
    Academicterm.findById(req.params.id, function(err, data) {
      if (!err){ 
        res.json({status: 200,data: data});
      } else {return res.json({status: 100,message: "Error found"});}
  });
  }

  exports.updateTerm=function(req, res) {
    console.log(req.body);
    
    Academicterm.findOneAndUpdate({_id:req.params.id}, req.body, {upsert: true}, function(err, doc) {
        if (err) return res.json({status: 100,message: "Error found"});
        // deleted at most one tank document
        res.json({status: 200,message: "AcademictermUpdated"});
    });
    }