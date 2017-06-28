import { config } from './index.config';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { CalcInput } from './components/calcInput/calcInput.directive';

angular.module('vibrenthealth', ['ngAria', 'mm.foundation'])
  .config(config)
  .run(runBlock)
  .controller('MainController', MainController)
  .directive('calcInput', CalcInput)