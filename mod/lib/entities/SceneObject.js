class SceneObject{
    constructor(){
        this.needToInit = true;
        this.x = 0;
        this.y = 0;
        this.wight = 0;
        this.height = 0;
        this.z = 0;
        this.img = undefined;
        this.spawnedTime = new Date().getTime();
    }
    evo(dt){
        if (this.needToInit){
            this.recalcSize();
            delete this.needToInit;
        }
    }
    recalcSize(){
        if (this.img){
            this.width = this.img.width;
            this.height = this.img.height;
        }
    }
    draw(){
        if (this.img){
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        }
    }
}

module.exports = SceneObject