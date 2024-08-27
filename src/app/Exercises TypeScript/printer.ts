// //Crear una clase llamada Impresora (Printer) con los métodos: Modelo (model), Escanear (scan), Imprimir (print), Copiar (copy).
// export class Printer {
//   constructor(private name: string) {}
//
//   model(): string {
//     return this.name;
//   }
//
//   scan(): void {
//     console.log("Escaneando");
//   }
//
//   print(): void {
//     console.log("Imprimiendo");
//   }
//
//   copy(): void {
//     console.log("Copiando");
//   }
// }
//
//
//
// // Crear 3 Clases que implementan la clase Impresora (Printer): Hp, Canon y Brother.
// import { Printer } from '';
//
// export class Hp extends Printer {
//   constructor(name: string) {
//     super(name);
//   }
// }
//
// export class Canon extends Printer {
//   constructor(mame: string) {
//     super(name);
//   }
// }
//
// export class Brother extends Printer {
//   constructor(name: string) {
//     super(name);
//   }
// }
//
//
//
// // Crear una interfaz y clase llamada Red (Grid) con los métodos: Conectar (Connect) y Desconectar (Disconnect).
// export interface Grid {
//   connect(): void;
//   disconnect(): void;
// }
//
// export class Red implements Grid {
//   connect(): void {
//     console.log("Conectando a la red");
//   }
//
//   disconnect(): void {
//     console.log("Desconectando de la red");
//   }
// }
//
//
//
// // Las Clases Hp y Brother deben implementar Red (Grid).
// import { Hp, Brother } from '';
// import { Grid } from '';
//
// export class Hp implements Grid {
//   connect(): void {
//     console.log("Hp conectada a la red");
//   }
//
//   disconnect(): void {
//     console.log("Hp desconectada de la red");
//   }
// }
//
// export class Brother implements Grid {
//   connect(): void {
//     console.log("Brother conectada a la red");
//   }
//
//   disconnect(): void {
//     console.log("Brother desconectada de la red");
//   }
// }
