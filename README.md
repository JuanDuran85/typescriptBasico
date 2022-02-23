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
        tsc nombre_archivo.ts
    ```

4. Indicar por comando cual será la versión resultante de JS al compilar
    ```bash 
        tsc --target ES2015 nombre_archivo.ts
    ```  

5. Indicar cual será el directorio donde se creará el archivo compilado en JS
    ```bash 
        tsc --outDir js nombre_archivo.ts
    ```  

6. Generar el archivo de configuración de TS por comando.
    ```bash
        tsc --init
    ```
7. Trabajar con modo observador
   ```bash
        tsc --watch
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
