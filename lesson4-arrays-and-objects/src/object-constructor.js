function ObjConstructor(name, props) {
    this.name = name;
    this.props = props;
    this.func = function() {
        console.log(this.name);
    };
}
const objConst = new ObjConstructor('Constructor', {subProp: 'nasted prop'});
const objConst2 = new ObjConstructor('Constructor', 1);

console.log(objConst);
console.log(objConst2);

//objConst.name = Object.keys(objConst?.notExisting);
//console.log(objConst);
