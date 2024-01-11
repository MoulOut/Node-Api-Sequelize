'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('registrations',[
      {
        student_id: 14,
        course_id: 1,
        status: 'registred',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        student_id: 15,
        course_id: 2,
        status: 'registred',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        student_id: 16,
        course_id: 3,
        status: 'registred',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        student_id: 17,
        course_id: 4,
        status: 'registred',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('registrations', null, {});
  },
};
