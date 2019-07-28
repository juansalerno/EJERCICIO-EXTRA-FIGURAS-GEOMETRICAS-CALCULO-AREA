import FiguraGeometrica from './FiguraGeometrica';

export default class Cuadrado extends FiguraGeometrica {
   
    public constructor(base: number, altura: number){
        super(base, altura)
        
    }

    public calcularArea(): number {
        if(this.base == this.altura)
            return (this.base**2)
        else 
            console.log('La figura creada no es un cuadrado');
            return null;
            
    }

}