    async updateGrade(req, res) {
      try {
        const id = req.params.id;
        const grade = req.body.grade;
        const enrolmentId = req.params.enrolmentid;
  
      
        await this.service.updateGrade(grade, enrolmentId, id);
  
        res.send(`Grade has been updated`);
      } catch (error) {
        res.status(500
  
  