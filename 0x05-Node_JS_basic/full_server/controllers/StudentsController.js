const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const fields = await readDatabase(process.argv[2]);
      res.write('This is the list of our students\n');
      for (const [field, names] of Object.entries(fields)) {
        res.write(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`);
      }
      res.status(200).end();
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (!['CS', 'SWE'].includes(major)) {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const fields = await readDatabase(process.argv[2]);
      const names = fields[major] || [];
      res.status(200).send(`List: ${names.join(', ')}`);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
}

module.exports = StudentsController;
