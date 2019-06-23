// @depends(lib/entities/Character)
class TestEntity extends lib.entities.Character {
    constructor(pos){
        super();
        sys.augment(this, pos)
    }
}
module.exports = TestEntity