describe("function opearators", function() {
    it("call function summ with args memoryNumber = 5, countNumber = 10 and return 15", function () {
        const a = 5;
        const b = 10;
        const exp = 15;
        const act = Summ(a, b);

        assert.equal(act, exp);
    });
    it("call function summ with args memoryNumber = 10, countNumber = 23 and return 33", function () {
        const a = 10;
        const b = 23;
        const exp = 33;
        const act = Summ(a, b);

        assert.equal(act, exp);
    });
    it("call function summ with args memoryNumber = 0, countNumber = 45 and return 45", function () {
        const a = 0;
        const b = 45;
        const exp = 45;
        const act = Summ(a, b);

        assert.equal(act, exp);
    });
    it("call function summ with args memoryNumber = 1.1, countNumber =  8.9 and return 10", function () {
        const a = 1.1;
        const b =  8.9;
        const exp = 10;
        const act = Summ(a, b);

        assert.equal(act, exp);
    });
    it("call function summ with args memoryNumber = 67, countNumber = 0 and return 67", function () {
        const a = 67;
        const b = 0;
        const exp = 67;
        const act = Summ(a, b);

        assert.equal(act, exp);
    });
    it("call function summ with args memoryNumber = 2.3, countNumber = 4.5 and return 6.8", function () {
        const a = 2.3;
        const b = 4.5;
        const exp = 6.8;
        const act = Summ(a, b);

        assert.equal(act, exp);
    });
    it("call function summ with args memoryNumber = 0, countNumber = 0 and return 0", function () {
        const a = 0;
        const b = 0;
        const exp = 0;
        const act = Summ(a, b);

        assert.equal(act, exp);
    });
    
    it("call function summ with args memoryNumber = 11, countNumber = 55 and return 66", function () {
        const a = 11;
        const b = 55;
        const exp = 66;
        const act = Summ(a, b);

        assert.equal(act, exp);
    });
    it("call function summ with args memoryNumber = 2.2, countNumber = 3.3 and return 5.5", function () {
        const a = 2.2;
        const b = 3.3;
        const exp = 5.5;
        const act = Summ(a, b);

        assert.equal(act, exp);
    });

    it("call function summ with args memoryNumber = 140, countNumber = -40 and return 100", function () {
        const a = 140;
        const b = -40;
        const exp = 100;
        const act = Summ(a, b);

        assert.equal(act, exp);
    });
    it("call function summ with args memoryNumber = 1488, countNumber = 12 and return 1500", function () {
        const a = 1488;
        const b = 12;
        const exp = 1500;
        const act = Summ(a, b);

        assert.equal(act, exp);
    });

    it("call function summ with args memoryNumber = 212, countNumber = -220 and return -8", function () {
        const a = 212;
        const b = -220;
        const exp = -8;
        const act = Summ(a, b);

        assert.equal(act, exp);
    });
    it("call function summ with args memoryNumber = 38, countNumber = 2 and return 40", function () {
        const a = 38;
        const b = 2;
        const exp = 40;
        const act = Summ(a, b);

        assert.equal(act, exp);
    });

    it("call function summ with args memoryNumber = 144, countNumber = 6 and return 150", function () {
        const a = 144;
        const b = 6;
        const exp = 150;
        const act = Summ(a, b);

        assert.equal(act, exp);
    });
    it("call function summ with args memoryNumber = -2, countNumber = 5 and return 3", function () {
        const a = -2;
        const b = 5;
        const exp = 3;
        const act = Summ(a, b);

        assert.equal(act, exp);
    });
    it("call function summ with args memoryNumber = -122, countNumber = 100 and return -22", function () {
        const a = -122;
        const b = 100;
        const exp = -22;
        const act = Summ(a, b);

        assert.equal(act, exp);
    });
    it("call function summ with args memoryNumber = 423, countNumber = -423 and return 0", function () {
        const a = 423;
        const b = -423;
        const exp = 0;
        const act = Summ(a, b);

        assert.equal(act, exp);
    });
    it("call function summ with args memoryNumber = 322, countNumber = -72 and return 250", function () {
        const a = 322;
        const b = -72;
        const exp = 250;
        const act = Summ(a, b);

        assert.equal(act, exp);
    });
    it("call function summ with args memoryNumber = 13, countNumber = -16 and return -3", function () {
        const a = 13;
        const b = -16;
        const exp = -3;
        const act = Summ(a, b);

        assert.equal(act, exp);
    });
    it("call function summ with args memoryNumber = 131, countNumber = -31 and return 100", function () {
        const a = 131;
        const b = -31;
        const exp = 100;
        const act = Summ(a, b);
        assert.equal(act, exp);
    });

    it("call function multiply with args memoryNumber = 15, countNumber = 10 and return 150", function () {
        const a = 15;
        const b = 10;
        const exp = 150;
        const act = multiply(a, b);

        assert.equal(act, exp);
    });
     it("call function multiply with args memoryNumber = 25, countNumber = 10 and return 250", function () {
        const a = 25;
        const b = 10;
        const exp = 250;
        const act = multiply(a, b);

        assert.equal(act, exp);
    });
      it("call function multiply with args memoryNumber = 1.5, countNumber = 10 and return 15", function () {
        const a = 1.5;
        const b = 10;
        const exp = 15;
        const act = multiply(a, b);

        assert.equal(act, exp);
    });
       it("call function multiply with args memoryNumber = 2.5, countNumber = 2.5 and return 6.25", function () {
        const a = 2.5;
        const b = 2.5;
        const exp = 6.25;
        const act = multiply(a, b);

        assert.equal(act, exp);
    });
        it("call function multiply with args memoryNumber = -8, countNumber = 5 and return -40", function () {
        const a = -8;
        const b = 5;
        const exp = -40;
        const act = multiply(a, b);

        assert.equal(act, exp);
    });
         it("call function multiply with args memoryNumber = 4, countNumber = 8.1 and return 32.4", function () {
        const a = 4;
        const b = 8.1;
        const exp = 32.4;
        const act = multiply(a, b);

        assert.equal(act, exp);
    });
          it("call function multiply with args memoryNumber = 62.8, countNumber = 6.28 and return 394.384", function () {
        const a = 62.8;
        const b = 6.28
        const exp = 394.384;
        const act = multiply(a, b);

        assert.equal(act, exp);
    });
           it("call function multiply with args memoryNumber = -22, countNumber = 5 and return -110", function () {
        const a = -22;
        const b = 5;
        const exp = -110;
        const act = multiply(a, b);

        assert.equal(act, exp);
    });
            it("call function multiply with args memoryNumber = 1.2828, countNumber = 200 and return 256.56", function () {
        const a = 1.2828;
        const b = 200;
        const exp = 256.56;
        const act = multiply(a, b);

        assert.equal(act, exp);
    });
             it("call function multiply with args memoryNumber = 3.99, countNumber = 4.88 and return 19.4712", function () {
        const a = 3.99;
        const b = 4.88;
        const exp = 19.4712;
        const act = multiply(a, b);

        assert.equal(act, exp);
    });
              it("call function multiply with args memoryNumber = 23, countNumber = 100000 and return 2300000", function () {
        const a = 23;
        const b = 100000;
        const exp = 2300000;
        const act = multiply(a, b);

        assert.equal(act, exp);
    });
               it("call function multiply with args memoryNumber = -23, countNumber = 100000 and return -2300000", function () {
        const a = -23;
        const b = 100000;
        const exp = -2300000;
        const act = multiply(a, b);

        assert.equal(act, exp);
    });
                it("call function multiply with args memoryNumber = 44, countNumber = 44 and return 1936", function () {
        const a = 44;
        const b = 44;
        const exp = 1936;
        const act = multiply(a, b);

        assert.equal(act, exp);
    });
                 it("call function multiply with args memoryNumber = 555, countNumber = 555 and return 308025", function () {
        const a = 555;
        const b = 555;
        const exp = 308025;
        const act = multiply(a, b);

        assert.equal(act, exp);
    });
                  it("call function multiply with args memoryNumber = 2, countNumber = 22 and return 44", function () {
        const a = 2;
        const b = 22;
        const exp = 44;
        const act = multiply(a, b);

        assert.equal(act, exp);
    });
                   it("call function multiply with args memoryNumber = -2, countNumber = 22 and return -44", function () {
        const a = -2;
        const b = 22;
        const exp = -44;
        const act = multiply(a, b);

        assert.equal(act, exp);
    });
                    it("call function multiply with args memoryNumber = 0, countNumber = 256 and return 0", function () {
        const a = 0;
        const b = 256;
        const exp = 0;
        const act = multiply(a, b);

        assert.equal(act, exp);
    });
                     it("call function multiply with args memoryNumber = 88, countNumber = 0 and return 0", function () {
        const a = 88;
        const b = 0;
        const exp = 0;
        const act = multiply(a, b);

        assert.equal(act, exp);
    });
                      it("call function multiply with args memoryNumber = -88, countNumber = 0 and return 0", function () {
        const a = -88;
        const b = 0;
        const exp = 0;
        const act = multiply(a, b);

        assert.equal(act, exp);
    });
                       it("call function multiply with args memoryNumber = 22, countNumber = 22 and return 484", function () {
        const a = 22;
        const b = 22;
        const exp = 484;
        const act = multiply(a, b);

        assert.equal(act, exp);
    });
    it("call function divide with args memoryNumber = 20, countNumber = 10 and return 2", function () {
        const a = 20;
        const b = 10;
        const exp = 2;
        const act = divide(a, b);

        assert.equal(act, exp);
    });
    it("call function divide with args memoryNumber = 20, countNumber = 10 and return 2", function () {
        const a = 20;
        const b = 10;
        const exp = 2;
        const act = divide(a, b);

        assert.equal(act, exp);
    });
    it("call function divide with args memoryNumber = 33, countNumber = 3 and return 11", function () {
        const a = 33;
        const b = 3;
        const exp = 11;
        const act = divide(a, b);

        assert.equal(act, exp);
    });
    it("call function divide with args memoryNumber = 3, countNumber = 3 and return 1", function () {
        const a = 3;
        const b = 3;
        const exp = 1;
        const act = divide(a, b);

        assert.equal(act, exp);
    });
    it("call function divide with args memoryNumber = 12, countNumber = 4 and return 3", function () {
        const a = 12;
        const b = 3;
        const exp = 4;
        const act = divide(a, b);

        assert.equal(act, exp);
    });
    it("call function divide with args memoryNumber = -20, countNumber = 2 and return -10", function () {
        const a = -20;
        const b = 2;
        const exp = -10;
        const act = divide(a, b);

        assert.equal(act, exp);
    });
    it("call function divide with args memoryNumber = 40, countNumber = 8 and return 5", function () {
        const a = 40;
        const b = 8;
        const exp = 5;
        const act = divide(a, b);

        assert.equal(act, exp);
    });
    it("call function divide with args memoryNumber = 10, countNumber = 2 and return 5", function () {
        const a = 10;
        const b = 2;
        const exp = 5;
        const act = divide(a, b);

        assert.equal(act, exp);
    });
    it("call function divide with args memoryNumber = -49, countNumber = 7 and return -7", function () {
        const a = -49;
        const b = 7;
        const exp = -7;
        const act = divide(a, b);

        assert.equal(act, exp);
    });
    it("call function divide with args memoryNumber = 49, countNumber = 7 and return 7", function () {
        const a = 49;
        const b = 7;
        const exp = 7;
        const act = divide(a, b);

        assert.equal(act, exp);
    });
    it("call function divide with args memoryNumber = 10, countNumber = -2 and return -5", function () {
        const a = 10;
        const b = -2;
        const exp = -5;
        const act = divide(a, b);

        assert.equal(act, exp);
    });
    it("call function divide with args memoryNumber = 100, countNumber = 10 and return 10", function () {
        const a = 100;
        const b = 10;
        const exp = 10;
        const act = divide(a, b);

        assert.equal(act, exp);
    });
    it("call function divide with args memoryNumber = 333, countNumber = 3 and return 100", function () {
        const a = 20;
        const b = 10;
        const exp = 2;
        const act = divide(a, b);

        assert.equal(act, exp);
    });
    it("call function divide with args memoryNumber = 3.5, countNumber = 5 and return 0.7", function () {
        const a = 20;
        const b = 10;
        const exp = 2;
        const act = divide(a, b);

        assert.equal(act, exp);
    });
    it("call function divide with args memoryNumber = 55, countNumber = 5 and return 11", function () {
        const a = 55;
        const b = 5;
        const exp = 11;
        const act = divide(a, b);

        assert.equal(act, exp);
    });
    it("call function divide with args memoryNumber = 33, countNumber = 10 and return 3.3", function () {
        const a = 20;
        const b = 10;
        const exp = 2;
        const act = divide(a, b);

        assert.equal(act, exp);
    });
    it("call function divide with args memoryNumber = 222, countNumber = 0 and return 0", function () {
        const a = 222;
        const b = 2;
        const exp = 111;
        const act = divide(a, b);

        assert.equal(act, exp);
    });
      it("call function divide with args memoryNumber = 340, countNumber = 34 and return 10", function () {
        const a = 340;
        const b = 34;
        const exp =10;
        const act = divide(a, b);

        assert.equal(act, exp);
    });
      it("call function divide with args memoryNumber = 111, countNumber = 1 and return 111", function () {
        const a = 111;
        const b = 1;
        const exp = 111;
        const act = divide(a, b);

        assert.equal(act, exp);
    });
    it("call function divide with args memoryNumber = 322, countNumber = 10 and return 32.2", function () {
        const a = 322;
        const b = 10;
        const exp = 32.2;
        const act = divide(a, b);

        assert.equal(act, exp);
    });
    it("call function divide with args memoryNumber = 700, countNumber = 7 and return 100", function () {
        const a = 700;
        const b = 7;
        const exp = 100;
        const act = divide(a, b);

        assert.equal(act, exp);
    });
    it("call function cutDisplay with args a = -1.123123213221 and return -1.123123 symbols", function () {
        const a   = '-1.123123213221';
        const exp = -1.123123;
        const act = cutDisplay(a);
        assert.equal(act, exp);
    });
    it("call function cutDisplay with args a = 22334422221 and return 223344222 symbols", function () {
        const a   = '22334422221';
        const exp = 223344222;
        const act = cutDisplay(a);
        assert.equal(act, exp);
    });
    it("call function cutDisplay with args a = 123.55589648 and return 123.55589 symbols", function () {
        const a   = '123.55589648';
        const exp = 123.55589;
        const act = cutDisplay(a);
        assert.equal(act, exp);
    });
    it("call function cutDisplay with args a = 0.66225889654 and return 0.6622588 symbols", function () {
        const a   = '0.66225889654';
        const exp = 0.6622588;
        const act = cutDisplay(a);
        assert.equal(act, exp);
    });
    it("call function cutDisplay with args a = 525515000266 and return 525515000 symbols", function () {
        const a   = '525515000266';
        const exp = 525515000;
        const act = cutDisplay(a);
        assert.equal(act, exp);
    });
    it("call function cutDisplay with args a = 8999985556662 and return 899998555 symbols", function () {
        const a   = '8999985556662';
        const exp = 899998555;
        const act = cutDisplay(a);
        assert.equal(act, exp);
    });
    it("call function cutDisplay with args a = -12.5558889998 and return -12.55588 symbols", function () {
        const a   = '-12.5558889998';
        const exp = -12.55588;
        const act = cutDisplay(a);
        assert.equal(act, exp);
    });
    it("call function cutDisplay with args a = -0.5521181789 and return -0.552118 symbols", function () {
        const a   = '-0.5521181789';
        const exp = -0.552118;
        const act = cutDisplay(a);
        assert.equal(act, exp);
    });
    it("call function cutDisplay with args a = 6541651654188 and return 654165165 symbols", function () {
        const a   = '6541651654188';
        const exp = 654165165;
        const act = cutDisplay(a);
        assert.equal(act, exp);
    });
    it("call function cutDisplay with args a = -25.6698896563 and return -25.66988 symbols", function () {
        const a   = '-25.6698896563';
        const exp = -25.66988;
        const act = cutDisplay(a);
        assert.equal(act, exp);
    });
    it("call function cutDisplay with args a = 0.3365214789 and return 0.3365214 symbols", function () {
        const a   = '0.3365214789';
        const exp = 0.3365214;
        const act = cutDisplay(a);
        assert.equal(act, exp);
    });
    it("call function cutDisplay with args a = 4954151585214 and return 495415158 symbols", function () {
        const a   = '4954151585214';
        const exp = 495415158;
        const act = cutDisplay(a);
        assert.equal(act, exp);
    });
    it("call function cutDisplay with args a = 11144455563 and return 111444555 symbols", function () {
        const a   = '11144455563';
        const exp = 111444555;
        const act = cutDisplay(a);
        assert.equal(act, exp);
    });
    it("call function cutDisplay with args a = -85478965236669988541 and return -85478965 symbols", function () {
        const a   = '-85478965236669988541';
        const exp = -85478965;
        const act = cutDisplay(a);
        assert.equal(act, exp);
    });
    it("call function cutDisplay with args a = 55888969554412236.88974456 and return 558889695 symbols", function () {
        const a   = '55888969554412236.88974456';
        const exp = 558889695;
        const act = cutDisplay(a);
        assert.equal(act, exp);
    });
    it("call function cutDisplay with args a = 2255889900000000112563 and return 225588990 symbols", function () {
        const a   = '2255889900000000112563';
        const exp = 225588990;
        const act = cutDisplay(a);
        assert.equal(act, exp);
    });
    it("call function cutDisplay with args a = -0.8899587744455664 and return -0.889958 symbols", function () {
        const a   = '-0.8899587744455664';
        const exp = -0.889958;
        const act = cutDisplay(a);
        assert.equal(act, exp);
    });
    it("call function cutDisplay with args a = 0.9988877455554122223 and return 0.9988877 symbols", function () {
        const a   = '0.9988877455554122223';
        const exp = 0.9988877;
        const act = cutDisplay(a);
        assert.equal(act, exp);
    });
    it("call function cutDisplay with args a = -555889625412778 and return -55588962 symbols", function () {
        const a   = '-555889625412778';
        const exp = -55588962;
        const act = cutDisplay(a);
        assert.equal(act, exp);
    });
     it("call function minus with args memoryNumber = 22, countNumber = 2 and return 20", function () {
        const a = 22;
        const b = 2;
        const exp = 20;
        const act = minus(a, b);

        assert.equal(act, exp);
    });
    it("call function minus with args memoryNumber = 11, countNumber = 5 and return 6", function () {
        const a = 11;
        const b = 5;
        const exp = 6;
        const act = minus(a, b);

        assert.equal(act, exp);
    });
    it("call function minus with args memoryNumber = -2, countNumber = -2 and return 0", function () {
        const a = -2;
        const b = -2;
        const exp = 0;
        const act = minus(a, b);

        assert.equal(act, exp);
    });
      it("call function minus with args memoryNumber = 15, countNumber = 7 and return 8", function () {
        const a = 15;
        const b = 7;
        const exp = 8;
        const act = minus(a, b);

        assert.equal(act, exp);
    });
      it("call function minus with args memoryNumber = 15, countNumber = 10 and return 5", function () {
        const a = 15;
        const b = 10;
        const exp = 5;
        const act = minus(a, b);

        assert.equal(act, exp);
    });
    it("call function minus with args memoryNumber = 10, countNumber = 5 and return 5", function () {
        const a = 10;
        const b = 5;
        const exp = 5;
        const act = minus(a, b);

        assert.equal(act, exp);
    });
    it("call function minus with args memoryNumber = 2, countNumber = 5 and return -3", function () {
        const a = 2;
        const b = 5;
        const exp = -3;
        const act = minus(a, b);

        assert.equal(act, exp);
    });
    it("call function minus with args memoryNumber = 134, countNumber = 100 and return 34", function () {
        const a = 134;
        const b = 100;
        const exp = 34;
        const act = minus(a, b);

        assert.equal(act, exp);
    });
    it("call function minus with args memoryNumber = 2.2, countNumber = 0.2 and return 2", function () {
        const a = 2.2;
        const b = 0.2;
        const exp = 2;
        const act = minus(a, b);

        assert.equal(act, exp);
    });
    it("call function minus with args memoryNumber = 13.5, countNumber = 3.5 and return 10", function () {
        const a = 13.5;
        const b = 3.5;
        const exp = 10;
        const act = minus(a, b);

        assert.equal(act, exp);
    });
    it("call function minus with args memoryNumber = 100, countNumber = 300 and return -200", function () {
        const a = 100;
        const b = 300;
        const exp = -200;
        const act = minus(a, b);

        assert.equal(act, exp);
    });
    it("call function minus with args memoryNumber = 19, countNumber = 20 and return -1", function () {
        const a = 19;
        const b = 20;
        const exp = -1;
        const act = minus(a, b);

        assert.equal(act, exp);
    });
    it("call function minus with args memoryNumber = -20, countNumber = 30 and return -50", function () {
        const a = -20;
        const b = 30;
        const exp = -50;
        const act = minus(a, b);

        assert.equal(act, exp);
    });
    it("call function minus with args memoryNumber = 12, countNumber = 15 and return -3", function () {
        const a = 12;
        const b = 15;
        const exp = -3;
        const act = minus(a, b);

        assert.equal(act, exp);
    });
    it("call function minus with args memoryNumber = -22, countNumber = -22 and return 0", function () {
        const a = -22;
        const b = -22;
        const exp = 0;
        const act = minus(a, b);

        assert.equal(act, exp);
    });
    it("call function minus with args memoryNumber = 1, countNumber = 2 and return -1", function () {
        const a = 1;
        const b = 2;
        const exp = -1;
        const act = minus(a, b);

        assert.equal(act, exp);
    });
    it("call function minus with args memoryNumber = -35, countNumber = 1 and return -36", function () {
        const a = -35;
        const b = 1;
        const exp = -36;
        const act = minus(a, b);

        assert.equal(act, exp);
    });
    it("call function minus with args memoryNumber = -322, countNumber = -322 and return 0", function () {
        const a = -322;
        const b = -322;
        const exp = 0;
        const act = minus(a, b);

        assert.equal(act, exp);
    });
    it("call function minus with args memoryNumber = 228, countNumber = 128 and return 100", function () {
        const a = 228;
        const b = 128;
        const exp = 100;
        const act = minus(a, b);

        assert.equal(act, exp);
    });
    it("call function minus with args memoryNumber = 3, countNumber = 2000 and return -1997", function () {
        const a = 3;
        const b = 2000;
        const exp = -1997;
        const act = minus(a, b);

        assert.equal(act, exp);
    });
    


});