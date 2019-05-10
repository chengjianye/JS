

function inhrite(superType,subType){
     var prototype = Object.create(superType.prototype)
     prototype.constructor = subType
     subType.prototype = prototype
}