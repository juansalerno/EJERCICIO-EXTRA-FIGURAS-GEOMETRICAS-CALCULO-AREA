import FiguraGeometrica from './FiguraGeometrica';

export default class Romboide extends FiguraGeometrica {
   
    public constructor(base: number, altura: number){
        super(base, altura)
        
    }

    public calcularArea(): number {
        return (this.base * this.altura)
    }

}