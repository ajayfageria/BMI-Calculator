function bmiValue() {
    var height = (document.getElementById("height").value) * 0.3048;
    var weight = document.getElementById("weight").value;
    var bmivalue = weight / Math.pow(height, height);
    bmivalue = Math.round(bmivalue)
    document.getElementById("bmivalue").value = bmivalue;

}