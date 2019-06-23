// @depends(lib/entities/PhysicalObject)
class Character extends lib.entities.PhysicalObject{
    constructor(){
        super();
        this.hp = 100;
    }
    evo(dt){
        super.evo(dt);
        if (this.hp <= 0){
            this.onDie(dt);
            this.__.detach(this);
        }
    }
    onDie(dt){
        
    }
}
module.exports = Character