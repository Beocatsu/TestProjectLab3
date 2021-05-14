function TestSum()
{
  TestedApps.TestedApp.Run();//открытие приложения
  let calculator = Aliases.Item.Calculator;
  let button = calculator.button1;
  button.ClickButton();//нажатие "7"
  calculator.button4.ClickButton();//нажатие "+"
  button.ClickButton();//нажатие "7"
  calculator.button14.ClickButton();//нажатие "="
  var result = Aliases.Item.Calculator.WinFormsObject("textBox").Text;//вывод результата
  if (result == "= 14")
    Log.Message("операция сложения работает"); 
  else 
    Log.Message("операция сложения НЕ работает");
  calculator.Close();//закрытие приложения
}

function TestSqr()
{
  TestedApps.TestedApp.Run();
  Aliases.Item.Calculator.button9.ClickButton();//нажатие "1"
  Aliases.Item.Calculator.button7.ClickButton();//нажатие "6"
  Aliases.Item.Calculator.button17.ClickButton();//нажатие "x^2"
  var result = Aliases.Item.Calculator.WinFormsObject("textBox").Text;//вывод результата
  if (result == "=256")
    Log.Message("операция возведения в квадрат работает"); 
  else 
    Log.Message("операция возведения в квадрат НЕ работает");
}

function TestPercent()
{
  TestedApps.TestedApp.Run();
  let calculator = Aliases.Item.Calculator;
  let button = calculator.button9;
  button.ClickButton();//нажатие "1"
  let button2 = calculator.button12;
  button2.ClickButton();//нажатие "0"
  button2.ClickButton();//нажатие "0"
  calculator.button4.ClickButton();//нажатие "+"
  button.ClickButton();//нажатие "1"
  button2.ClickButton();//нажатие "0"
  calculator.button16.ClickButton();//нажатие "%"
  var result = Aliases.Item.Calculator.WinFormsObject("textBox").Text;//вывод результата
  if (result == "= 110")
    Log.Message("операция взятия процента от числа работает"); 
  else 
    Log.Message("операция взятия процента от числа НЕ работает");
  calculator.Close();
}

function TestBackspace()
{
  TestedApps.TestedApp.Run();
  let calculator = Aliases.Item.Calculator;
  calculator.button11.ClickButton();//нажатие "3"
  calculator.button6.ClickButton();//нажатие "5"
  calculator.button7.ClickButton();//нажатие "6"
  let button = calculator.button22;
  button.ClickButton();//нажатие "<-"
  var result = Aliases.Item.Calculator.WinFormsObject("textBox").Text;//вывод результата
  if (result == "35")
    Log.Message("операция удаления последней цифры работает"); 
  else 
    Log.Message("операция удаления последней цифры НЕ работает");
  calculator.Close();
}

function TestMinus()
{
  TestedApps.TestedApp.Run();
  let calculator = Aliases.Item.Calculator;
  calculator.button11.ClickButton();//нажатие "3"
  calculator.button10.ClickButton();//нажатие "2"
  calculator.button5.ClickButton();//нажатие "4"
  calculator.button6.ClickButton();//нажатие "5"
  calculator.button20.ClickButton();//нажатие "-x"
  var result = Aliases.Item.Calculator.WinFormsObject("textBox").Text;//вывод результата
  if (result == "-3245")
    Log.Message("операция получения отрицательного числа работает"); 
  else 
    Log.Message("операция получения отрицательного числа НЕ работает");
  calculator.Close();
}