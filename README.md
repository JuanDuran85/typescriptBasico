# typescriptBasico
Ejemplos de TypeScript Básico.

1. Instalar TypeScript de manera global
    ```bash
        npm i -g typescript
    ```

2. Para ver la version instalada:  
    ```
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
    ```
        tsc --init
    ```


## Otras instalaciones:

1. RxJs
    ```
    npm install rxjs
    ```
2. Type RxJS 
   ```
   npm install --save @types/es6-shim
   ``` 
3. TSUN
   ```
   npm install -g tsun
   ```
