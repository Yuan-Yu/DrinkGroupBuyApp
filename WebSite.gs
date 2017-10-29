var SpreadSheetID = '';
var functionMap = {'index':index};
function index(){
  return HtmlService.createTemplateFromFile('Index').evaluate();
}

function doGet(e) {
  var parameter = e.parameter;
  if (typeof(parameter['do']) == 'undefined'){
    parameter['do'] = 'index';
  }
  return functionMap[parameter['do']]();
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

function doPost(params) {
  var name = params.name;
  var drink = params.drink;
  var size = params.size;
  var sugar = params.sugar;
  var ice = params.ice;
  var price = params.price;
  
  //將Sheet指定為"資料庫"試算表     SpreadSheet = 試算表
  var SpreadSheet = SpreadsheetApp.openById(SpreadSheetID);
  var Sheet = SpreadSheet.getSheets()[0];
  //取得有資料的最後一行的"行數"(目的要在最後一行插入新資料)
  var LastRow = Sheet.getLastRow();
  
  //--開始寫入資料--
  
  //在最後一行的下一行寫入資料
  Sheet.getRange(LastRow+1, 1).setValue(name); //意即最後一行的加一行處，左邊數來第一格，寫入數值為number
  Sheet.getRange(LastRow+1, 2).setValue(drink); //意即最後一行的加一行處，左邊數來第二格，寫入數值為name
  Sheet.getRange(LastRow+1, 3).setValue(size); //意即最後一行的加一行處，左邊數來第三格，寫入數值為score
  Sheet.getRange(LastRow+1, 4).setValue(sugar); //意即最後一行的加一行處，左邊數來第三格，寫入數值為score
  Sheet.getRange(LastRow+1, 5).setValue(ice); //意即最後一行的加一行處，左邊數來第三格，寫入數值為score
  Sheet.getRange(LastRow+1, 6).setValue(price); 
}
