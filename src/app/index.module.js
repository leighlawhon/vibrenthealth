import { config } from './index.config';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';

angular.module('testforkarma', ['ngAria', 'mm.foundation'])
  .config(config)
  .run(runBlock)
  .controller('MainController', MainController)