# typescriptBasico
Ejemplos de TypeScript Básico.

1. Instalar TypeScript de manera global
    ```bash
        npm i -g typescript
    ```

2. Para ver la version instalada: 
    ```
        ts --version
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