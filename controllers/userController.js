const userModel = require('../models/User');

class UserController{
    async createUser(req, res){
        try{
            const newUser = await userModel.createUser(req.body);
            res.status(201).json({
                success: true,
                message: 'Itilizate kreye avek sikse',
                data: newUser
            });
        } catch (err){
            res.status(500).json({
                success: false,
                message: 'Ere pandan map kreye itilizate',
                error: err.message
            })
        }

    }


    async getAllUsers(req, res) {
        try {
        const users = await userModel.getAllUsers();
        
        res.json({
            success: true,
            data: users,
            count: users.length
        });
        } catch (err) {
        res.status(500).json({
            success: false,
            message: 'ere seve',
            error: err.message
        });
        }
    }


async getUserById(req, res) {
    try {
      const user = await userModel.getUserById(req.params.id);

      if(!user) {
        return res.status(404).json({
          success: false,
          message: 'M pa jwenn itilizate a'
        });
      }

      res.json({
        success: true,
        message: 'Nou jwenn yo',
        data: user
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: 'ere seve',
        error: err.message
      });
    }
  }


    async updateUser(req, res) {
    try {
      const updatedUser = await userModel.updateUser(req.params.id, req.body);
      
      if (!updatedUser) {
        return res.status(404).json({
          success: false,
          message: 'M pa jwenn itilizate a'
        });
      }

      res.json({
        success: true,
        message: 'Itilizate modifye avek sikse',
        data: updatedUser
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: 'Ere nan modifye a',
        error: err.message
      });
    }
  }

  async deleteUser(req, res) {
    try {
      const isDeleted = await userModel.deleteUser(req.params.id);
      
      if (!isDeleted) {
        return res.status(404).json({
          success: false,
          message: 'M pa jwenn itilizate a'
        });
      }

      res.json({
        success: true,
        message: 'Itilizate suprime avek sikse'
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: 'Ere nan suprime a',
        error: err.message
      });
    }
  }



}
module.exports = new UserController();