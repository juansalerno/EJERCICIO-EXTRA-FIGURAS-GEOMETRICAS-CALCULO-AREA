import FiguraGeometrica from './FiguraGeometrica';

export default class Rectangulo extends FiguraGeometrica {
   
    public constructor(base: number, altura: number){
        super(base, altura)
        
    }

    public calcularArea(): number {
        if(this.base != this.altura)
            return (this.base * this.altura)
        else 
            console.log('La figura creada no es un rectangulo');
            return null;
    }

}