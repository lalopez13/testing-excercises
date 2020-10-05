const {sum,momIsMadRandomAnswer,reverseArray,promise,multiplication,birthdayGift}= require('../index.js');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
test('retorna un valor booleano', () =>{
    expect(typeof momIsMadRandomAnswer()).toBe('boolean')
});
test('retorna el array reverse', () =>{
   const arr =[1,2,3,4,5] 
    expect(reverseArray(arr)).toStrictEqual([5,4,3,2,1])
});
test('la promesa deberia retornar 3', () =>{
    expect(promise).resolves.toBe(3);
});
test('debe retornar un array', () =>{
    expect(multiplication()).resolves.toEqual([1,2,3,4]);
});
test('Si momIsMad es true', () =>{
    expect(birthdayGift(true)).resolves.toBe('Mi madre decidió no comprarme un nuevo teléfono');
});
test('Si momIsMad es false', () =>{
    expect(birthdayGift(false)).resolves.toBe('Mi mamá está feliz!, me compró un nuevo teléfono');
});