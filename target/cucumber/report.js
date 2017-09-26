$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('cucumberJava\Feature\cucumberJava.feature');
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 19,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 21,
  "name": "Ejemplo de uso de Cucumber en el que se",
  "description": "va a probar el funcionamiento de una calculadora\r\nque es capaz de sumar y de restar",
  "id": "ejemplo-de-uso-de-cucumber-en-el-que-se",
  "keyword": "Feature",
  "tags": [
    {
      "line": 20,
      "name": "@featureTest"
    }
  ]
});
formatter.scenario({
  "line": 25,
  "name": "Suma de dos valores",
  "description": "",
  "id": "ejemplo-de-uso-de-cucumber-en-el-que-se;suma-de-dos-valores",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "Tengo una calculadora inicializada",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "Sumo los valores 23 y 14",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "El resultado es 37",
  "keyword": "Then "
});
formatter.match({
  "location": "annotation.tengoUnaCalculadoraInicializada()"
});
formatter.result({
  "duration": 514758697,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23",
      "offset": 17
    },
    {
      "val": "14",
      "offset": 22
    }
  ],
  "location": "annotation.sumoLosValores(int,int)"
});
formatter.result({
  "duration": 2488573,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "37",
      "offset": 16
    }
  ],
  "location": "annotation.elResultadoEs(int)"
});
formatter.result({
  "duration": 3582736,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Resta de dos valores",
  "description": "",
  "id": "ejemplo-de-uso-de-cucumber-en-el-que-se;resta-de-dos-valores",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "Tengo una calculadora inicializada",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "Resto los valores 34 y 14",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "El resultado es 20",
  "keyword": "Then "
});
formatter.match({
  "location": "annotation.tengoUnaCalculadoraInicializada()"
});
formatter.result({
  "duration": 38974,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "34",
      "offset": 18
    },
    {
      "val": "14",
      "offset": 23
    }
  ],
  "location": "annotation.restoLosValores(int,int)"
});
formatter.result({
  "duration": 169369,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 16
    }
  ],
  "location": "annotation.elResultadoEs(int)"
});
formatter.result({
  "duration": 140018,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Multiplicacion de dos valores",
  "description": "",
  "id": "ejemplo-de-uso-de-cucumber-en-el-que-se;multiplicacion-de-dos-valores",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@Scenario3"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "Tengo una calculadora inicializada",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "Multiplico los valores 4 y 2",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "El resultado es 8",
  "keyword": "Then "
});
formatter.match({
  "location": "annotation.tengoUnaCalculadoraInicializada()"
});
formatter.result({
  "duration": 40418,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 23
    },
    {
      "val": "2",
      "offset": 27
    }
  ],
  "location": "annotation.multiplicoLosValores(int,int)"
});
formatter.result({
  "duration": 156859,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 16
    }
  ],
  "location": "annotation.elResultadoEs(int)"
});
formatter.result({
  "duration": 1227446,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Division de dos valores",
  "description": "",
  "id": "ejemplo-de-uso-de-cucumber-en-el-que-se;division-de-dos-valores",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 42,
      "name": "@Scenario4"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "Tengo una calculadora inicializada",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "Divido los valores 4 y 2",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "El resultado es 2",
  "keyword": "Then "
});
formatter.match({
  "location": "annotation.tengoUnaCalculadoraInicializada()"
});
formatter.result({
  "duration": 39456,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 19
    },
    {
      "val": "2",
      "offset": 23
    }
  ],
  "location": "annotation.dividoLosValores(int,int)"
});
formatter.result({
  "duration": 166001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "annotation.elResultadoEs(int)"
});
formatter.result({
  "duration": 101044,
  "status": "passed"
});
});