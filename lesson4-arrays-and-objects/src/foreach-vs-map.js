const arr = [1, '2', 3, 100];

const arrNumber = [];
arr.forEach((el, i) => {
    if(typeof el === 'number'){
        arrNumber.push(el);
        console.log(i);
    }
});
console.log(arrNumber);

const arrNumber2 = arr.map((el, i) => {
    if(typeof el === 'number'){
        return 'number';
    }
    return null;
});
console.log(arrNumber2);

const obj = {
    name: 'Test',
    surname: 'Test2',
    func: function(){
        console.log(this.surname);
    },
    funcTwo(name){
        console.log('this.param =' + this.name);
        console.log('param without this =' + name);
        this.name = name;

        this.func();
    },
    nasted: {
        prop: 'value',
        funNasted() {
            console.log(this.prop);
        }
    }
};

const objKeys = Object.keys(obj).map((el) => el);
console.log(objKeys);
