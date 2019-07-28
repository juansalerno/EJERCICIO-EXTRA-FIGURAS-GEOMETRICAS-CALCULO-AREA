export default abstract class FiguraGeometrica {
    protected base: number;
    protected altura: number;
   

    public constructor(base: number, altura: number){
        this.base = base;
        this.altura = altura;
    }

    abstract calcularArea(): number;
}