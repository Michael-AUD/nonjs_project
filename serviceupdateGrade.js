async updateGrade(Mark, EnrolmentID, userID) {
    const user = await this.dao.getUserById(userID);
  
    if (!user[0] || user[0].roleId !== 2) {
      throw new Error(`User does not have permission`);
    }
  
    await this.dao.updateGrade(Mark, EnrolmentID);
  }
  