(() => {

    // Tipos
    const batman: string = 'Bruce';
    const superman:string = 'Clark';

    const existe: boolean = false;

    // Tuplas
    const parejaHeroes: [string, string] = [batman,superman];
    const villano: [string, number, boolean] = ['Lex Lutor',5,true];

    console.debug(parejaHeroes, villano);

    // Arreglos
    const aliados: string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
    console.debug(aliados);

    //Enumeraciones

    enum Poderes {
      acuaman = 0,
      batman = 1,
      flash = 5,
      superman = 100
    }


    console.debug(Poderes);

    // Retorno de funciones
    function activar_batiseñal(): string{
      return 'activada';
    }

    function pedir_ayuda(): void{
      console.debug('Auxilio!!!');
    }


    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = poder.length;
    console.debug( largoDelPoder );

    console.debug((poder as string).charAt(0));
    console.debug()
  })()

