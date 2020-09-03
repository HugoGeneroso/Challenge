const request = require('supertest');
const server = require('../bin/app.js');
const TasksController = require('../src/controllers/TasksController.js');

beforeAll(async () => {
});

afterAll(() => {
server.close();
console.log('Server closed');
});


describe('Initializing tasks tests', () => {

   test('analyzeTasks should receive only a string and return another string', async () => {
      var sampleInput = "2\n1 PT\n2 US\n3\n1 1 10\n2 1 5\n3 2 10";
      var sampleOutput = "1 7.50\n2 10.00\nPT 7.50\nUS 10.00";
      var result = await TasksController.analyzeTasks(sampleInput);
      expect(result).toContain(sampleOutput);
   });

   test('analyzeTasks should list countries in ascendant order', async () => {
      var sampleInput = "3\n1 US\n2 PT\n3 NZ\n3\n1 1 10\n2 1 5\n3 2 10";
      var sampleOutput = "1 7.50\n2 10.00\n3 0\nNZ 0\nPT 10.00\nUS 7.50";
      var result = await TasksController.analyzeTasks(sampleInput);
      expect(result).toContain(sampleOutput);
   });

   test('analyzeTasks should list users id in ascendant order', async () => {
      var sampleInput = "3\n1 US\n2 PT\n3 NZ\n3\n1 2 10\n2 1 5\n3 2 10";
      var sampleOutput = "1 5.00\n2 10.00\n3 0\nNZ 0\nPT 10.00\nUS 5.00";
      var result = await TasksController.analyzeTasks(sampleInput);
      expect(result).toContain(sampleOutput);
   });

   test('analyzeTasks should not accept InputString as null', async () => {
      var sampleInput = null;
      var result = await TasksController.analyzeTasks(sampleInput);
      expect(result).toContain('The InputString can only be a string');
   });

   test('analyzeTasks should not accept InputString as a number', async () => {
      var sampleInput = 999999;
      var result = await TasksController.analyzeTasks(sampleInput);
      expect(result).toContain('The InputString can only be a string');
   });

   
   test('analyzeTasks should not accept a string that is in an invalid format', async () => {
      var sampleInput = 'wrong format';
      var result = await TasksController.analyzeTasks(sampleInput);
      expect(result).toContain('The InputString is in an invalid format');
   });

   
});


