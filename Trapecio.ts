import FiguraGeometrica from './FiguraGeometrica';

export default class Trapecio extends FiguraGeometrica {
    private baseMayor: number;

    public constructor(base: number, altura: number, baseMayor: number){
        super(base, altura)
        this.baseMayor = baseMayor;
        
    }

    public calcularArea(): number {
        if(this.base != this.baseMayor)
            return ((this.altura * (this.baseMayor + this.base)) / 2);
        else console.log('La figura ingresada no es un trapecio.');
            return null;
    }

}