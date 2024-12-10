import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

// Declarar el tipo de `require.context` si no existe
declare const require: {
  context(
    path: string,
    deep?: boolean,
    filter?: RegExp
  ): {
    keys(): string[];
    <T>(id: string): T;
  };
};

// Ajuste para cargar los archivos de prueba
const testContext = require.context('./', true, /\.spec\.ts$/);
testContext.keys().forEach(testContext);
