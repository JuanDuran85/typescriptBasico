# typescriptBasico
Ejemplos de TypeScript Básico.

1. Instalar TypeScript de manera global
    ```bash
        npm i -g typescript
    ```

2. Para ver la version instalada:  
    ```bash
        tsc --version
    ```

3. Compilar un archivo TS.
    ```bash 
        tsc fileName.ts
    ```

4. Indicar por comando cual será la versión resultante de JS al compilar
    ```bash 
        tsc --target ES2015 fileName.ts
    ```  

5. Indicar por comando cual será el directorio donde se creará el archivo compilado en JS
    ```bash 
        tsc --outDir dirName fileName.ts
    ```  

6. Generar el archivo de configuración de TS por comando.
    ```bash
        tsc --init
    ```
    Para mas informacion del archivo deconfiguracion [tsconfig](https://www.typescriptlang.org/tsconfig)
  
7. Trabajar con modo observador
   ```bash
        tsc fileName.ts --watch
   ```
   or
   ```bash
        tsc fileName.ts -w
   ```

## Otras instalaciones:

1. RxJs
    ```bash
    npm install rxjs
    ```
2. Type RxJS 
   ```bash
   npm install --save @types/es6-shim
   ``` 
3. TSUN
   ```bash
   npm install -g tsun
   ```