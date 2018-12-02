import { reflect, Types } from "tsruntime";

// const reflect2 = reflect
const constKey = "some-key";

const uniqSymb = Symbol("some symb");

interface AllKeys {
  s: string;
  "string-key": string;
  42: string;
  [43]: string;
  [constKey]: string;
  ["computed-string"]: string;
  [uniqSymb]: string;
}

interface IExtended {
    origKey: string
}

interface IExtends extends IExtended {
    myKey: string
}


const stringType = {kind: Types.TypeKind.String}


describe("interfaces", () => {
  it("interfaces", () => {
    const type = reflect<AllKeys>()
    expect(type).toEqual({
        name: 'AllKeys',
        kind: Types.TypeKind.Interface,
        arguments: [],
        properties: {
            "s": stringType,
            "string-key": stringType,
            42: stringType,
            [43]: stringType,
            [constKey]: stringType,
            ['computed-string']: stringType,
            [uniqSymb]: stringType
        }
    });
  });
  it('extends', () => {
    const type = reflect<IExtends>()
    expect(type).toEqual({
        name: 'IExtends',
        kind: Types.TypeKind.Interface,
        arguments: [],
        properties: {
            "origKey": stringType,
            "myKey": stringType,
        }
    })
  })
});