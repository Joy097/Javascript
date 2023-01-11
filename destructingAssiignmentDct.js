var voxel = {x:3.6,y:4,z:7};

//old way :
var x = voxel.x; //x = 3.6
var y = voxel.y;
var z = voxel.z;

//destructuring :
const{x : a, y : b, z : c } =voxel; //a=3.6

console.log(a)
