const {pool} = require ('../config/db');

class UserModel {
    async createUser({ nom, prenom, telephone, email }) {
    try {
       
        const result = await pool.query(
            `INSERT INTO users (nom, prenom, telephone, email, "DateCreation")
            VALUES ($1, $2, $3, $4, NOW()) RETURNING id`,
            [nom, prenom, telephone, email]
        );

        
        const userId = result.rows[0].id;
        const userResult = await pool.query('SELECT * FROM users WHERE id = $1', [userId]);
        
        return userResult.rows[0];
    } catch (err) {
        throw new Error(`Erreur pendant la création : ${err.message}`);
    }
}

    async getAllUsers() {
    try {
      const { rows } = await pool.query('SELECT * FROM users');
      return rows;
    } catch (err) {
      throw new Error(`Erreur lors de la récupération des utilisateurs: ${err.message}`);
    }
  }

  async getUserById(id) {
    try {
      const { rows } = await pool.query(
        'SELECT * FROM users WHERE id = $1',
        [id]
      );
      return rows[0];
    } catch (err) {
      throw new Error(`ere pandan lap rekipere itlizate a: ${err.message}`);
    }
  }

  async updateUser(id, { nom, prenom, telephone, email}) {
    try {
      const { rows } = await pool.query(
        `
        UPDATE users
        SET nom = $1, prenom = $2, telephone = $3, email = $4
        WHERE id = $5
        RETURNING *
        `,
        [nom, prenom, telephone, email, id]
      );

      return rows[0];
    } catch (err) {
      throw new Error(`ere : ${err.message}`);
    }
  }


  async deleteUser(id) {
    try {
      const result = await pool.query(
        'DELETE FROM users WHERE id = $1',
        [id]
      );

      return result.rowCount > 0;
    } catch (err) {
      throw new Error(`Erreur lors de la suppression de l'utilisateur: ${err.message}`);
    }
  }



    }


module.exports = new UserModel();