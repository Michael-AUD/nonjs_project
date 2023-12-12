async updateGrade(Mark, EnrolmentID) {
    try {
      
      const [rows] = await this.pool.query('UPDATE enrolments SET Mark = ? WHERE EnrolmentID = ? AND CourseID IN (SELECT CourseID FROM courses WHERE TeacherID = ?)', [Mark, EnrolmentID, teacherID]);
  
      if (rows.affectedRows === 0) {
        throw new Error('Enrolment not found or not assigned to the teacher');
      }
    } catch (error) {
      console.error('Error in updateGrade', error);
      throw error;
    }
  }
  