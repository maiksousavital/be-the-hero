const generateUniqueId = require('../src/utils/generateUniqueId');

//Unit test 
describe('Generate Unique Id', () => {
    it('should generate an unique id', ()=>{
        const id = generateUniqueId();
        expect(id).toHaveLength(8);
    })
});