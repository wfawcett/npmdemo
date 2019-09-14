const Hello = require('./hello');
let classUnderTest = null;
describe('Tests Hello class', ()=>{
    beforeAll( () => {
        jest.spyOn(global.console, 'log');
        classUnderTest = new Hello([,, 'Ted'], console);
    });
    it('should output greeting', () => {
        classUnderTest.greetings();
        expect(console.log).toHaveBeenCalledTimes(1);
    });
    it('should verify line length', () => {
        const line = classUnderTest.line(10);
        expect(line).toHaveLength(10);
    });
    it('should put a sentance together', () => {
        const sentance = classUnderTest.putTogetherASentance();
        expect(sentance).toEqual(expect.stringContaining('Ted'));
    });
});
