using System;
using System.Windows.Forms;

namespace CalculatorOOP
{
    public partial class Form1 : Form
    {   
        Model model = new Model();
        Logic logic = new Logic();
        

        public Form1()
        {
            InitializeComponent();
        }
        
        public int count;
        //GetSet Display
        public string GetDisplay()
        {
            return display.Text;
        }
        public void SetDisplay(string value)
        {
            display.Text = value;
        }

        //Functions
        public void checkDot() {
            for (int i = 0; i < GetDisplay().Length; i++)
            {
                if (GetDisplay()[i] == ',' || GetDisplay().Length > 8)
                {
                    return;
                }
            }
            SetDisplay(GetDisplay() + ',');
            model.SetIsCheck(false);
        }
        public void clickNumber(string n)
        {
            if (n == "0" && GetDisplay() == "0")
            {
                return;
            }
            else if (model.GetIsCheck())
            {
                SetDisplay(n);
                model.SetIsCheck(false);
            }
            else if (n != "0" && GetDisplay() == "0")
            {
                SetDisplay(n);
                model.SetIsCheck(false);
            }
            else
            {
                SetDisplay(GetDisplay() + n);
                displayCut(GetDisplay());
            }
        }
        public void displayCut(string a)
        {
            SetDisplay(cutDisplay(a));
        }
        public string cutDisplay(string a)
        {
            if (a.Length > 9)
            {
                a = a.Substring(0, 9);
            }
            return a;
        }
        public void clear()
        {
            SetDisplay("0");
            model.SetMemoryNumber(0);
            model.SetOperatorType("");
            model.SetIsCheck(true);
            model.SetIsResult(true);
        }

        public void lastOperationHelper()
        {
            string a = (model.GetMemoryNumber().ToString());
            if (a.Length > 9)
            {
                SetDisplay("mnogovato chisel, detka =*");
                return;
            }
            model.SetMemoryNumber(Convert.ToDouble(cutDisplay(a)));
            SetDisplay(model.GetMemoryNumber().ToString());
            cutDisplay(GetDisplay());
        }
        public void onOperationClickBtn(string opType)
        {
            model.SetMemoryNumber(Convert.ToDouble(GetDisplay()));
            model.SetOperatorType(opType);
            model.SetIsCheck(true);
            model.SetIsResult(true);
        }
        public void lastOperation()
        {
            if (model.GetIsCheck())
            {
                model.SetMemoryNumber(Convert.ToDouble(GetDisplay()));
            }
            else
            {
                switch (model.GetOperatorType())
                {
                    case "+":
                        model.SetMemoryNumber(model.GetMemoryNumber() + Convert.ToDouble(GetDisplay()));
                        lastOperationHelper();
                        break;
                    case "-":
                        model.SetMemoryNumber(model.GetMemoryNumber() - Convert.ToDouble(GetDisplay()));
                        lastOperationHelper();
                        break;
                    case "/":
                        model.SetMemoryNumber(model.GetMemoryNumber() / Convert.ToDouble(GetDisplay()));
                        lastOperationHelper();
                        break;
                    case "*":
                        model.SetMemoryNumber(model.GetMemoryNumber() * Convert.ToDouble(GetDisplay()));
                        lastOperationHelper();
                        break;
                }
            }
        }
        public double cut(double d)
        {
            string str = d.ToString();
            count = str.Length;
            str = cutDisplay(str);
            double dd = Convert.ToDouble(str);
            return dd;
        }
        public void result()
        {
            cut(model.GetMemoryNumber());
            model.SetIsCheck(true);
            model.SetIsResult(true);
            SetDisplay(model.GetMemoryNumber().ToString());
            displayCut(GetDisplay());

            if (count > 9)
            {
                model.SetMemoryNumber(0);
                model.SetOperatorType("");
                SetDisplay("mnogovato chisel, detka =*");
            }
        }
        public void resultBtnn()
        {
            if (model.GetIsResult())
            {
                model.SetCountNumber(Convert.ToDouble(GetDisplay()));
            }
            if (model.GetOperatorType() == "")
            {
                SetDisplay(GetDisplay());
            }
            switch (model.GetOperatorType())
            {
                case "+":
                    model.SetMemoryNumber(logic.Summ(model.GetMemoryNumber(), model.GetCountNumber()));
                    result();
                    break;
                case "-":
                    model.SetMemoryNumber(logic.Minus(model.GetMemoryNumber(), model.GetCountNumber()));
                    result();
                    break;
                case "*":
                    model.SetMemoryNumber(logic.Multiply(model.GetMemoryNumber(), model.GetCountNumber()));
                    result();
                    break;
                case "/":
                    if (model.GetCountNumber() == 0)
                    {
                        SetDisplay("0");
                        model.SetOperatorType("");
                        return;
                    }
                    model.SetMemoryNumber(logic.Divide(model.GetMemoryNumber(), model.GetCountNumber()));
                    cut(model.GetMemoryNumber());
                    model.SetIsCheck(true);
                    model.SetIsResult(false);
                    SetDisplay(model.GetMemoryNumber().ToString());
                    displayCut(GetDisplay());
                    break;

            }
            model.SetCountNumber(0);
            model.SetOperatorType("");
        }


        private void numbers_click(object sender, EventArgs e)
        {
            Button B = (Button)sender;
            clickNumber(B.Text);
        }

        private void clearBtn_Click(object sender, EventArgs e)
        {
            clear();
        }

        private void dotBtn_Click(object sender, EventArgs e)
        {
            checkDot();
        }

        private void plusBtn_Click(object sender, EventArgs e)
        {
            lastOperation();
            onOperationClickBtn("+");
        }

        private void minusBtn_Click(object sender, EventArgs e)
        {
            lastOperation();
            onOperationClickBtn("-");
        }

        private void multiplyBtn_Click(object sender, EventArgs e)
        {
            lastOperation();
            onOperationClickBtn("*");
        }

        private void divideBtn_Click(object sender, EventArgs e)
        {
            lastOperation();
            onOperationClickBtn("/");
        }

        private void resultBtn_Click(object sender, EventArgs e)
        {
            resultBtnn();
        }
    }
    }

