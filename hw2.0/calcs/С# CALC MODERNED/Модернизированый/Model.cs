namespace CalculatorOOP 
{
    public class Model
    {
        
        private bool isCheck = true;
        private bool isResult = false;
        private double countNumber = 0;
        private double memoryNumber = 0;
        private string operatorType = "";
   
        public void SetIsCheck(bool value)
        {
            isCheck = value;
        }
        public bool GetIsCheck()
        {
            return isCheck;
        }
        public void SetIsResult(bool value)
        {
            isResult = value;
        }
        public bool GetIsResult()
        {
            return isResult;
        }
        public void SetCountNumber(double value)
        {
            countNumber = value;
        }
        public double GetCountNumber()
        {
            return countNumber;
        }
        public void SetMemoryNumber(double value)
        {
            memoryNumber = value;
        }
        public double GetMemoryNumber()
        {
            return memoryNumber;
        }
        public void SetOperatorType(string value)
        {
            operatorType = value;
        }
        public string GetOperatorType()
        {
            return operatorType;
        }     
    }
}
