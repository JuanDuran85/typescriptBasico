import { calculateComplexity, StringInfo } from '../../app/doubles/otherUtils';
describe('OtherUtils test suits', () => {
    it('calculateComplexity test', () => {
        // stubs: incomplet object wwe use on test
        const someInfo = {
            lengthTotal: 3,
            extraInfo: {
                fieldOne: 'field',
                fieldTwo: "field",
                fieldThree: "field"
            }
        } as unknown as StringInfo;

        const actual = calculateComplexity(someInfo);
        expect(actual).toEqual(9);
    });
});